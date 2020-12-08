type Admin = {
  // プロパティの定義
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// Intersection Types(交差型)
// すでに作成されている型にあるプロパティを結合した型を作る
type ElevatedEmploee = Admin & Employee;
// interfaceを使っても同じことができる
// interface ElevatedEmploee extends Admin,Employee {}

const e1: ElevatedEmploee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

// 型推論では結合元の型と重複している型が推論される
type Universal = Combinable & Numeric;
console.log("----------------------------------------------------------");

// Type Guards(型ガード)
function add(a: Combinable, b: Combinable) {
  // 実行時の型を調べることでエラーを防いでいる（Combinableの型がstringなのかnumberかわからないから）
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(emp.name);
  // console.log('Privileges: ' + emp.privileges); // privilegesはAdminにしかないのでエラー
  // 上記のエラーを回避する
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Privileges: " + emp.startDate);
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: "letty", startDate: new Date() });

console.log("--------------------------------------------------------");

// クラスの作成
class Car {
  // メソッドの作成
  drive() {
    console.log("車を運転中...");
  }
}

class Truck {
  // メソッドの作成
  drive() {
    console.log("トラックを運転中...");
  }

  loadCargo(amount: number) {
    console.log("荷物を載せています" + amount);
  }
}

// ユニオン型の作成
type Vehicle = Car | Truck;

// インスタンスを作成
const v1 = new Car();
const v2 = new Truck();

// ユニオン型を受け取る関数を作成
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // // 型ガードその①
  // if ("loadCargo" in vehicle) {
  //   vehicle.loadCargo(1000);
  // }
  // 型ガードその②
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

console.log("-------------------------------------------------------");
// Discriminated Unions(判別されるUnion型)
// interfaceの作成
interface Bird {
  // 同じ名前のプロパティを作成する
  type: "bird";
  // プロパティの作成
  flyingSpeed: number;
}
interface Horse {
  type: "horse";
  runningSpeed: number;
}

// 型（ユニオン型）を作成
type Animal = Bird | Horse;

// アニマルを受け取る関数を作成
function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("移動速度：" + speed);
}
moveAnimal({ type: "bird", flyingSpeed: 10 });
moveAnimal({ type: "horse", runningSpeed: 20 });

console.log("-------------------------------------------------------");
// TypeCasting(型キャスト);
// DOMを取得する
// 下記2つはnullではないということを伝えている
// ▼Reactを利用した際に他の書き方と衝突してしまう
// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;　　// <HTMLInputElement>で伝えたい型を指定している
// ▼Reactとの衝突を回避した書き方
// const userInputElement =　document.getElementById("user-input")! as HTMLInputElement; // as HTMLInputElementで伝えたい型を指定している

const userInputElement = document.getElementById("user-input");

// nullが入らないと断言できないときのやり方
if (userInputElement) {
  (userInputElement as HTMLInputElement).value = "Hello";
}

//console.log("-------------------------------------------------------");
// index Types(index型)：オブジェクトを作るときにそのプロパティを柔軟に定義できるやり方
// エラーメッセージを格納する
interface ErrorConteiner {
  // { email:'正しいメールアドレスではありません' , username:'ユーザー名に記号を含めることはできません' }
  [prop: string]: string;
}

const errorBag: ErrorConteiner = {
  email: "正しいメールアドレスではありません",
  username: "ユーザー名に記号を含めることはできません",
};

//console.log("-------------------------------------------------------");
// Function Overloads(関数オーバーロード) :一つの関数に対して複数の関数のシグネチャーを定義する機能
function add2(a: number, b: number): number;
function add2(a: string, b: string): string;
function add2(a: string, b: number): string;
function add2(a: number, b: string): string;
function add2(a: Combinable, b: Combinable) {
  // 実行時の型を調べることでエラーを防いでいる（Combinableの型がstringなのかnumberかわからないから）
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add2("Hello", "TypeScript");
result.split(" ");

// オプショナルチェイン
const fetchedUserData = {
  id: "u1",
  name: "user1",
  job: {
    title: "Developer",
    description: "TypeScript",
  },
};

console.log(fetchedUserData?.job?.title); // [?]オブジェクトが存在しているか不明のときに使う

console.log("-------------------------------------------------------");
// NULL合体演算子
const userInput = ' ';

// const storedDate = userInput || "DEFAULT"; // userInputが空の場合DEFAULTを代入する※空文字も空として認識される
const storedDate = userInput ?? "DEFAULT"; // userInputが空の場合DEFAULTを代入する※空文字はデータ有りと認識される

console.log(storedDate);
