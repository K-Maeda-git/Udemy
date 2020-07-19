// constとletについて-------------------------------------
// [const]定数を定義するためのキーワード（値の変更不可）
const userName = `Max`;
// userName = `Maxmilian` // NG

// [let]変数を定義するためのキーワード（値の変更可）
let age = 20;
age = 30;

// ------------------------------------------------------

// アロー関数について-------------------------------------
// function add(a: number, b: number) {
//     let resurl;
//     resurl = a + b;
//     return resurl;
// }

// const add = function (a: number, b: number) {
//   return a + b;
// };

// 上記をアロー関数を用いて書き換え
// 1. functionを省略した書き方
// const add = (a: number, b: number) => {
//   return a + b;
// };
// 2. 一つの四季の結果だけを返す場合{}とreturnを省略することができる（式が2つ以上の場合は{}とreturn必要）
// const add = (a: number, b: number) => a + b;
// パラメーターにデフォルト値を与える(パラメータが2つ以上ある場合デフォルト値は後ろから適用する（1つ目のパラーメーターのみにデフォルト値はを与えた場合エラー）)
const add = (a: number, b: number = 2) => a + b;
// 受け取るパラメーターが1つだけのとき()を省略することができる(constの型を関数型として指定することでパラメーターの方を定める)
const printOutput: (output: string | number) => void = (output) => {
  console.log(output);
};

printOutput(add(2));

// アロー関数を使用したサンプル
const button = document.querySelector(`button`);
if (button) {
  button.addEventListener(`click`, (event) => {
    console.log(event);
  });
}

// ------------------------------------------------------

// スプレッド演算子について-------------------------------------
// 配列を使ったサンプル
const hobbies = [`sports`, `cooking`];
console.log(`hobbies:` + hobbies);

const activeHobbies = [`haiking`];
console.log(`activeHobbies:` + activeHobbies);
// [...]以降に書かれた配列やオブジェクトの中身をすべて取り出してその値をリストとしてその場所に追加する
activeHobbies.push(...hobbies);
console.log(`activeHobbies:` + activeHobbies);
console.log(`------------------------------------------------------`);

// オブジェクトを使ったサンプル
const person = {
  name: `Max`,
  age: 20,
};
console.log(`person:` + person.name + person.age);

const copiedPerson = {
  ...person,
};
console.log(`copiedPerson:` + copiedPerson.name + copiedPerson.age);
console.log(`------------------------------------------------------`);

// レストパラメーターについて-------------------------------------
// [...]任意の数の引数を受け取りたい場合に使う
const add2 = (...numbers: number[]) => {
  // [reduce]配列に対して使うことのできるメソッド：すべての要素の合計計算することができる
  // 1つ目の引数は計算を行う関数 2つ目の引数は計算を行う初期値
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
const addedNumber = add2(5, 3, 10, 3.4, 3.6);
console.log(addedNumber);
console.log(`------------------------------------------------------`);

// 配列とオブジェクトの分割代入について-------------------------------------
const musicCategory = [`pop`, `rock`, `jazz`, `edm`];
const pc = {
  cpu: `Ryzen5_1600AF`,
  gpu: `1660super`,
  ram: `16GB`,
  ssd: `500GB`,
};

// [分割代入]配列の値をそれぞれ取り出して定数や変数にコピーする
const [mCategory1, mCategory2, ...category] = musicCategory;
console.log(musicCategory, mCategory1, mCategory2, category);

// [分割代入]オブジェクトの値をそれぞれ取り出して定数や変数にコピーする
// オブジェクトの場合は格納する変数や定数の名前がプロパティと一致している必要がある
// 名前を変更したい場合には[:]を使って上書きする
const { cpu, gpu, ram, ssd: m2 } = pc;
console.log(pc, cpu, gpu, ram, m2);

// ------------------------------------------------------
