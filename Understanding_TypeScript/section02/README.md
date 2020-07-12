# udemy 学習メモ
## [section2]TypeScript における基本と型の種類について

### 基本

- なぜ型を使うと便利なの？  
  型を利用することで、エラーに素早く気がつく（ソースコードにエラー表記が出てくれる）ことができ、実行時エラーを回避することができる。

### 型の種類（コアな型）

型を指定するときは小文字で始まる（NG：String -> OK：string）  
▼ 型の指定方法は以下参照

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

* object  
  JavaScript のすべての object  
  object の型をより明確に定義することが可能

  ```
  {age(キー): 20(値)}
  ```

* Array:配列  
  複数の変数を格納できるデータ型  
  JavaScript のすべての Array 要素の方は、柔軟にも厳格にも指定できる

  ```
  [1,2,3]
  ```

- Tuple  
  TypeScript 独自の型  
  要素の数と型を指定することができる

  ```
  [1,2]
  ```

  - Enum  
    TypeScript 独自の型  
    列挙型  
    定数の集合に対して名前をつけて管理することができる  
    複数の定数を扱う場合に利用すると便利に使うことができる
    ```
    enum{NEW,OLD}
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

変数を宣言する際に型を指定しなくても TypeScript が変数に代入されている値をチェックして型を推論してくれる。

```
let number = 10;
number = 20; // number型にnumber型を入れようとしているのでOK
number = "STRING"; // 型推論によりnumber型なのでエラーになる
```

---

## 進捗状況

2020/07/07 -> 進行：section1-8/次回：section2-1
2020/07/09 -> 進行：section2-14/次回：section2-15
2020/07/12 -> 進行：section2-19/次回：section2-20
