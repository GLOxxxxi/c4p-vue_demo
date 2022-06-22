const webpack = require("webpack");
module.exports ={
    publicPath:"./",
    // 输出文件夹
    outputDir: 'dist',
    devServer: {
        // development server port 8000
        // 设置前端端口
        port: 8081,
        // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
        // 代理
        proxy : {
            '/api': {
                // 配置跨域请求路径
                // target: 'http://localhost:8082',
                target: 'http://172.16.6.144:8082',
                ws: false,
                secure: false,
                changeOrigin : true, // 允许跨域
                // 重写请求地址
                pathRewrite:{
                    '^/api':''
                }
            }
        },
        // 此处开启 https
        // https: true,
    },


    // 是否在保存的时候校验 eslint
    lintOnSave: false,
    /* jQuery */
    // entry: './index.js',
    // output: {
    //     path: path.join(__dirname, '.dist'),
    //     publicPath: '/dist/',
    //     filename: 'index.js'
    // },
    // plugins: [
    //     new webpack.ProvidePlugin({
    //         jQuery: "jquery",
    //         $: "jquery"
    //     })
    // ]

}