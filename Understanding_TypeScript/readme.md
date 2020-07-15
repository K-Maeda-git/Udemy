## 進捗状況

2020/07/07 -> 進行：section1-8/次回：section2-1     
2020/07/09 -> 進行：section2-14/次回：section2-15       
2020/07/12 -> 進行：section2-19/次回：section2-20       

# udemy 学習メモ

## [VSCode]開発環境構築メモ

### プロジェクトの作成方法        
`詳細はセクション1-8で解説している`
1. プロジェクトの格納場所を作成     
    任意の場所に空のフォルダを作成する
2. 作成したフォルダ内にHTMLファイルを作成       
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
3. npmを用意する        
    以下コマンドを実行して`package.json`を作成      
    ```
    npm init -y
    ```
    続けて以下コマンドを実行して、`lite-server`をインストール        
    ```
    npm install --save-dev lite-server
    ```
4. package.jsonを編集する       
    `package.json`内のscriptを以下に変更する        
    ```
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "lite-server"
    },
    ```
---
### プロジェクトの実行方法
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
