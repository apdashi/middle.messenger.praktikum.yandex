const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    target: 'web',
    entry: './src/pages/index.ts',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash:5].js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json', '.scss'],
        fallback: {
            path: false,
            assert: require.resolve('assert/'),
            fs: false
        }
    },
    devServer: {
        compress: true,
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json')

                        }
                    }
                ],
                exclude: /(node_modules)/
            },
            {
                test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
                type: 'asset/resource'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.hbs$/,
                use: [{
                    loader: 'handlebars-loader'
                }]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser'
        }),
        new HtmlWebpackPlugin({
            template: './static/templates/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:5].css'
        })
    ]
}
