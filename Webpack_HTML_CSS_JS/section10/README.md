# [sectio10]効率的なCSSの制作方法

## コマンド

- ビルド  
   "development", "production", "none"を選択することができる  
   development は開発用、production は本番環境用（ファイルサイズを小さくしてパフォーマンスを向上する）

  - 検証用  
    `npx webpack --mode development`
  - 本番用  
    `npx webpack --mode production`

- ローカルサーバーの起動  
  'webpack-dev-server'が必要  
  URL：http://localhost:8080/  
  `npx webpack-dev-server`

## ライブラリの追加

- node-sass   
`npm install --save-dev node-sass@4.13.1`
- sass-loader   
`npm install --save-dev sass-loader@8.0.2`
