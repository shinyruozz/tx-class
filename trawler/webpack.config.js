const path = require("path"),
    autoprefixer = require("autoprefixer"),
    Uglify = require("uglifyjs-webpack-plugin"),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: path.resolve(__dirname, "./src/js/index.js"),
        list: path.resolve(__dirname, "./src/js/list.js"),
        error: path.resolve(__dirname, "./src/js/error.js"),
    },
    output: {
        path: path.resolve(__dirname + "/public"),
        filename: "js/[name].js",
        publicPath: "/",
    },

    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: { presets: ["env"] },
                },
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    // {
                    //     loader: "postcss-loader",
                    //     options: {
                    //         plugin() {
                    //             return [autoprefixer("last 5 versions")];
                    //         },
                    //     },
                    // },
                ],
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                        },
                    },
                    "css-loader",
                    // {
                    //     loader: "postcss-loader",
                    //     options: {
                    //         plugin() {
                    //             return [autoprefixer("last 5 versions")];
                    //         },
                    //     },
                    // },
                    "sass-loader",
                ],
            },
            {
                test: /\.tpl$/,
                loader: "ejs-loader",
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/i,
                loader: ["url-loader?limit=2048&name=img/[name]-[hash:16].[ext]"],
            },
            {
                test: /\.(woff2?|eot|ttf|oft|svg)(\?.*)?$/i,
                loader: ["url-loader?name=fonts/[name].[ext]"],
            },
        ],
    },

    plugins: [
        new Uglify(),
        new OptimizeCssAssetsPlugin({}),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
    ],
    devServer: {
        // open: true,
        watchOptions: {
            ignoreed: /node_modules/,
        },
        port: 3300,
        hot: true,
        host: "localhost",
    },
};