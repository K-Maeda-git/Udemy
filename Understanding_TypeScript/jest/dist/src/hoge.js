"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractInfoBillMailRequest = void 0;
class ContractInfoBillMailRequest {
    constructor(request) {
        this.request = request;
    }
    toBoolean() {
        return this.request === '1';
    }
    static fromBoolean(bool) {
        if (bool) {
            return new ContractInfoBillMailRequest('1');
        }
        return new ContractInfoBillMailRequest('0');
    }
}
exports.ContractInfoBillMailRequest = ContractInfoBillMailRequest;
//# sourceMappingURL=hoge.js.map