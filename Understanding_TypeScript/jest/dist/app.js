"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckSkipService = void 0;
class CheckSkipService {
    skipCheck() {
        let isSkip = false;
        const minutes = 1000 * 60;
        const today = new Date().getTime();
        const todaymm = today / minutes;
        const auth = new Date(2020, 6, 30, 10, 30).getTime();
        const authmm = auth / minutes;
        const difference = todaymm - authmm;
        if (difference < 30) {
            isSkip = true;
        }
        if (difference > 30) {
            isSkip;
        }
        return isSkip;
    }
}
exports.CheckSkipService = CheckSkipService;
const checkSkipService = new CheckSkipService();
console.log(checkSkipService.skipCheck());
//# sourceMappingURL=app.js.map