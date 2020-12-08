// [型の利用：function]--------------------------------------------------------
var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput; // データ型のチェックがないとエラーになる
}
// エラーが発生する
// userName = userInput;
// ---------------------------------------------------------
// [型の利用：never]--------------------------------------------------------
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("エラーが発生しました", 500);
// ---------------------------------------------------------
