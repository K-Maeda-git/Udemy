// 「インターフェイスについて：オブジェクトの構造を定義して型として利用する」
// ▼ここで構造を定義
interface Practice {
  // プロパティの定義
  //   name: string = 'Max';// 初期値を設定することはできない
  name: string;
  age: number;

  // メソッドの追加
  // メソッド名(引数名:型): 戻り値;
  greet(phrase: string): void;
}

// ▼ここで定義した構造を利用
let user1: Practice; // インターフェースを型として利用する
// user1に値を代入するときはオブジェクトである必要がある
user1 = {
  name: "Max",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};
user1.greet("Hello I am");
console.log("----------------------------------------------------------");
// ファンクション型を定義する
// type Addfn = (a: number ,b: number) => number;
// 上記のファンクション型をインターフェースを使って定義
interface Addfn {
  // 関数の型を定義している
  (a: number, b: number): number;
}
// 関数を格納するための変数を作成
let add: Addfn;
// 関数を代入する
add = (n1: number, n2: number) => {
  return n1 + n2;
};

// 「クラスでインターフェースを実装する」
interface Named {
  // [readonly] 一度だけ初期化されて設定する
  // [?]プロパティを持っていてもいなくても構わない
  readonly name?: string;
  outputName?: string;
}
// [extends]インターフェースを継承(複数指定することが可能)
interface Greetable extends Named {
  greet(phrase: string): void;
}
// implementsを使うことで指定したインターフェースに基づいて実装されるということを伝えている
// 複数のインターフェースを指定することもできる（クラスの継承は一つしかできない）
class Person implements Greetable {
  name?: string; // プロパティの追加
  age = 30;
  constructor(n?: string) {
    // nが空文字列でない場合のみ値を設定する
    if (n) {
      // コンストラクターで初期化
      this.name = n;
    }
  }

  greet(phrase: string) {
    // nameに値が入っていないときはHi!を返す
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

let user2: Greetable;
user2 = new Person();
user2.greet("Hello I am");
console.log(user2);
console.log("----------------------------------------------------------");
