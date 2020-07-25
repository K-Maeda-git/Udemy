// export class CheckSkipService {
//   time:Date;
//   constructor(){
//     this.time = new Date;
//   }

//   static hoge() {
//     let isSkip: boolean;
//     //現在日時取得
//     const now = new Date();
//     const now_ms = now.getTime();
//     // セットされた日時2020/07/1711:00
//     const set = new Date(2020, 6, 20, 16, 45);
//     const set_ms = set.getTime();

//     //1分＝1000ミリ秒×60秒
//     const minutes = 1000 * 60;

//     //現在日時のミリ秒を「分」に換算する
//     const now_mm = now_ms / minutes;
//     const set_mm = set_ms / minutes;

//     const difference = now_mm - set_mm;
//   }

//   addTime() {
//     this.time.push(new Date());
//   }

//   skipCheck() {
//     // 30分以内であればtrue
//     if (difference < 30) {
//       isSkip = true;
//       // console.log(isSkip);
//     }
//     // 30分以上であればfalse
//     if (difference >= 30) {
//       isSkip = false;
//       // console.log(isSkip);
//     }
//     return isSkip;
//   }
// }

// const hoge = new CheckSkipService();
// hoge.skipCheck();
// // skipCheck(difference);

// -----------------------------------------------------------

//   // チェック判定
//   isSkip: boolean;

//   //現在日時
//   readonly now: Date;
//   readonly now_ms: number;
//   readonly now_mm: number;

//   // 指定日時
//   readonly set: Date;
//   readonly set_ms: number;
//   readonly set_mm: number;

//   // ミリ秒=>分へ
//   readonly minutes: number;
//   // 現在-指定=差分
//   readonly difference: number;

//   constructor() {
//     this.isSkip = false;
//     this.now = new Date();
//     this.now_ms = this.now.getTime();
//     this.set = new Date(2020, 6, 22, 14, 0);
//     this.set_ms = this.set.getTime();
//     this.minutes = 1000 * 60;
//     this.now_mm = this.now_ms / this.minutes;
//     this.set_mm = this.set_ms / this.minutes;
//     this.difference = this.now_mm - this.set_mm;
//   }

//   // hoge() {
//   //   console.log("NOW_TIME");
//   //   console.log(this.now);
//   //   console.log(this.now_ms);
//   //   console.log(this.now_mm);
//   //   console.log("SET_TIME");
//   //   console.log(this.set);
//   //   console.log(this.set_ms);
//   //   console.log(this.set_mm);
//   //   console.log(this.difference);
//   // }

//   skipCheck() {
//     // 30分以内であればtrue
//     if (this.difference < 30) {
//       this.isSkip = true;
//       console.log(this.isSkip);
//     }
//     // 30分以上であればfalse
//     if (this.difference >= 30) {
//       this.isSkip = false;
//       console.log(this.isSkip);
//     }
//     return this.isSkip;
//   }
// }

// export const checkSkipService = new CheckSkipService();
// checkSkipService.skipCheck();

// ------------------------------------------------------------------

// export class CheckSkipService {
//   // チェック判定
//   isSkip: boolean;

//   //現在日時
//   readonly now: Date;
//   readonly now_ms: number;
//   readonly now_mm: number;

//   // 指定日時
//   readonly set: Date;
//   readonly set_ms: number;
//   readonly set_mm: number;

//   // ミリ秒=>分へ
//   readonly minutes: number;
//   // 現在-指定=差分
//   readonly difference: number;

//   constructor() {
//     this.isSkip = false;
//     this.now = new Date();
//     this.now_ms = this.now.getTime();
//     this.set = new Date(2020, 6, 22, 14, 0);
//     this.set_ms = this.set.getTime();
//     this.minutes = 1000 * 60;
//     this.now_mm = this.now_ms / this.minutes;
//     this.set_mm = this.set_ms / this.minutes;
//     this.difference = this.now_mm - this.set_mm;
//   }

//   // hoge() {
//   //   console.log("NOW_TIME");
//   //   console.log(this.now);
//   //   console.log(this.now_ms);
//   //   console.log(this.now_mm);
//   //   console.log("SET_TIME");
//   //   console.log(this.set);
//   //   console.log(this.set_ms);
//   //   console.log(this.set_mm);
//   //   console.log(this.difference);
//   // }

