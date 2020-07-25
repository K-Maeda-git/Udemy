// 関数を定義
function judge(money) {
    var result;
    if (money > 5000) {
        result = "お金持ち";
    }
    else if (money > 3000) {
        result = "普通";
    }
    else {
        result = "貧乏";
    }
    return result;
}
//関数の戻り値を入れる変数//
var result;
//引数moneyに10000を渡す→「お金持ち」と出力される//
result = judge(10000);
console.log(result);
//引数moneyに4000を渡す→「普通」と出力される//
result = judge(4000);
console.log(result);
//引数moneyに2000を渡す→「貧乏」と出力される//
result = judge(2000);
console.log(result);
