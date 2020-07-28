"use strict";
exports.__esModule = true;
exports.CheckSkipService = void 0;
var CheckSkipService = /** @class */ (function () {
    function CheckSkipService() {
    }
    CheckSkipService.prototype.skipCheck = function () {
        var isSkip = false;
        // true:skipする / false:skipしない
        // // 1分＝1000ミリ秒×60秒
        var minutes = 1000 * 60;
        // 現在日時(ミリ秒)
        var today = new Date().getTime();
        // ミリ秒を分へ変換
        var todaymm = today / minutes;
        // 認証時間
        var auth = new Date(2020, 6, 28, 12, 30).getTime();
        // ミリ秒を分へ変換
        var authmm = auth / minutes;
        // 現在日時と認証時間の差分
        var difference = todaymm - authmm;
        // 認証時間が30分以内であれば[isSkip]にtrueを返す
        if (difference < 30) {
            isSkip = true;
        }
        return isSkip;
    };
    return CheckSkipService;
}());
exports.CheckSkipService = CheckSkipService;
// let hoge: CheckSkipService;
const checkSkipService = new CheckSkipService();
console.log(checkSkipService.skipCheck());
