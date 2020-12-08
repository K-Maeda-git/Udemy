# udemy 学習メモ

## [section3]TypeScript の設定とコンパイラ

### Watch モードの使い方

- Watch モードとは？  
  ファイルの変更を監視し、なにか変更があった際には自動でコンパイルを実施してくれる  
  ※一つのファイルしか、監視することができない欠点もある
- 利用方法  
  以下コマンドを実行する
  ```
  tsc [ファイル名].ts -w
  ```
  監視の終了は[ctrl + C]

### プロジェクト全体の監視とコンパイル

1. tsconfig.json を作成する  
   `tsconfig.json`が格納されている場所がそのプロジェクトのルートディレクトリとして扱われる  
   作成は以下コマンドを実施


    ```
    tsc --init
    ```

2. プロジェクト内の変更を監視する  
   以下コマンドを実行することでプロジェクト内すべての変更を監視する


    ```
    tsc -w
    ```
    監視の終了は[ctrl + C]

- おまけ  
  `tsconfig.json`を作成したことで  
  以下コマンドを実行すると、プロジェクト内のすべての.ts ファイルをコンパイルすることもできる
  ```
  tsc
  ```

### Visual Studio Code を利用してデバッグする方法     
※Debugの実行がうまく行かなかったため設定だけした

1. [拡張機能]Debugger for Chrome をインストール  
   VSCode 上でデバックを可能にする拡張機能
2. tsconfig.json を編集する  
   sourceMap を[true]に変更する

   ```
   // デバッグに役立つ設定（.mapファイルを生成して.ts->.jsをコンパイルした際の対応付を記録）
   "sourceMap": true, 　/* Generates corresponding '.map' file. */
   ```

3. 検証したい箇所にブレークポイントを設定する
   動作を確認したいコードにブレークポイント（該当する行の赤丸をクリック）を設定すると  
   デバッグを開始した際に該当箇所で止まり動作を確認することができる

4. デバッグを開始するために必要な初期設定  
   「VSCodeの実行＞デバッグの開始」を選択    
   最初に開始した際は環境の選択を求められるので「chrome」を選択   
   `launch.json`が自動生成されるので以下のようにurlのポート番号を変更する   
   ※デバッグを開始する前に予めサーバーを起動しておく必要がある（npm startでlite serverを起動しておく）    
   ```
   "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:3000", // 開発用サーバーで起動する番号に合わせる
            "webRoot": "${workspaceFolder}"
        }
    ```
  5. デバッグを開始する   
    `tsc`でコンパイルを行い.jsファイルと.js.mapファイルが生成されることを確認する   
    

---
