const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./examples/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    hot: true,
    compress: true,
    watchFiles: ["examples/", "public/"],
    historyApiFallback: true, // 404s will fallback to /index.html
  }
};
