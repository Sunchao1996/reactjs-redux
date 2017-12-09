/*
 * @file webpack配置文件(开发环境)
 * @author tanjizhen
 * @date 2017-04-30
 */
const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const port = 3011;

module.exports = {
    devtool: '#source-map',
    entry: {
        bundle: './main.jsx',
        vendor: ['react', 'react-dom', 'react-router', 'redux'],
    },
    output: {
        path: path.join(__dirname, '/bin'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader?#sourceMap',
                    'postcss-loader',
                    'less-loader',
                    'autoprefixer-loader?{browsers:["last 2 version", "firefox 15"]}'
                ],
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
                use: 'url-loader?limit=8192'
            },
					{
                test: /\.json$/,
                use:'json-loader'
            }
        ],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor'],
        }),
        new OpenBrowserPlugin({
            url: `http://localhost:${port}`
        }),
        new BundleAnalyzerPlugin()
    ],
    devServer: {
        compress: true, // 启用gzip压缩
        contentBase: path.join(__dirname,"views"),
        port: port, // 运行端口3000
        inline: true,
        hot: true,
        historyApiFallback: true,
    },
};
