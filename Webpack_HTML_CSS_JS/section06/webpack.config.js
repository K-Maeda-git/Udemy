// webpackの設定ファイル

const path = require("path");
// ①mini-css-extract-pluginの設定
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// ①html-webpack-pluginの設定
const HtmlWebpackPlugin = require("html-webpack-plugin");
// ①clean-webpack-pluginの設定(特定のクラスだけを読み込む場合は波括弧で囲う)
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // エントリーポイント
  entry: "./src/javascripts/main.js",
  // 出力先
  output: {
    // 絶対パスの取得
    path: path.resolve(__dirname, "./dist"),
    // 出力先のファイル構成と名称の変更
    filename: "javascripts/main.js",
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
    new MiniCssExtractPlugin({
      // 出力先のファイル構成と名称の変更
      filename: "./stylesheets/main.css",
    }),
    // ②html-webpack-pluginの設定
    new HtmlWebpackPlugin({
      // 参照元のパスを指定
      template: "./src/templates/index.html",
    }),
    // ②clean-webpack-pluginの設定
    new CleanWebpackPlugin(),
  ],
};
