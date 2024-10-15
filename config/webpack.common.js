const path = require('path')
const os = require('os')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//清除build/dist文件夹文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//生成创建Html入口文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 编译进度条
// const ProgressBarPlugin = require('progress-bar-webpack-plugin')

// cpu核数
const threads = os.cpus().length

const PurgeCss = require('@fullhuman/postcss-purgecss')

const PurgeOptions = {
  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.tsx',
    './src/**/*.ts',
    './src/**/*.css',
    // etc.
  ],
  // Include any special characters you're using in this regular expression
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
}

//引入webpack
const webpack = require('webpack')

module.exports = {
  //webpack 入口文件
  entry: './src/index.tsx',
  //webpack 输出文件配置
  output: {
    //输出文件路径
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    publicPath: '/',
    //输出文件名
    // inject: true,
    clean: true, //每次打包前清空目录
    library: {
      name: 'Modal',
      type: 'var',
      export: 'default',
    },
  },
  externals: {
    showdown: 'showdown',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  //配置插件
  plugins: [
    new CleanWebpackPlugin(),
    //使用插件生成Html入口文件
    new HtmlWebpackPlugin({
      //模板文件路径
      template: './public/index.html',
      //模板文件名
      filename: 'index.html',
      inject: true, // Inject script tags into body or head
      scriptLoading: 'blocking', // Ensure scripts are loaded in order
      scriptAttributes: {
        type: 'text/javascript', // Add type="text/javascript" to script tags
      },
      cdn: {
        js: ['https://cdn.tailwindcss.com'],
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
    }),
    // require('tailwindcss'),
    // PurgeCss(PurgeOptions),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 5,
      minSize: 30000,
      // cacheGroups: {
      //   vendor: {
      //     test: /[\\/]node_modules[\\/]/,
      //     name: 'vendors',
      //     chunks: 'all',
      //   },
      // },
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.tsx?$/, // .ts或者tsx后缀的文件，就是typescript文件
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: os.cpus().length - 1, // 设置工作线程数量
            },
          },
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true, // 确保 ts-loader 兼容 thread-loader
            },
          },
        ], // 就是上面安装的ts-loader
        exclude: '/node-modules/', // 排除node-modules目录
      },
      // 图片
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        type: 'asset/inline',
      },
      // 字体
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        },
      },
    ],
  },
}
