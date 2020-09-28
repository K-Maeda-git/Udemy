# [section3]Webpack 入門

## 環境構築

- node.js
- npm init  
   プロジェクトの初期化
- npm view  
   パッケージの各種情報を参照することができる  
   `npm view [パッケージ名]`
- [パッケージ]webpack  
  `npm install --save-dev webpack@4.41.6`
- [パッケージ]webpack-cli  
  `npm install --save-dev webpack-cli@3.3.11`
- オプションの意味
  - --save-dev  
     開発用にパッケージをインストールすることができる
  - -g  
     プロジェクトではなく、ローカル環境にパッケージをインストールする
- ビルド  
   "development", "production", "none"を選択することができる  
   development は開発用、production は本番環境用（ファイルサイズを小さくしてパフォーマンスを向上する）      
  `npx webpack --mode development`
