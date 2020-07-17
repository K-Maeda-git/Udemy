"use strict";
const now = new Date();
const now_ms = now.getTime();
const set = new Date(2020, 6, 17, 11, 40);
const set_ms = set.getTime();
const minutes = 1000 * 60;
const now_mm = now_ms / minutes;
const set_mm = set_ms / minutes;
const difference = now_mm - set_mm;
console.log(difference);
let isSkip;
if (difference < 30) {
    isSkip = true;
    console.log(isSkip);
}
if (difference >= 30) {
    isSkip = false;
    console.log(isSkip);
}
//# sourceMappingURL=time_diffrence.js.map