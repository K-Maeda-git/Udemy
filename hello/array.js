/* 配列の使い方 **/
var firstList = new Array(4);
firstList[0] = "aaa";
firstList[1] = "bbb";
firstList[2] = "ccc";
firstList[3] = "ddd";
console.log(firstList[0]);
console.log(firstList[1]);
// console.log(hogeList[2]);
console.log(firstList[3]);
/* 配列の宣言 **/
var secondList = new Array(3);
/* 配列の宣言と初期化を同時に行う **/
var thirdList = ["aaa", "bbb", "ccc"];
/* 下記の書き方でもOK **/
// var thirdList: Array<string> = [`aaa`,`bbb`,`ccc`];
console.log(thirdList);
/* 配列を利用したサンプル **/
var animals = [
    "申",
    "酉",
    "戌",
    "亥",
    "子",
    "丑",
    "寅",
    "卯",
    "辰",
    "巳",
    "午",
    "未",
]; // 十二支（申からの順）
var d = new Date();
var i = d.getFullYear() % 12;
console.log(i);
console.log(animals[i]);
var a = new Array(3);
a[0] = 0;
a[1] = 10;
a[10] = 100; // 10番というインデックスは範囲外のはずなのに……
a[20] = 200; // 要素数は3のはずなのに……
console.log("2番は" + a[2] + "、10番は" + a[10] + "、配列のサイズは" + a.length);
console.log("配列のサイズは" + Object.keys(a).length);
