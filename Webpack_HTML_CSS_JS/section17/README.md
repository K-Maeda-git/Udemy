# [section16]プロジェクトの整理整頓

## コマンド

- ビルド  
   "development", "production", "none"を選択することができる  
   development は開発用、production は本番環境用（ファイルサイズを小さくしてパフォーマンスを向上する）  
   `webpack.config.js`に mode を予め指定することでオプションの指定は不要となる

  - 検証用  
    `npx webpack --mode development`  
    package.json にコマンドを登録後：`npm run build:dev`
  - 本番用  
    `npx webpack --mode production`  
    package.json にコマンドを登録後：`npm run build`

- ローカルサーバーの起動  
  'webpack-dev-server'が必要  
  URL：http://localhost:8080/  
  `npx webpack-dev-server`  
  package.json にコマンドを登録後：`npm start`

## 不要となったライブラリの削除

- vue,vue-loader,vue-template-compiler
  `npm uninstall vue vue-loader vue-template-compiler`

## ライブラリの追加

- styled-components
  `npm install --save-dev styled-components@5.0.1`

## memo

-
