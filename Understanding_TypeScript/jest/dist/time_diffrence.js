"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckSkipService = void 0;
class CheckSkipService {
    skipCheck() {
        return __awaiter(this, void 0, void 0, function* () {
            let isSkip = false;
            const minutes = 1000 * 60;
            const today = new Date().getTime();
            const todaymm = today / minutes;
            const auth = new Date(2020, 6, 27, 17, 30).getTime();
            const authmm = auth / minutes;
            const difference = todaymm - authmm;
            if (difference < 30) {
                isSkip = true;
            }
            return isSkip;
        });
    }
}
exports.CheckSkipService = CheckSkipService;
//# sourceMappingURL=time_diffrence.js.map