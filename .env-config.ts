/** 请求服务的环境配置 */
type ServiceEnv = Record<ServiceEnvType, ServiceEnvConfig>;

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