# [section7]画像の読み込み

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

- webpack-dev-server  
  ローカルサーバーの起動、変更があった際の再読み込み、RootPath の恩恵を受けることができる  
  `npm install --save-dev webpack-dev-server@3.10.3`
