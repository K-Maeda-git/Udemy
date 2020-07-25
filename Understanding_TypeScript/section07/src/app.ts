// ジェネリクスについて
// ジェネリック型：他の特定の型と結合された型([<any>]追加の型情報を切り替えることで汎用的に利用することができる)
// const names: Array<string> = ["Max,manuel"];
// names[0].split(" ");

// // プロミス型
// const promise: Promise<number> = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve('終わりました！');
//   }, 2000);
// });

// promise.then((date) => {
//   DataCue.split(" ");
// });

// 独自のジェネリック型を作る
// extendsでジェネリック型に制約を設ける事ができる
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);
console.log(mergedObj.name);
console.log(mergedObj.hobbies);
console.log(mergedObj.age);

console.log("-------------------------------------------------------");
// ジェネリクス関数
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "値がありません";
  if (element.length > 0) {
    descriptionText = "値は" + element.length + "個です。";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("お疲れ様です"));
console.log(countAndDescribe(["Sport", "Cooking"]));

// ジェネリクスの制約
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Max" }, "name");

console.log("-------------------------------------------------------");
// ジェネリッククラス
// プリミティブ型を用いてオブジェクト型の利用を阻止している
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  // アイテムを追加するメソッド
  addItem(item: T) {
    this.data.push(item);
  }

  // アイテムを削除するメソッド
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  // this.dataのコピーを返すメソッド
  getItem() {
    return [...this.data];
  }
}

// ジェネリック型で格納する型を決めている
const textStorage = new DataStorage<string>(); // 文字列のストレージを作成
const numberStorage = new DataStorage<number>(); // 数値のストレージを作成
const strANDnumStorage = new DataStorage<string | number>(); // 文字列＆数値のストレージを作成

// データを格納している
textStorage.addItem("Data1");
textStorage.addItem("Data2");
// データを削除している
textStorage.removeItem("Data1");
// 取得したデータの結果を出力している
console.log(textStorage.getItem()); // 結果：Data1

// ジェネリック型のユーティリティ
interface CourseGoal {
  title: string;
  description: string;
  completeUntile: Date;
}
// オブジェクトを作るための関数を定義
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  // Pertial型(ジェネリック型に指定されたオブジェクトの型のプロパティをすべてオプショナルに変更する)
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntile = date;
  return courseGoal as CourseGoal; // as CourseGoal でキャストする必要がある
}

// Readonly型
// 読み取り専用として認識させることで値を追加できないようにする
const names: Readonly<string[]> = ["Max,Anna"];
// names.push('Manu'); // 追加NG
// names.pop(); // 削除NG

console.log("-------------------------------------------------------");
