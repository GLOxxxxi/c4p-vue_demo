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
                target: 'http://localhost:8080',
                ws: false,
                changeOrigin : true,
                // pathRewrite:{
                //     "/api":""
                // }
            }
        }
    },
    lintOnSave: false
}