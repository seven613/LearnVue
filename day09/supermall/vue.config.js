module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                // 路径的别名
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views'
            }
        }
    }
}