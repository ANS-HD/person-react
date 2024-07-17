const { merge } = require('webpack-merge')
const path = require('path')
const base = require('./webpack.common')

module.exports = merge(base, {
    mode: 'production',
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //         minSize: 20000,
    //         maxSize: 70000,
    //         minChunks: 1,
    //         maxAsyncRequests: 30,
    //         maxInitialRequests: 30,
    //         automaticNameDelimiter: '~',
    //         cacheGroups: {
    //             defaultVendors: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 priority: -10,
    //                 reuseExistingChunk: true,
    //             },
    //             default: {
    //                 minChunks: 2,
    //                 priority: -20,
    //                 reuseExistingChunk: true,
    //             },
    //         },
    //     },
    // },
})
