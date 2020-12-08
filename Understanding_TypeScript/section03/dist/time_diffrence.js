"use strict";
let isSkip;
const now = new Date();
const now_ms = now.getTime();
const set = new Date(2020, 6, 20, 16, 45);
const set_ms = set.getTime();
const minutes = 1000 * 60;
const now_mm = now_ms / minutes;
const set_mm = set_ms / minutes;
console.log("now：" + typeof now);
console.log("now_ms：" + typeof now_ms);
console.log("now_mm：" + typeof now_mm);
const difference = now_mm - set_mm;
console.log(typeof difference);
const skipCheck = (difference) => {
    if (difference < 30) {
        isSkip = true;
        console.log(isSkip);
    }
    if (difference >= 30) {
        isSkip = false;
        console.log(isSkip);
    }
    return isSkip;
};
skipCheck(difference);
//# sourceMappingURL=time_diffrence.js.map