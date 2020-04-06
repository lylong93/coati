const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    mode:'development',
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement',
            template:'./src/index.html'
        }),
    ],
    devServer: {
        contentBase: './dist',
        hot: true
      },
}