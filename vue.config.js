module.exports = {
    configureWebpack: {
        resolve: { mainFields: ['main', 'module'] }
    },

    chainWebpack: webpackConfig => {
        // Uncomment for eslint disabling:
        // webpackConfig.module.rules.delete('eslint');
    },
}
