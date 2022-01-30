const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');


module.exports = {
    // コンパイルモード
    mode: 'development',
    // エントリーポイントの設定
    entry: {
        // コンパイル対象のファイルを指定
        'bundle': path.resolve(__dirname, "./asset_src/js/index.js"),
        'style.css': path.resolve(__dirname, './asset_src/stylesheets/style.scss')
    },
    // 出力設定
    output: {
        path: path.resolve(__dirname, 'public/'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [{
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                ]   
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    plugins: [
        new FixStyleOnlyEntriesPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name]'
        }),
    ],
    target: ["web", "es5"],
    watch: true,
    watchOptions: {
        poll: true
    }
};