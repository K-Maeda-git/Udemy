# セクション 14:React & TypeScript

## TypeScript に対応した React プロジェクトの作成

以下コマンドを順次実行する  
' npm install -g create-react-app '  
' create-react-app . --template typescript '

<!-- https://create-react-app.dev/docs/adding-typescript/ -->

## パッケージインストール

- ReactRouterDom パッケージ  
  ' npm install --save react-router-dom '
- typs パッケージのインストール(型定義ファイルの追加)  
  ' npm install --save-dev @types/react-router-dom '

## 周辺モジュールを TypeScript で利用する手順

1. パッケージの公式ドキュメントを確認する
2. 試しにインストールして型定義があるか確認する
3. 型定義ファイルがない場合、types パッケージを追加して型定義を入手する
