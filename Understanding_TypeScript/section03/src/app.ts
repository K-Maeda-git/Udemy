let appId = "abc";
// 最初に見つけたボタンをobjectとして取得
const button = document.querySelector("button")!;

function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHandler(message: string) {
  //let userName = 'Max'; 
  console.log("Clicked! " + message);
}

// a comment
if (button) {
  // ボタンを押したときのイベント
  button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}

function showSum() {
  var num1 = 1;
  var num2 = 2;
  var sum = num1 + num2;
  alert(sum);
}
