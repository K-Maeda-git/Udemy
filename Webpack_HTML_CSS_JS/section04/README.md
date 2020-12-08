# [section4]Webpackの設定ファイルとLoader

## コマンド
- ビルド  
   "development", "production", "none"を選択することができる  
   development は開発用、production は本番環境用（ファイルサイズを小さくしてパフォーマンスを向上する）      
  `npx webpack --mode development`

## ライブラリの追加     
- cssの適用に必要
   - css-loader      
   インストールしたら`webpack.config`で設定が必要     
   'npm install --save-dev css-loader@3.4.2'    
   - style-loader    
   インストールしたら`webpack.config`で設定が必要
   `npm install --save-dev style-loader@1.1.3`
