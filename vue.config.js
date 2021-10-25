module.exports ={
    devServer: {
        // development server port 8000
        port: 8081,
        // If you want to turn on the proxy, please remove the mockjs /src/main.jsL11
        proxy : {
            '/api': {
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