# udemy 学習メモ

## [section2]TypeScript における基本と型の種類について

### 型についての基本

- なぜ型を使うと便利なの？  
  型を利用することで、エラーに素早く気がつく（ソースコードにエラー表記が出てくれる）ことができ、実行時エラーを回避することができる。

### 型推論

変数を宣言する際に型を指定しなくても TypeScript が変数に代入されている値をチェックして型を推論してくれる。

```
let number = 10;
number = 20; // number型にnumber型を入れようとしているのでOK
number = "STRING"; // 型推論によりnumber型なのでエラーになる
```

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

- Union  
  型の指定を「｜」で区切って柔軟にする

  ```
  let union: number | string;
  union = 123;
  console.log(union);
  union = `aaa`;
  console.log(union);
  ```

- Literal   
  型の指定を(numberやstring)ではなく、値そのものを指定するやり方
  ```
  let literal:'as-number' | 'as-text';
  literal = 'as-number'; // OK
  literal = 'as-text';   // OK
  literal = 'text';      // 指定されている型以外のものが入っているためエラー
  ```

- エイリアス    
  型の定義に名前を付けて管理することで、同じ型を複数で定義する際に名前で指定することができる    
  これは、Union型やオブジェクト型に対して利用することができる
  type [型名] = [型の定義];   
  ```
  type Combinable = number | string;
  let alias:Combinable;
  ```

- void    
  何も返さない(undefined)型(return命令を持たないということ)
  ```
  function printResult2(num: number): void {
  console.log("Result: " + num);
  }
  ```

- function    
  変数に関数を入れようとした際に意図しないもの（数値や文字列など）が入らないように明示的にする
  ```
  // 単純に関数が入るよと明示している
  let combineValue:Function; 
  // どのような引数を受け取りなにを返すのか具体的に明示している
  let combineValue: (a:number,b:number) => number; 
  combineValue = add_2;
  console.log(combineValue(8, 8));
  ```
- function型とコールバック    
  ```
  function addAndHandle(n1: number, n2: number, cd: (num: number) => void) {
  //受け取った値の合計をコールバック関数に引数として渡す
  const result = n1 + n2;
  cd(result);
  }

  addAndHandle(10, 20, (result) => {
    console.log(result);
  });
  ```
- unknown   
  最終的にどのような型になるのか分からないという際に利用する    
  どのような型の値を入れてもエラーにはならない    
  unknown型が指定された変数を、型が指定されている変数（string型など）に代入する場合は、データ型のチェックが必要となる。（if文などで）   
  ※any型と違う点は何かをするときにunknown型はチェックが必要になる   
  ```
  let userInput: unknown;
  let userName: string;

  userInput = 5;
  userInput = 'Max';

  if(typeof userInput === 'string') {
    userName = userInput; // データ型のチェックがないとエラーになる
  }
  // エラーが発生する
  userName = userInput; 
  ```

- never   
  関数の戻り値の型として利用する    
  この関数は絶対に値を返すことはないということを明示している    
  ```
  function generateError(message: string, code: number):never {
    throw { message: message, errorCode: code };
  }
  generateError("エラーが発生しました", 500);
  ```
---