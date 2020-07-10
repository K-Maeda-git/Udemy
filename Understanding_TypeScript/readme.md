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
## [section2]TypeScript における基本と型の種類について

### 基本

- なぜ型を使うと便利なの？  
  型を利用することで、エラーに素早く気がつく（ソースコードにエラー表記が出てくれる）ことができ、実行時エラーを回避することができる。

### 型の種類（コアな型）
型を指定するときは小文字で始まる（NG：String -> OK：string）        
▼型の指定方法は以下参照      
```
const(定数) hoge（変数名）: string（型）;
```

- number        
   数値なら何でも入れることができる（整数や浮動小数点を含む全ての数値）
  ```
  1 / 5.3 / -10
  ```
- string        
   すべての文字列を入れることができる
  ```
  'hello' / "hoge" / `TypeScript`
  ```
- boolean       
  真偽値である true or false を入れることができる
  ```
  true / false
  ```
- any       
  何でもありの型  
   数値、文字列などのどんな値でも入れることができる。  
  string 型から number 型など代入もすることができる。  
  TypeScript の旨味が薄れるのでなるべく使わないほうがいいよ。
  ```
  let any_test:any ;
  
  any_test=1;
  any_test="STRING";
  any_test=true;
  ```

### 型推論      
変数を宣言する際に型を指定しなくてもTypeScriptが変数に代入されている値をチェックして型を推論してくれる。        
```
let number = 10;
number = 20; // number型にnumber型を入れようとしているのでOK
number = "STRING"; // 型推論によりnumber型なのでエラーになる
```
---
## 進捗状況

2020/07/07 -> 進行：section1-8/次回：section2-1
2020/07/09 -> 進行：section2-14/次回：section2-15
