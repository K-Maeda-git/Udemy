## 進捗状況

2020/07/07 -> 進行：section1-8/次回：section2-1  
2020/07/09 -> 進行：section2-14/次回：section2-15  
2020/07/12 -> 進行：section2-19/次回：section2-20  
2020/07/15 -> 進行：section3-34/次回：section3-35  
2020/07/16 -> 進行：section3-46/次回：section4-01  
2020/07/19 -> 進行：section5-66/次回：section5-67  
2020/07/19 -> 進行：section5-70/次回：section5-71  
2020/07/24 -> 進行：section7-97/次回：section7-98  
2020/07/25 -> 進行：section8-118/次回：section9-119  
2020/07/27 -> 進行：section9-127/次回：section9-128  
2020/07/28 -> 進行：section9-135/次回：section9-136
2020/08/01 -> 進行：section9-142/次回：section9-143  
2020/08/02 -> 進行：section11-158/次回：section12-159  
2020/08/03 -> 進行：section12-165/次回：section13-166  
2020/08/04 -> 進行：section13-173/次回：section14-174

# udemy 学習メモ

## [VSCode]開発環境構築メモ

### プロジェクトの作成方法

`詳細はセクション1-8で解説している`

1. プロジェクトの格納場所を作成  
   任意の場所に空のフォルダを作成する
2. 作成したフォルダ内に HTML ファイルを作成  
   [cd]でフォルダ直下に移動し、`index.html`を作成  
   以下のコードをコピペ

   ```
   <!DOCTYPE html>
   <html lang="ja">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>TypeScriptの学習</title>
       <!-- defer属性：HTMLを解析してからsrcで指定したファイルを実行させる -->
       <script src="app.js" defer></script>
   </head>
   <body>

   </body>
   </html>
   ```

3. npm を用意する  
   以下コマンドを実行して`package.json`を作成

   ```
   npm init -y
   ```

   続けて以下コマンドを実行して、`lite-server`をインストール

   ```
   npm install --save-dev lite-server
   ```

   ※ インストールが失敗するときは以下を試してみる

   ```
   npm install -g npm
   ```

4. package.json を編集する  
   `package.json`内の script を以下に変更する
   ```
   "scripts": {
       "test": "echo \"Error: no test specified\" && exit 1",
       "start": "lite-server"
   },
   ```

---

### プロジェクトの実行方法

#### 初めてサーバーを起動する場合は以下の初期設定でポート番号を変更する

デバッグを開始するために必要な初期設定  
 「VSCode の実行＞デバッグの開始」を選択  
 最初に開始した際は環境の選択を求められるので「chrome」を選択  
 `launch.json`が自動生成されるので以下のように url のポート番号を変更する  
 ※デバッグを開始する前に予めサーバーを起動しておく必要がある（npm start で lite server を起動しておく）

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

1. `cd`でプロジェクトのディレクトリへ移動

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

---

### .ts ファイルのコンパイル

1. 以下コマンドで.ts -> .js にコンパイルする  
   実行すると同じディレクトリ内に.js ファイルが生成される。  
   ※lite-server 起動中はコンパイル時に変更が自動反映（ブラウザがリロード）される
   ```
   tsc [ファイル名].ts
   ```

---
