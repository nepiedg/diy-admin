module.exports = {
    publicPath: "./", // 构建好的文件输出到哪里
    outputDir: "dist",
    assetsDir: "dist/static",
    devServer: {
        port: 3000,
        proxy: {
            '/payss': {
                target: 'http://tk.qixinyun.net/video',
                ws: true,
                changeOrigin: true,
                sesure: false,
                pathRewrite: {
                    '^/payss': ''
                }
            },
        }
    },
}