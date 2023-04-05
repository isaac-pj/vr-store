const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  name: "index",
  mode: "development",
  target: "web",
  entry: { index: "./src/index.js" },
  devtool: "inline-source-map",
  devServer: {
    static: { directory: path.join(__dirname, "public") },
    compress: true,
    port: 9000,
    server: "https",
    hot: true,
    liveReload: true,
    watchFiles: ["./src/**/*.*"],
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /[\/]node_modules[\/]/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /.(html|htm)$/,
        exclude: /[\/]node_modules[\/]/,
        use: {
          loader: "html-loader",
        },
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/components", to: "components" },
        { from: "./src/assets", to: "assets" },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "index.html",
      inject: "head",
      scriptLoading: "blocking",
      chunks: ["index"],
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "./public"),
    publicPath: "/public/",
    clean: true,
  },
  stats: {
    colors: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
};
