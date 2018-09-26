const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');

module.exports = merge(common, {
    output: {
        filename: 'js/[name].[chunkhash].bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css',
        }),


    ],

    module: {
        rules: [{
            test: /\.(gif|png|jpe?g|svg|jpg)$/i,
            use: [{
                    loader: 'file-loader',
                    options: {

                        name: '[name].[ext]',
                        outputPath: "images",
                        publicPath: './images'

                    }
                },


                {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 65
                        },
                        // optipng.enabled: false will disable optipng
                        optipng: {
                            enabled: false,
                        },
                        pngquant: {
                            quality: '65-90',
                            speed: 4
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                        // the webp option will enable WEBP
                        webp: {
                            quality: 75
                        }
                    }
                }

            ]
        }, {
            test: /\.(sa|sc|c)ss$/,

            use: [{
                    loader: MiniCssExtractPlugin.loader,


                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        minimize: true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        sourceMap: true,
                        plugins: (loader) => [require('autoprefixer')(), require('cssnano')]
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }


            ]
        }]
    },
    mode: 'production',
    devtool: 'source-map'
})