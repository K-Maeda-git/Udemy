// webpackの設定ファイル

const path = require("path");
// ①mini-css-extract-pluginの設定
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// ①html-webpack-pluginの設定
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // エントリーポイント
  entry: "./src/index.js",
  // 出力先
  output: {
    // 絶対パスの取得
    path: path.resolve(__dirname, "./dist"),
    // ファイルネームの変更
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        // ※loaderは下から適用されていくことに注意すること
        use: [
          {
            // // style-loaderの設定
            // loader: "style-loader",
            // ③mini-css-extract-pluginの設定(ローダーを差し替えている)
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // css-loaderの設定
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    // ②mini-css-extract-pluginの設定
    new MiniCssExtractPlugin(),
    // ②html-webpack-pluginの設定
    new HtmlWebpackPlugin({
      // 参照元のパスを指定
      template: "./src/index.html",
    }),
  ],
};
