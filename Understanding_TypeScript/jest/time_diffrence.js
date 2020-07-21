"use strict";
exports.__esModule = true;
exports.skipCheck = void 0;
var isSkip;
//現在日時取得
var now = new Date();
var now_ms = now.getTime();
// セットされた日時2020/07/1711:00
var set = new Date(2020, 6, 21, 16, 30);
var set_ms = set.getTime();
//1分＝1000ミリ秒×60秒
var minutes = 1000 * 60;
//現在日時のミリ秒を「分」に換算する
var now_mm = now_ms / minutes;
var set_mm = set_ms / minutes;
// console.log("now：" + typeof now);
// console.log("now_ms：" + typeof now_ms);
// console.log("now_mm：" + typeof now_mm);
/**
 * @param difference [分]の差分
 */
var difference = now_mm - set_mm;
// console.log(typeof difference);
exports.skipCheck = function (difference) {
    // 30分以上であればfalse
    if (difference >= 30) {
        isSkip = false;
        console.log(isSkip);
    }
    // 30分以内であればtrue
    if (difference < 30) {
        isSkip = true;
        console.log(isSkip);
    }
    return isSkip;
};
// テストできるようにexportする必要がある
exports.skipCheck(difference);
