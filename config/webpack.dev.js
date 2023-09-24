const { merge } = require('webpack-merge');
const path = require('path');
const base = require('./webpack.common');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const WebpackBar = require('webpackbar')

module.exports = merge(base, {
    //模块参数
    mode: 'development',
    //启用source-map方便调试
    devtool: 'source-map',
    plugins: [
        // new BundleAnalyzerPlugin()
        new ErrorOverlayPlugin(),
        // 编译进度条
        new WebpackBar()
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        open: true,
        port: 9000,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
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
