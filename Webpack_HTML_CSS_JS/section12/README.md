# [section12]コードのデバッグ方法

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

## ライブラリの追加

-

## memo

- sourceMap  
  ビルドしたときに自身で記述したコードをそのまま閲覧することができる。  
  （クロームで開発者ツールを参照するときなどに有用）  
  ただし、ファイルサイズが大きくなるので本番環境では使わないほうが良い。

- コマンドの管理  
  `package.json`に予めコマンドを登録しておくことで一元管理が可能  
  → ビルドやローカルサーバーの起動が簡単になる
