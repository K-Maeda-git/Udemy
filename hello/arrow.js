var numbers = [1, 4, 9];
// function文→アロー関数
// var roots = numbers.map(function(num) {
//     return Math.sqrt(num)
// });
var roots = numbers.map(function (num) {
    return Math.sqrt(num);
});
console.log(numbers); // [1, 4, 9]
console.log(roots); // [1, 2, 3]
// -----------------------------------------
var kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
];
// アロー関数→function文
// var reformattedArray = kvArray.map((obj) => {
//   var rObj = {};
//   rObj[obj.key] = obj.value;
//   return rObj;
// });
var reformattedArray = kvArray.map(function (obj) {
    var rObj = {};
    rObj[obj.key] = obj.value;
    return rObj;
});
console.log(reformattedArray); // [ { '1': 10 }, { '2': 20 }, { '3': 30 } ]
// -----------------------------------------
var numbers = [1, 4, 9];
// function文→アロー関数
// var roots = numbers.map(function (num) {
//   return Math.sqrt(num);
// });
var roots = numbers.map(function (num) {
    return Math.sqrt(num);
});
console.log(numbers); // [ 1, 4, 9 ]
console.log(roots); // [ 1, 2, 3 ]
// -----------------------------------------
var map = Array.prototype.map;
// var a = map.call("Hello World", function (x) {
//     return x.charCodeAt(0);
// });
// function文→アロー関数
var a = map.call("Hello World", function (x) {
    return x.charCodeAt(0);
});
console.log(a); // [ 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100 ]
// -----------------------------------------
