// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8000,
    devMiddleware: {
      writeToDisk: true,
    }
  },
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ya?ml$/,
        use: 'yaml-loader'
      }
    ]
  }
}
