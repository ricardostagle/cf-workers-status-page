// webpack.config.js
module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ya?ml$/,
        use: 'yaml-loader'
      }
    ]
  },
  devServer: {
    static: "./dist",
  },
}
