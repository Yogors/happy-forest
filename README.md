## 安装使用

- 环境配置 **本地环境需要安装 pnpm 7.x 、Node.js 14.18+ 和 Git**

- 克隆代码


- 安装依赖

```bash
pnpm i
```

- 运行

```bash
pnpm dev
```

- 打包

```bash
pnpm build
```

## Docker 部署

- Docker 部署 Soybean

```bash
docker run --name soybean -p 80:80 -d soybeanjs/soybean-admin:v0.9.6
```

- 访问 Happy Forest

打开本地浏览器访问`http://localhost`

## 如何贡献

非常欢迎您的加入！[提一个 Issue](https://github.com/honghuangdc/soybean-admin/issues/new) 或者提交一个 Pull Request。

## Git 贡献提交规范

项目已经内置 Angular 提交规范，直接执行 commit 命令即可生成符合 Angular 提交规范的 commit。

项目已用 simple-git-hooks 代替了 husky, 旧版本用了 husky，执行 pnpm soy init-git-hooks 进行初始化配置

## 浏览器支持

本地开发推荐使用`Chrome 90+` 浏览器

支持现代浏览器, 不支持 IE

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"  />](http://godban.github.io/browsers-support-badges/)IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari |
| :-: | :-: | :-: | :-: | :-: |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

