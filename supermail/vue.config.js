const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    devServer: {
        host: '192.168.1.7', // ip
        port: 8080, // 设置端口号
        https: false, // https:{type:Boolean}
        open: false, //配置自动启动浏览器
        open: true,
        // proxy: 'http://152.136.185.210:7878/api/hy66'
    },
    transpileDependencies: true,
    lintOnSave: false
})