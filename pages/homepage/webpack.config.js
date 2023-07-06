
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //подключаем плагин html
//const CopyPlugin = require('copy-webpack-plugin');      // подключаем плагин который файлы из одной папки в другую
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //подключаем плагин-чистку папки dist
const MiniCssExtractPlugin = require('mini-css-extract-plugin');




module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[hash][ext]',
  },
 
  module: {
    rules: [
        {},
        {
            test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i, // изображения
            type: 'asset/resourse',
        },
        {
            test: /\.(woff(2)?|eot|ttf|otf|)$/i, // шрифты и SVG
            type: 'asset/inline',
        },
        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },

    ]
  },

    resolve: {                          //Позволяет не писать в коде расширения
    extensions: ['.ts', '.js']
    },

    plugins: [
        new HtmlWebpackPlugin({
            // title: 'Demo webpack'     //прописываем шаблоны
           template: './src/index.html'
        }), 
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        // new CopyPlugin({                //Включать, когда будет что копировать, РУГАЕТСЯ ЕСЛИ ПУСТО!
        //     patterns: [                 //настройка откуда-куда будет копировать файлы плагин-копировальщик
        //       { from: "source", to: "dist" },
        //       "path/to/source", // absolute or relative, files/directories/globs - see below for examples
        //     ],           
        //   }),
        new CleanWebpackPlugin({
            cleanStaWebpackAssets: false  //  что бы не чистил простоянно папку assests
          }),

    ],
}; 
