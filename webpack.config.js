const HtmlWebpackPlugin = require("html-webpack-plugin");
const packagejson = require("./package.json");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
    entry: "./index.js",
    context: __dirname,
    devtool: "source-map",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    watch: true,
    resolve: {
        extensions: [".js", ".ts", ".json", ".scss", ".css", ".jsx"]
    },
    devServer: {
        contentBase: __dirname,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: "Knockout App",
            myPageHeader: "settings",
            template: "./index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader", "sass-loader"
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env']
                }
            },
            {
                test: /\.(json)$/,
                loader: 'file-loader'
            }
        ]
    }
};
