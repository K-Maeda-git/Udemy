console.log(`---------------------------------------`);
// mapのサンプル
var array_number = [1, 2, 3];
const newArray_number = array_number.map((value) => 2 * value);

console.log(array_number); // [ 1, 2, 3]
console.log(newArray_number); // [ 2, 4, 6]

console.log(`---------------------------------------`);
// 文字列の配列をmapで変換する
const array_string = ["japanese", "english", "chinese"];
//.toUpperCase()で文字列を大文字に変換している
const upper_string = array_string.map((language) => language.toUpperCase());

console.log(upper_string); // [ 'JAPANESE', 'ENGLISH', 'CHINESE' ]

console.log(`---------------------------------------`);
// ただの配列からオブジェクトの配列へ
const array_normal = [1, 2, 3];
const array_objects = array_normal.map((key) => ({ key }));
console.log(array_objects);

console.log(`---------------------------------------`);
// オブジェクトの配列からプロパティの配列へ
const objects_persons = [
  { name: "Alice" },
  { name: "Bob" },
  { name: "Charlie" },
];
const names = objects_persons.map((objects_persons) => objects_persons.name);

console.log(names); // [ 'Alice', 'Bob', 'Charlie' ]

console.log(`---------------------------------------`);
// map() の中でインデックスを使う
var array_index = [5, 5, 5];
array_index = array_index.map((value, index) => index);

console.log(array_index); // [0, 1, 2]
console.log(`---------------------------------------`);

// 配列の使い方----------------------------------------
const list: number[] = [1, 2, 3, 4, 5, 6];
var newList: number[] = [];

// 1.[for文]
console.log(`1.[for文]`);
for (let i = 0; i < list.length; i++) {
  newList[i] = list[i] * list[i];
}
console.log(newList);
// list[i]が煩わしい…
console.log(`---------------------------------------`);
// 2.[forEach文]
console.log(`2.[forEach文]`);
list.forEach(function (item, index) {
  newList[index] = item * item;
});
console.log(newList);
// newListの宣言が煩わしい…
console.log(`---------------------------------------`);
// 3.[map]
console.log(`3.[map]`);
newList = list.map(function (item) {
  return item * item;
});
console.log(newList);
// returnされたものが新しい配列の要素の一つとなる
console.log(`---------------------------------------`);

// 配列の基本的な使い方--------------------------------
// 指定した「値」が配列データに存在する場合にその場所を「インデックス番号」で取得できる機能を持っている
var items = ["バナナ", "イチゴ", "リンゴ", "メロン"];
// 配列の要素を検索する方法(indexOf)-------------------
var result_items: any = items.indexOf("リンゴ");
// 配列の要素を追加する方法(push)----------------------
console.log(`push前：` + items);
// 追加した要素は配列の最後尾に追加される（インデックス番号を調べる必要がない）
items.push(`レモン`);
console.log(`push後：` + items);
// 配列の要素を削除する方法(delete)---------------------
console.log(`delete前：` + items);
// インデックス番号で削除したい要素を指定する
delete items[0];
console.log(`delete後：` + items);
// 配列を連結・結合する方法(join)----------------------
// 配列の各要素を連結・結合して「文字列」として出力することができる機能を持つ
result_items = items.join(`/`);
console.log(result_items);
// 配列を分割する方法(slice)---------------------------
// 指定した配列のインデックス番号を境目に分割して新しい配列データを取得することができる機能を持つ
// 開始位置と終了位置の2つの値を引数に取ることができる
result_items = items.slice(1, 3);
console.log(result_items);
// forEachで配列要素を繰り返し処理する-----------------
items.forEach(function (value) {
  console.log(value);
});
// filterで配列要素を抽出する--------------------------
var nums: number[] = [5, 2, 7, 8, 3, 1, 6, 8, 4];
var result_num = nums.filter(function (value) {
  // 5よりも小さい数値を抽出
  return value < 5;
});
console.log(result_num);
// mapで処理した要素を新しい配列で作成する-------------
result_num = nums.map(function (value) {
  // 配列の各要素を2倍にする
  return value * 2;
});
console.log(result_num);
// 配列をコピーするcopyメソッドの使い方----------------
// concatメソッドは指定した配列を対象の配列に連結するためのメソッド
// concatメソッドの引数に何も追加しなければ、元の配列のコピーが得られる
var fruits: string[] = items.concat();
console.log(`items:` + items);
console.log(`fruits:` + fruits);
// 配列をソートするsortメソッドの使い方----------------
// アルファベット順に並び替える
fruits.sort();
console.log(fruits);
// 数値のソート（比較関数）
function compareFunc(a: number, b: number) {
  return a - b; // 昇順
  // return b - a; // 降順
}
nums.sort(compareFunc);
console.log(nums);
// ----------------------------------------------------
console.log(`---------------------------------------`);

// mapの基本-------------------------------------------
var numbers = [1, 2, 3, 4, 5];
// mapの使い方
// var result_numbers = numbers.map((value)=> value * 2); //アロー関数を用いた場合（処理は以下と一緒）
var result_numbers = numbers.map(function (value) {
  // 配列の各要素を2倍にする
  return value * 2;
});
console.log(`numbers:` + numbers);
console.log(`result_numbers:` + result_numbers);
console.log(`---------------------------------------`);

// forEachとの違い（mapは実行後の結果を配列データとして返してくれる）
var result_forEach = [1, 2, 3].forEach(function (value) {
  return value * 2;
});
console.log(result_forEach); // forEachは単純に実行するだけのメソッドのため返り値が存在しないため、「undefined」となる
var result_map = [1, 2, 3].map(function (value) {
  return value * 2;
});
console.log(result_map); // mapは返り値として配列データを取得できるので元の配列×2のデータを取得することができる
console.log(`---------------------------------------`);

// mapのコールバック関数（value(配列の値),index(配列のインデックス番号),array(現在処理している配列)）
// index
var result_index = numbers.map(function (value, index, array) {
  // INDEX番号が偶数のときだけ2倍にする
  if (index % 2 !== 0) {
    return value * 2;
  } else {
    return value;
  }
});
console.log(result_index);
console.log(`---------------------------------------`);
// array
numbers.map(function (value, index, array) {
  // 「array」と「index」を利用して、元の配列データを変更する
  array[index] = value * 2;
});
// 元となる配列データを出力する
console.log(numbers);
console.log(`---------------------------------------`);
// 第2引数のオブジェクトについて
var foodList = {
  オムライス: 450,
  焼きそば: 500,
  お好み焼き: 600,
  焼き飯: 400,
};
// キーワードの指定
var order = [`焼き飯`, `お好み焼き`];
var result_order = order.map(function (value, index, array) {
  // 配列のキーワードを使ってオブジェクト内の値を取得する
  return this[value];
}, foodList);
console.log(result_order);
console.log(`---------------------------------------`);
// ----------------------------------------------------
// var menber = new Map();
// new Map([ //インスタンス生成時に初期値を設定することも可能
//   ["name", "太郎"],
//   ["name", "花子"],
// ]); 
// // 2.要素の追加(set())
// menber.set(`name`, `太郎`);
// menber.set(`age`, 20);
// // 3.要素の取得・削除方法
// console.log(menber.get(`name`));
