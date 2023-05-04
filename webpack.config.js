const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    clean: false,
  },
  mode: "development",
  devServer: {
    static: { directory: path.join(__dirname, "public") },
    server: "https",
    port: 9000,
    liveReload: true,
    hot: true,
    watchFiles: ["src/**/*.html", "./src/**/*.js"],
  },
  cache: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-modules-umd"],
          },
        },
      },
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
        { from: "./src/scenes", to: "scenes" },
        { from: "./src/assets", to: "assets" },
      ],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "head",
    }),
  ],
};
