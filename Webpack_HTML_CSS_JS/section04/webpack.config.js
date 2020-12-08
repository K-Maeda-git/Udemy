// webpackの設定ファイル

const path = require("path");

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
            // style-loaderの設定
            loader: "style-loader",
          },
          {
            // css-loaderの設定
            loader: "css-loader",
          },
        ],
      },
    ],
  },
};