//   skipCheck() {
//     // 30分以内であればtrue
//     if (this.difference < 30) {
//       this.isSkip = true;
//       console.log(this.isSkip);
//     }
//     // 30分以上であればfalse
//     if (this.difference >= 30) {
//       this.isSkip = false;
//       console.log(this.isSkip);
//     }
//     return this.isSkip;
//   }
// }

// export const checkSkipService = new CheckSkipService();
// checkSkipService.skipCheck();

// checkSkipService.hoge();

// //現在日時取得
// const now = new Date();
// const now_ms = now.getTime();
// // セットされた日時2020/07/1711:00
// const set = new Date(2020, 6, 20, 16, 45);
// const set_ms = set.getTime();

// //1分＝1000ミリ秒×60秒
// const minutes = 1000 * 60;

// //現在日時のミリ秒を「分」に換算する
// const now_mm = now_ms / minutes;
// const set_mm = set_ms / minutes;
// console.log("now：" + typeof now);
// console.log("now_ms：" + typeof now_ms);
// console.log("now_mm：" + typeof now_mm);

// /**
//  * @param difference [分]の差分
//  */
// const difference = now_mm - set_mm;
// console.log(typeof difference);

// const skipCheck = (difference: number): boolean => {
//   // 30分以内であればtrue
//   if (difference < 30) {
//     isSkip = true;
//     console.log(isSkip);
//   }
//   // 30分以上であればfalse
//   if (difference >= 30) {
//     isSkip = false;
//     console.log(isSkip);
//   }
//   return isSkip;
// };
// skipCheck(difference);

// ------------------------------------------------------------------

// let isSkip: boolean;

// //現在日時取得
// const now = new Date();
// const now_ms = now.getTime();
// // セットされた日時2020/07/1711:00
// const set = new Date(2020, 6, 20, 16, 45);
// const set_ms = set.getTime();

// //1分＝1000ミリ秒×60秒
// const minutes = 1000 * 60;

// //現在日時のミリ秒を「分」に換算する
// const now_mm = now_ms / minutes;
// const set_mm = set_ms / minutes;
// console.log("now：" + typeof now);
// console.log("now_ms：" + typeof now_ms);
// console.log("now_mm：" + typeof now_mm);

// /**
//  * @param difference [分]の差分
//  */
// const difference = now_mm - set_mm;
// console.log(typeof difference);

// const skipCheck = (difference: number): boolean => {
//   // 30分以内であればtrue
//   if (difference < 30) {
//     isSkip = true;
//     console.log(isSkip);
//   }
//   // 30分以上であればfalse
//   if (difference >= 30) {
//     isSkip = false;
//     console.log(isSkip);
//   }
//   return isSkip;
// };
// skipCheck(difference);
// let isSkip: boolean;

// ------------------------------------------------------------------

export class CheckSkipService {
  nowDay(set: Date) {
    // let isSkip: boolean;

    //現在日時取得
    const now = new Date();
    const now_ms = now.getTime();
    // セットされた日時2020/07/1711:00
    // const set:Date;
    const set_ms = set.getTime();
    console.log('checkPoint'+set_ms);

    //1分＝1000ミリ秒×60秒
    const minutes = 1000 * 60;

    //現在日時のミリ秒を「分」に換算する
    const now_mm = now_ms / minutes;
    const set_mm = set_ms / minutes;
    // console.log("now：" + typeof now);
    // console.log("now_ms：" + typeof now_ms);
    // console.log("now_mm：" + typeof now_mm);

    /**
     * @param difference [分]の差分
     */
    const difference = now_mm - set_mm;
    console.log(difference);
  }

  skipCheck(difference: number): boolean {
      // 30分以内であればtrue
      if (difference < 30) {
        isSkip = true;
        console.log(isSkip);
      }
      // 30分以上であればfalse
      if (difference >= 30) {
        isSkip = false;
        console.log(isSkip);
      }
      return isSkip;
    }
}
const getDay = new CheckSkipService();
getDay.nowDay(new Date(2020, 6, 20, 16, 45));
getDay.skipCheck();
// skipCheck(difference);
