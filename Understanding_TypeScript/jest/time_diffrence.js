"use strict";
exports.__esModule = true;
exports.CheckSkipService = void 0;
var CheckSkipService = /** @class */ (function () {
  function CheckSkipService() {}
  CheckSkipService.prototype.nowDay = function (set) {
    // let isSkip: boolean;
    //現在日時取得
    var now = new Date();
    var now_ms = now.getTime();
    // セットされた日時2020/07/1711:00
    // const set:Date;
    var set_ms = set.getTime();
    console.log("checkPoint" + set_ms);
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
    console.log(difference);
  };
  return CheckSkipService;
})();
exports.CheckSkipService = CheckSkipService;
var getDay = new CheckSkipService();
getDay.nowDay(new Date(2020, 6, 20, 16, 45));
// skipCheck(difference);
