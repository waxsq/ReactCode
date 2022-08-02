const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    //app是服务对象
    app.use(
        createProxyMiddleware(
            '/p',{//遇到该字段的前缀，则触发代理
            target:'http://localhost:3000',//请求转发
            changeOrigin:true,//控制服务器收到的请求头中host字段的值，
                            //如果设置为false则表示服务器中的host字段仍然是客户端端口和信息
            pathRewrite:{'^/p':''}//重写请求路径
        }
        ),
        createProxyMiddleware(
            '/c',{
            target:'http://localhost:3000',
            changeOrigin:true,
            pathRewrite:{'^/c':''}
        }
        )
    )
}