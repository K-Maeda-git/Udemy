"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckSkipService = void 0;
class CheckSkipService {
    skipCheck(getauth) {
        let isSkip = false;
        const minutes = 1000 * 60;
        const today = new Date().getTime();
        const todaymm = today / minutes;
        const auth = getauth;
        const authTime = auth.getTime();
        const authmm = authTime / minutes;
        const difference = todaymm - authmm;
        if (difference < 30) {
            isSkip = true;
        }
        else {
            isSkip;
        }
        return isSkip;
    }
}
exports.CheckSkipService = CheckSkipService;
//# sourceMappingURL=app.js.map