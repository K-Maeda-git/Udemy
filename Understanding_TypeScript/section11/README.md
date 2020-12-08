# Webpack と TypeScript

## Webpack

- Webpack とは  
  モジュールバンドラおよびビルド自動化ツール  
  複数のファイルをバンドルにまとめることができる　
  それにより HTTP リクエストを減らすことができるので複数のファイルに分けて開発をすすめることができる
- Webpack の利点
  1.  バンドルを生成（複数のファイルを 1 つにまとめる）することで HTTP リクエスト減らす
  2.  最適化（ミニファイ）されたコードなのでファイルサイズが小さくなる
  3.  ビルドステップをかんたんにカスタマイズできる
- Webpack の導入

  1.  インストール  
      以下のコマンドでインストールを実行する
      ```
      npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader
      ```

  - インストール項目
    1.  "ts-loader"：Webpack と一緒に使うパッケージ TypeScript を JavaScript に変換するために必要
    2.  "typescript"：プロジェクトにインストールして置くことでバージョンを指定する
    3.  "webpack"：複数ファイルを 1 つにまとめて変換する
    4.  "webpack-cli"：Webpack のコマンドをプロジェクトで実行するために必要
    5.  "webpack-dev-server"：開発用サーバー（裏側で実行され変更があった際に Webpack を実行して再コンパイルを行う）

  2.  tsconfig.json の編集  
       以下をコピペする
      ```
      {
      "compilerOptions": {
      "target": "ES6",
      "module": "es2015",
      "lib": ["DOM", "ES6", "DOM.Iterable", "ScriptHost"],
      "sourceMap": true,
      "outDir": "./dist",
      "removeComments": true,
      "noEmitOnError": true,
      "strict": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "noImplicitReturns": true,
      "esModuleInterop": true,
      "experimentalDecorators": true,
      "skipLibCheck": true,
      "forceConsistentCasingInFileNames": true
      },
      "exclude": ["node_modules"]
      }
      ```
  3.  webpack.config.js を作成  
      tsconfig と同じ階層に`webpack.config.js`を作成して以下をコピペ

      ```
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
      ```

  4.  package.json を編集  
       scripts 内を以下に変更
      ```
      {
         "name": "section11",
         "version": "1.0.0",
         "description": "セクション 11:Webpack と TypeScript",
         "main": "app.js",
         "scripts": {
         "test": "echo \"Error: no test specified\" && exit 1",
         "start": "webpack-dev-server",
         "build": "webpack"
         },
         "keywords": [],
         "author": "",
         "license": "ISC",
         "devDependencies": {
         "lite-server": "^2.5.4",
         "ts-loader": "^8.0.2",
         "typescript": "^3.9.7",
         "webpack": "^4.44.1",
         "webpack-cli": "^3.3.12",
         "webpack-dev-server": "^3.11.0"
         }
      }
      ```
  5.  本番用環境の準備     
      以下コードを実施してインストール
      ```
      npm install --save-dev clean-webpack-plugin
      ```
  6. webpack.config.prod.jsを作成      
      webpack.config.prod.js を作成して以下をコピペする

      ```
      const path = require("path");
      const CleanPlugin = require("clean-webpack-plugin");

      module.exports = {
         mode: "production",
         // プロジェクト全体のエントリーポイント（どのファイルからアプリケーションが起動するのか）
         entry: "./src/app.ts",
         output: {
            filename: "bundle.js", // [bundle.[contenthash].js]ブラウザのキャッシュにより古いコードが実行されてしまうことを防ぐ
            path: path.resolve(__dirname, "dist"), // tsconfigの"outDir"と一緒にする必要がある(絶対パス)
         },
         devtool: "none",
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
         // ファイルを出力する前にdistフォルダを削除する
         plugins: [new CleanPlugin.CleanWebpackPlugin()],
      };
      ```
   7. package.jsonを編集      
      `script`の`build`を以下に変更    
      ```
      "build": "webpack --config webpack.config.prod.js"
      ```
   8. npm run buildを実施
      本番用アプリケーションコードがビルドされる
      ```
      npm run build
      ```