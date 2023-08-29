const {merge} = require('webpack-merge');
const base = require('./webpack.common');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = merge(base, {
   //模块参数
    mode: 'development',
//启用source-map方便调试
    devtool: 'source-map',
    plugins: [
        // new BundleAnalyzerPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            // 图片
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                type: "asset/inline",
            },
            // 字体
            {
            test: /\.(eot|ttf|woff|woff2)$/,
            type: "asset/resource",
            generator: {
            filename: "fonts/[hash][ext][query]",
            },
            }
 
        ]
    }
});
