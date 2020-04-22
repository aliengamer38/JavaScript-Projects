const path = require("path");
const filePath = path.resolve(__dirname, "dist");
console.log(filePath);
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: filePath,
        filename: "js/index.js"
    },
    mode: "development",
    devServer: {
        contentBase: "./dist"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "site/home.html",
            template: "./src/site/home.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }    
}
