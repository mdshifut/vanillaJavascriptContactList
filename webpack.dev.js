const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')


module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'js/[name].bundle.js',
    },
    devServer: {
        contentBase: './dist',
        overlay: true,
        open: true,
        host: '0.0.0.0',
        useLocalIp: true,
        // inline: true,
        // hot: true,
    },
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
                    }

                ]
            }, {
                test: /\.(sa|sc|c)ss$/,

                use: [{
                        loader: 'style-loader',


                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            // includePaths: ["./node_modules"]
                        }
                    }


                ]
            }



        ]
    }
})