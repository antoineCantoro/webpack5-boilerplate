const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const isDev = process.env.NODE_ENV === "dev";

// Js Files Management
const jsConfig = {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        }
    }
}

// HTML File Management
const htmlConfig = {
    rules: [
        {
           test: /\.(html)$/,
           use: ['html-loader']
        }
    ]
}


// Scss Files Management
const scssConfig = {
    test: /\.s[ac]ss$/i,
    use: [
        MiniCssExtractPlugin.loader,
        {
            loader: "css-loader",
            options: {
                sourceMap: isDev
            }
        },
        {
            loader: "postcss-loader",
            options: {
                sourceMap: isDev
            }
        },
        {
            loader: "sass-loader",
            options: {
                sourceMap: isDev
            }
        }
    ],
}

// Fonts File Management
const fontsConfig = {
    // test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
    // test: /\.(woff|woff2)$/,
    test: /\.ttf$/,
    type: 'asset/resource',
    generator: {
        filename: 'assets/fonts/[name][ext][query]'
    }
}

// Images Files Management
const imgConfig = {
    test: /\.(jpe?g|png|gif|svg)$/i,
    type: "asset/resource",
    generator: {
        filename: 'assets/img/[contenthash][ext][query]'
    }

}

// Global Config
let config = {
    // target: "web",
    entry: [
        path.resolve(__dirname, "../src/js/app.js"),
        path.resolve(__dirname, "../src/scss/main.scss"),
    ],
    output: {
        filename: "build.[contenthash].js",
        path: path.resolve(__dirname, '../dist'),
    },
    module: {
        rules : [
            htmlConfig,
            jsConfig,
            scssConfig,
            fontsConfig,
            imgConfig
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css",
        }),
        // new CopyPlugin({
        //     patterns: [
        //         { 
        //             from: "src/css",
        //             to:  "css" 
        //         },
        //     ],
        // }),
    ],
}

module.exports = config