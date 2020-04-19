const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    mode:'development',
    entry: "./src/index.ts",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js' ],
    },
    plugins:[
      new HtmlWebpackPlugin({
          title: 'Hot Module Replacement',
          template:'./test/index.html'
      }),
  ],
    devServer: {
        contentBase: './dist',
        hot: true
      },
}