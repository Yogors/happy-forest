/** 请求服务的环境配置 */
type ServiceEnv = Record<ServiceEnvType, ServiceEnvConfig>;
// 打包配置

// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
/** 不同请求服务的环境配置 */
const serviceEnv: ServiceEnv = {
  dev: {
    url: 'http://localhost:3333'
  },
  test: {
    url: 'http://47.99.142.113:8080/sdb'
  },
  prod: {
    url: 'http://localhost:8080'
  }
};

/**
 * 获取当前环境模式下的请求服务的配置
 * @param env 环境
 */
export function getServiceEnvConfig(env: ImportMetaEnv): ServiceEnvConfigWithProxyPattern {
  const { VITE_SERVICE_ENV = 'dev' } = env;

  const config = serviceEnv[VITE_SERVICE_ENV];

  return {
    ...config,
    proxyPattern: '/sdb'
  };
}

export function setupBuild() {
  return {
    outDir: 'dist',
    sourcemap: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      input: {
        index: 'index.html'
      },
      // 静态资源分类打包
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        // 处理GitHub Pages 部署 _plugin-vue_export-helper.js 404
        // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
        sanitizeFileName(name: any) {
          const match = DRIVE_LETTER_REGEX.exec(name);
          const driveLetter = match ? match[0] : '';
          // A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
          // Otherwise, avoid them because they can refer to NTFS alternate data streams.
          return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '');
        },
        manualChunks(id: any) {
          if (id.includes('node_modules')) {
            return (
              // eslint-disable-next-line no-useless-escape
              id.toString().match(/\/node_modules\/(?!.pnpm)(?<moduleName>[^\/]*)\//)?.groups!.moduleName ?? 'vender'
            );
          }
          return '';
        }
        // manualChunks(id) {
        //   if (id.includes('node_modules')) {
        //     return id.toString().split('node_modules/')[1].split('/')[0].toString()
        //   }
        // }
      }
    }
  };
}
