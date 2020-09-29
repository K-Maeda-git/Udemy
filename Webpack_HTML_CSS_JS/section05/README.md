# [section5]Webpackのプラグイン

## コマンド
- ビルド  
   "development", "production", "none"を選択することができる  
   development は開発用、production は本番環境用（ファイルサイズを小さくしてパフォーマンスを向上する）      
  `npx webpack --mode development`

## プラグインの追加     
- mini-css-extract-plugin     
   section04の手順だけだとHTMLファイルにcss情報がインジェクトされてしまうのでプラグインを追加してCSSを別のファイルとして出力する
   `npm install --save-dev mini-css-extract-plugin@0.9.0`
- html-webpack-plugin      
   ビルド時にhtmlファイルをdistフォルダに自動生成する    
   `npm install --save-dev html-webpack-plugin@3.2.0`
