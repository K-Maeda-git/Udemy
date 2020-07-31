class CheckSkipService {
  
  async skipCheck(): Promise<boolean> {
    let isSkip = false;
    // true:skipする / false:skipしない
    // // 1分＝1000ミリ秒×60秒
    const minutes = 1000 * 60;
    // 現在日時(ミリ秒)
    const today = new Date().getTime();
    // ミリ秒を分へ変換
    const todaymm = today / minutes;
    // 認証時間
    const auth = new Date(2020, 6, 27, 17, 30).getTime();
    // ミリ秒を分へ変換
    const authmm = auth / minutes;
    // 現在日時と認証時間の差分
    const difference = todaymm - authmm;

    // 認証時間が30分以内であれば[isSkip]にtrueを返す
    if (difference < 30) {
      isSkip = true;
    }
    return isSkip;
  }
}

// let hoge: CheckSkipService;
const checkSkipService = new CheckSkipService();
console.log(checkSkipService.skipCheck());

// class CheckSkipService {
//   //   isSkip: boolean;
//   minutes: number;
//   now: number;
// //   now_ms: number;
//   now_mm: number;
//   set: number;
// //   set_ms: number;
//   set_mm: number;
//   difference: number;

//   constructor() {
//     // this.isSkip = false;
//     this.minutes = 1000 * 60;
//     this.now = new Date().getTime();
//     // this.now_ms = this.now.getTime();
//     this.now_mm = this.now / this.minutes;
//     this.set = new Date(2020, 6, 27, 17, 30).getTime();
//     // this.set_ms = this.set.getTime();
//     this.set_mm = this.set / this.minutes;
//     this.difference = this.now_mm - this.set_mm;
//   }

//   skipCheck():boolean {
//     let isSkip = false;
//     if (this.difference < 30) {
//       isSkip = true;
//     //   console.log("Safe：" + isSkip);
//     //   return isSkip;
//     }
//     // if (this.difference >= 30) {
//     //   console.log("Out：" + isSkip);
//     //   return isSkip;
//     // }
//     console.log(isSkip);
//     return isSkip;
//   }

// //   logcheck() {
// //     console.log("isSkip/minutes");
// //     // console.log(this.isSkip);
// //     console.log(this.minutes);
// //     console.log("now");
// //     console.log(this.now);
// //     console.log(this.now_ms);
// //     console.log(this.now_mm);
// //     console.log("set");
// //     console.log(this.set);
// //     console.log(this.set_ms);
// //     console.log(this.set_mm);
// //     console.log("difference");
// //     console.log(this.difference);
// //   }
// }

// const hoge = new CheckSkipService();
// hoge.skipCheck();

// // hoge.logcheck();
