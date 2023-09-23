const path = require('path');
//清除build/dist文件夹文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
//生成创建Html入口文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

//引入webpack
const webpack = require('webpack');

module.exports = {
    //webpack 入口文件
        entry: './src/index.tsx',
    //webpack 输出文件配置
        output: {
        //输出文件路径
            path: path.resolve(__dirname, 'dist'),
       //输出文件名
            filename: 'index.js',
            clean: true //每次打包前清空目录
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.json'],
          },
      //配置插件
        plugins: [
            new CleanWebpackPlugin(),
            new NodePolyfillPlugin(),
        //使用插件生成Html入口文件
            new HtmlWebpackPlugin({
             //模板文件路径
                template: "./public/index.html",
            //模板文件名
                // filename: "index.html",
            }),
        ],
       
        module: {
            rules: [
                {
                    test: /\.tsx?$/,    // .ts或者tsx后缀的文件，就是typescript文件
                    use: "ts-loader",   // 就是上面安装的ts-loader
                    exclude: "/node-modules/" // 排除node-modules目录
                }
            ]
        },
    }