# udemy 学習メモ

## [VSCode]開発環境構築メモ

- プロジェクトの実行方法
  1. コンソールでプロジェクトが保存されているディレクトリに移動
     ```
     cd C:\work\Practice_TypeScript\Understanding_TypeScript\section01\myfile\understanding-ts
     ```
  2. lite-server を起動する  
     package.json に記述しているので以下のコマンドで起動することができる
     ```
     npm start
     ```
  3. ブラウザでローカルホスト：3000 にアクセスする
     ```
     http://localhost:3000
     ```
  4. サーバーの停止  
     以下でプロセスを終了する。
     ```
     サーバーを起動しているコンソールにて「ctrl+C」を押す
     ```
- .ts ファイルのコンパイル
  1. 以下コマンドで.ts -> .js にコンパイルする  
     実行すると同じディレクトリ内に.js ファイルが生成される。  
     ※lite-server 起動中はコンパイル時に変更が自動反映（ブラウザがリロード）される
     ```
     tsc [ファイル名].ts
     ```

---
