// [型の利用：void]--------------------------------------------------------
function add_2(n1: number, n2: number) {
  return n1 + n2;
}

// [void]何も返さない(undefined)型(return命令を持たないということ)
function printResult2(num: number) {
  console.log("Result: " + num);
}
printResult2(add_2(5, 12));
// ---------------------------------------------------------

// [型の利用：function]-------------------------------------
// [function]明示的に指定することで、「これは関数だよ」と伝えている
// let combineValue:Function;
// より明示的に関数の情報を伝える(どのような引数を受け取りなにを返すか伝えている)
let combineValue: (a: number, b: number) => number;
// 変数combineValueにadd_2関数を格納している
combineValue = add_2;
// 変数combineValueを通してadd_2関数を実行している
console.log(combineValue(8, 8));
// ---------------------------------------------------------

// [型の利用：functionとコールバック]--------------------------------------------------------
function addAndHandle(n1: number, n2: number, cd: (num: number) => void) {
  //受け取った値の合計をコールバック関数に引数として渡す
  const result = n1 + n2;
  cd(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
// ---------------------------------------------------------
