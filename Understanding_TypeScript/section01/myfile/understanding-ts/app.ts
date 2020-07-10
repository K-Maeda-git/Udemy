console.log("-Hello TypeScript-");

// 変数定義--------------------------------------------------
const number1 = 5;
// const number1 = "5"; // 型numberじゃないため、エラーとなる。
let number2 = 2.8;
number2 = 3;
// number2 = "STRING"; // 型推論によりnumber2はnumber型のため文字列を入れようとするとエラーとなる。
const printResult = true;
const resultPhrase = "Result:";

// any型 どんな値でも格納することができる
let any_test:any ;
any_test=1;
any_test="STRING";
any_test=true;

// ---------------------------------------------------------

/**
 * 型の利用
 * @param n1
 * @param n2
 */
// [型の利用：number,boolean,string]--------------------------------------------------------
// 引数に型(numberなど）を指定することでそれ以外（numberに文字列が入っている場合など）を入れた場合にエラーとなる
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // [typeof演算子]-----------------------------------------------------------
  //   // JavaScriptで入力値をチェックする方法（実行しないとわからない）
  //   if (typeof n1 !== "number" || typeof n2 !== "number") {
  //     throw new Error("入力値が正しくありません");
  //   }
  // TypeScriptで入力値を確認する方法（実行しなくてもエラーに気がつくことができる）
  // [typeof演算子]データ型の種類を教えてくれる
  console.log("▼[typeof演算子]データ型の種類を教えてくれる");
  console.log("[n1]" + typeof n1 + "/" + "[n2]" + typeof n2);
  console.log("------------------------------------------");
  // -----------------------------------------------------------------------
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result); // 5 + 2.8 = 7.8
  } else {
    return result;
  }
}

add(number1, number2, printResult, resultPhrase);
// -----------------------------------------------------------------------
