const path = require("path");

module.exports = {
  mode: "development",
  // プロジェクト全体のエントリーポイント（どのファイルからアプリケーションが起動するのか）
  entry: "./src/app.ts",
  output: {
    filename: "bundle.js", // [bundle.[contenthash].js]ブラウザのキャッシュにより古いコードが実行されてしまうことを防ぐ
    path: path.resolve(__dirname, "dist"), // tsconfigの"outDir"と一緒にする必要がある(絶対パス)
    publicPath: "dist", // webpack-dev-serverを使うのに必要な設定
  },
  devtool: "inline-source-map",
  // タイプスクリプトをどのように処理するか
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  // インポートされたモジュールをどのように解決するか
  resolve: {
    extensions: [".ts", ".js"],
  },
};
