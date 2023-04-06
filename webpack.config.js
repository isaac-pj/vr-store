const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    clean: true,
  },
  mode: "development",
  devServer: {
    static: { directory: path.join(__dirname, "public") },
    port: 9000,
    watchFiles: ["src/**/*.html", "./src/**/*.js"],
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/components", to: "components" },
        { from: "./src/assets", to: "assets" },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
