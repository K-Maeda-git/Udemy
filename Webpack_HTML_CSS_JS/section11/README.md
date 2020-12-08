# [section11]ES6

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

- babel  
  js をトランスファイルする
  - babel-loader  
    `npm install --save-dev babel-loader@8.0.6`
  - babel/core  
    `npm install --save-dev @babel/core@7.9.6`
  - babel/preset-env  
    オプションを指定することで対象ブラウザを指定することができる  
    `npm install --save-dev @babel/preset-env@7.9.6`
