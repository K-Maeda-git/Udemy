# [section7]画像の読み込み

## コマンド

- ビルド  
   "development", "production", "none"を選択することができる  
   development は開発用、production は本番環境用（ファイルサイズを小さくしてパフォーマンスを向上する）  
  `npx webpack --mode development`

## ライブラリの追加

- pug   
  通常の HTML だけではできない共通化が可能    
  'npm install --save-dev pug-html-loader@1.1.5'    
- html-loader   
  'npm install --save-dev html-loader@0.5.5'    
  
