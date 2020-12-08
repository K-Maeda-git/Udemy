// [型の利用：Union,Literal,エイリアス]--------------------------------------------------------
// [エイリアス] type [型名] = [型の定義];
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
    // [Union]型の指定を「｜」で区切って柔軟にする
//   input1: number | string,
//   input2: number | string,
//   resultConversion: 'as-number' | 'as-text' // [Literal]指定した値以外のものの場合エラーになる
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor // [Literal]指定した値以外のものの場合エラーになる
) {
  let result;
  // データ型をチェックすることでエラーを解消している
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    // 両方がnumber型なら数値の合計を返す
    result = +input1 + +input2; 
  } else {
    // 文字列を含んでいた場合には明示的に文字列として変換した値を返す
    result = input1.toString() + input2.toString();
  }
  return result;
}
// 数値を渡す呼び出し
const combinedArgs = combine(30, 26, "as-number");
console.log(combinedArgs);

// 引数をstringで受け取り結果はnumberで返す呼び出し
const combinedStringArgs = combine(30, 26, "as-number");
console.log(combinedStringArgs);

// 文字列を渡す呼び出し
const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
// -------------------------------------------------------------------------
