// tsconfig.jsonの[experimentalDecorators]をtrueに変更している
// デコレータークラス

// デコレーター関数の追加(関数をデコレーターとして利用する)
// クラスが定義されたタイミングで実行される（console.log("Personオブジェクトを作成中...");）よりも前に実行されていることがわかる
// function Logger(constructor: Function) {   // ここではコンストラクター関数を受け取るため引数の名前を[constructor]としている
//     console.log("ログ出力中...");
//     console.log(constructor);
// }

// 上記のデコレータ関数をデコレータファクトリに変更している
// デコレータファクトリー：デコレータをなにかに割り当てる際にカスタマイズできるようにする
function Logger(logString: string) {
  console.log("LOGGER ファクトリ");
  // 匿名の関数を返すようにしている
  return function (constructor: Function) {
    // デコレータで実行したい処理を書く
    console.log(logString);
    console.log(constructor);
    console.log("----------");
  };
}

// メタプログラミング
// HTMLのテンプレートを受け取りDOMに表示する
function WithTemplate(template: string, hookId: string) {
  console.log("TEMPLATE ファクトリ");
  // [_]TypeScriptに引数としては受け取るが必要ないものと言うことを伝えている
  //   return function (_: Function) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("テンプレートを表示");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

// [@]TypeScriptがデコレーターと認識するための識別子
// デコレーター関数は下から順に実行される
@Logger("ログ出力中 - PERSON") // 関数をして実行
@WithTemplate("<h1>Personオブジェクト</h1>", "app")
class Person {
  name = "Max";

  constructor() {
    console.log("Personオブジェクトを作成中...");
  }
}

const pers = new Person();
console.log(pers);

console.log("-------------------------------------------------------");
// デコレータ作成(プロパティ用)
function Log(target: any, propertyName: string | Symbol) {
  console.log("Propety デコレータ");
  console.log(target, propertyName);
  console.log("----------");
}

// デコレータ作成(アクセサ用)
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor デコレータ");
  console.log(target);
  console.log(name);
  console.log(descriptor);
  console.log("----------");
}

// デコレータ作成（メソッド用）
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log("Method デコレータ");
  console.log(target);
  console.log(name);
  console.log(descriptor);
  console.log("----------");
}

// デコレータ作成（パラメータ用）
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Parameter デコレータ");
  console.log(target);
  console.log(name);
  console.log(position);
  console.log("----------");
}

class Product {
  // プロパティに対してデコレータを追加
  @Log
  title: string;
  // クラス外部からのアクセスを禁止
  private _price: number;

  // アクセサに対してデコレータを追加
  @Log2
  // セッターの作成
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("不正な価格です - 0以下は設定できません");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  // メソッドに対してデコレータを追加
  @Log3
  // メソッドの作成
  // パラメータデコレータは直前に追加する
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

// クラスをインスタンス化したときにデコレータが関数が呼ばれるわけではない
const p1 = new Product("Book", 100);
const p2 = new Product("Book", 200);

// console.log("-------------------------------------------------------");
// 例："Autobind" デコレータの作成
// showMessage用デコレータ作成(設置された関数はどこで呼び出されたとしても自動的にそれが属するオブジェクトにバインドされるようになる)
function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  // プロパティの追加
  message = "クリックしました！";

  // デコレータの設置
  @Autobind
  // メソッドの追加（メッセージを出力する）
  showMessage() {
    console.log(this.message);
  }
}

// オブジェクトの作成
const p = new Printer();

// HTMLのボタン要素を取得
const button = document.querySelector("button")!;
// ボタンに対してイベントを追加(showMessageメソッドを実行する)
// button.addEventListener("click", p.showMessage.bind(p)); // 通常の方法
button.addEventListener("click", p.showMessage); // 上記の方法をデコレータで行っている

// console.log("-------------------------------------------------------");
// クラス,プロパティごとのバリデーション設定を保存
interface ValidatorConfig {
  [prop: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

// オブジェクトの型
const registeredValidators: ValidatorConfig = {};

function Required(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: [
      ...(registeredValidators[target.constructor.name]?.[propertyName] ?? []),
      "required",
    ],
  };
}

function PositiveNumber(target: any, propertyName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]: [
      ...(registeredValidators[target.constructor.name]?.[propertyName] ?? []),
      "positive",
    ],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

// デコレータを使ったバリデーション
class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

// HTMLからフォームの要素を取得
const courseForm = document.querySelector("form")!;
// SUBMITしたときのイベントを追加
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // タイトル要素の取得
  const titleEl = document.getElementById("title") as HTMLInputElement; // HTMLInputElementにキャスト
  // プライス要素の取得
  const priceEl = document.getElementById("price") as HTMLInputElement; // HTMLInputElementにキャスト

  // 上記からタイトルとプライスの入力値を取得
  const title = titleEl.value;
  const price = +priceEl.value; // [+]でnumberにキャスト

  // Courseクラスのインスタンスを作成
  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("正しく入力してください！");
    return;
  }

  console.log(createdCourse);
});
