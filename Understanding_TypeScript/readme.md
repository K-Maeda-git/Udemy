# udemy学習メモ
* プロジェクトの実行方法        
    1. コンソールでプロジェクトが保存されているディレクトリに移動      
        ```
        cd C:\work\Practice_TypeScript\Understanding_TypeScript\section01\myfile\understanding-ts
        ```
    2. lite-serverを起動する        
        package.jsonに記述しているので以下のコマンドで起動することができる      
        ```
        npm start
        ```
    3. ブラウザでローカルホスト：3000にアクセスする     
        ```
        http://localhost:3000
        ```
    4. サーバーの停止       
        以下でプロセスを終了する。
        ```
        サーバーを起動しているコンソールにて「ctrl+C」を押す
        ```
* .tsファイルのコンパイル       
    1. 以下コマンドで.ts -> .js にコンパイルする        
        実行すると同じディレクトリ内に.jsファイルが生成される。     
        ※lite-server起動中はコンパイル時に変更が自動反映（ブラウザがリロード）される
        ```
        tsc [ファイル名].ts
        ```


## 進捗状況     
2020/07/07 -> 進行：section1-8/次回：section2-1