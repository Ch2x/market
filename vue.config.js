const path = require('path')
const projectRoot = path.resolve(__dirname)
const {
  SkeletonPlugin
} = require('page-skeleton-webpack-plugin')

module.exports = {
  lintOnSave: true,

  configureWebpack: {
    resolve: {
      alias: {
        '@': `${projectRoot}/src`
      }
    },
    plugins: [
      new SkeletonPlugin({
        pathname: path.resolve(__dirname, `./shell`), // 用来存储 shell 文件的地址
        staticDir: path.resolve(__dirname, './dist'), // 最好和 `output.path` 相同
        routes: ['/'], // 将需要生成骨架屏的路由添加到数组中
      })
    ]
  },

  chainWebpack: (config) => { // 解决vue-cli3脚手架创建的项目压缩html 干掉<!-- shell -->导致骨架屏不生效
    if (process.env.NODE_ENV !== 'development') {
      config.plugin('html').tap(args => {
        args[0].minify.removeComments = false
        return args
      })
    }
  },
}