# [section16]Typescript のビルド設定

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

- typescript
  `npm install --save-dev typescript@3.8.3`
- ts-loader  
  `npm install --save-dev ts-loader@6.2.1`
- @types/react  
  `npm install --save-dev @types/react@16.9.23`

## memo

- [tsconfig.json]について  
  ファイル作成時エラーが出ることがあるが、.ts ファイルを作成するとエラーは解消される。  
  ※解消されない場合は VSCode を再起動してみる
