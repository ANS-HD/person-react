const {merge} = require('webpack-merge');
const path = require('path');
const base = require('./webpack.common');
const webpack = require('webpack');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = merge(base, {
   //模块参数
    mode: 'development',
  //启用source-map方便调试
    devtool: 'source-map',
    plugins: [
        // new BundleAnalyzerPlugin()
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


 
        ]
    }
});
