module.exports ={
    devServer: {
        // development server port 8000
        // 设置前端端口
        port: 8081,
        // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
        // 代理
        proxy : {
            '/api': {
                // 配置跨域请求路径
                target: 'http://localhost:8082',
                ws: false,
                changeOrigin : true,
                // 重写请求地址
                pathRewrite:{
                    "/api":""
                }
            }
        }
    },
    css: {
      loaderOptions: {
          // 等比例缩放
          postcss: {
              plugins: {
                  postcss
              }
          }
      }
    },
    lintOnSave: false
}

// 1. 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 2. 配置基本大小
const postcss = px2rem({
    // 基准大小 baseSize，需要和rem.js中相同
    remUnit: 100
})
