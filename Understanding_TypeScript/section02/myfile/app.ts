// [型の利用：function]--------------------------------------------------------
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput; // データ型のチェックがないとエラーになる
}
// エラーが発生する
// userName = userInput;
// ---------------------------------------------------------

// [型の利用：never]--------------------------------------------------------
// [never]この関数は絶対に値を返すことはないということを明示している
function generateError(message: string, code: number):never {
  throw { message: message, errorCode: code };
}

generateError("エラーが発生しました", 500);
// ---------------------------------------------------------
