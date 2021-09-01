module.exports = {
    css: {
        requireModuleExtension: false,
        loaderOptions: {
            css: {
                modules: {
                    localIdentName: '[name]-[hash]'
                },
                localsConvention: 'camelCase'
            },
            sass: {
                additionalData: `
                    @import "@/style/_variables.scss";
                `
            }
        }
    },
    configureWebpack: {
        devtool: 'source-map'
    }
}