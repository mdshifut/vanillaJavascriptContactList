const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const cleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')







const webpackConfig = {
    entry: {
        index: ['./src/js/index.js', './src/scss/style.scss'],
        test: ['./src/scss/style.scss']

    },
    output: {

        path: path.resolve(__dirname, './dist'),
    },

    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new CopyWebpackPlugin([{

            from: 'src',
            to: './',
            ignore: ['*.js', '*.scss', '*.jpeg', '*.png', '*.jpg', '*.html', '*.otf', '*.ttf'],

        }]),
        new cleanWebpackPlugin(['dist']),


    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }



    },
    module: {
        rules: [

            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {

                        name: '[name].[ext]',
                        outputPath: "./fonts",
                        publicPath: './fonts'

                    }
                }]
            }

        ]
    }
}



var arr = ['index', 'test']




arr.forEach((file) => {
    webpackConfig.plugins.push(
        new HtmlWebpackPlugin({
            filename: `${file}.html`,
            template: `./src/${file}.html`,
            chunks: ['runtime', 'vendors', file.replace(/-(\w)/g, (match, c) => c.toUpperCase())]
        })
    );
})

module.exports = webpackConfig