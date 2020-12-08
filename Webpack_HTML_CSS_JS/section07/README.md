# [section7]画像の読み込み

## コマンド

- ビルド  
   "development", "production", "none"を選択することができる  
   development は開発用、production は本番環境用（ファイルサイズを小さくしてパフォーマンスを向上する）  
  `npx webpack --mode development`

## ライブラリの追加

- url-loader  
  ファイルを base64URI に変換する  
  `npm install --save-dev url-loader@3.0.0`

- file-loader  
  ファイルを外部ファイルとして出力する  
  `npm install --save-dev file-loader@5.1.0`
