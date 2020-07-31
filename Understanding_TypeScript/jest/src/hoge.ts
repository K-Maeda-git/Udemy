export class ContractInfoBillMailRequest {
  readonly request: string;

  constructor(request: string) {
    this.request = request;
  }

  toBoolean(): boolean {
    return this.request === "1";
  }

  static fromBoolean(bool: boolean): ContractInfoBillMailRequest {
    if (bool) {
      return new ContractInfoBillMailRequest("1");
      } else {
      return new ContractInfoBillMailRequest("0");
      }
    // }
    // return new ContractInfoBillMailRequest("0");
  }
}

const contractInfoBillMailRequest = new ContractInfoBillMailRequest("1");
console.log(contractInfoBillMailRequest.toBoolean());

// if (条件文a1 || 条件文a2) {
//   // 判定条件A
//   命令文X;
// }

// if (条件文b1 || 条件文b2) {
//   // 判定条件B
//   命令文Y;
// } else {
//   命令文Z;
// }
