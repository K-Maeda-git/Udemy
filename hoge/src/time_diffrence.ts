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



// 「Backup」
// import { injectable } from 'tsyringe';
// import { CognitoSessionsRepository } from '../../repository/cognitoSessionsRepository';

// export class CheckSkipService {
//   readonly #congnitoRepository: CognitoSessionsRepository;

//   // チェック判定
//   isSkip: boolean;

//   // 現在日時
//   readonly now: Date;

//   readonly nowms: number;

//   readonly nowmm: number;

//   // 指定日時
//   readonly set;

//   readonly setms: number;

//   readonly setmm: number;

//   // ミリ秒=>分へ
//   readonly minutes: number;

//   // 差分=現在-指定
//   readonly difference: number;

//   constructor() {
//     // this.#congnitoRepository = congnitoRepository;
//     this.isSkip = false;
//     this.now = new Date();
//     this.nowms = this.now.getTime();
//     this.set = this.#congnitoRepository.getRecordFromUserUuId(uuid);
//     this.setms = this.set.getTime();
//     this.minutes = 1000 * 60;
//     this.nowmm = this.nowms / this.minutes;
//     this.setmm = this.setms / this.minutes;
//     this.difference = this.nowmm - this.setmm;
//   }

//   skipCheck() {
//     // 30分以内であればtrue
//     if (this.difference < 30) {
//       this.isSkip = true;
//     }
//     // 30分以上であればfalse
//     if (this.difference >= 30) {
//       this.isSkip = false;
//     }
//     return this.isSkip;
//   }
// }
// export const checkSkipService = new CheckSkipService();
// checkSkipService.skipCheck();


// BP 2020/07/27
// import { injectable } from 'tsyringe';
// import { CognitoSessionsRecord, CognitoSessionsRepository } from '../../repository/cognitoSessionsRepository';

// import { UserUuid } from '../../../domain/model/user/userUuid';
// import { UserAuthDate } from '../../../domain/model/user/userAuthDate';
// import { Transactional } from '../../../framework/decorator/service/transactional';

// @injectable()
// export class CheckSkipService {
//   readonly #congnitoRepository: CognitoSessionsRepository;

//   // チェック判定
//   isSkip: boolean;

//   // 現在日時
//   readonly now: Date;

//   readonly nowms: number;

//   readonly nowmm: number;

//   // 指定日時
//   readonly set: Date;

//   readonly setms: number;

//   readonly setmm: number;

//   // ミリ秒=>分へ
//   readonly minutes: number;

//   // 差分=現在-指定
//   readonly difference: number;

//   constructor(congnitoRepository: CognitoSessionsRepository) {
//     this.#congnitoRepository = congnitoRepository;
//     this.isSkip = false;
//     this.now = new Date();
//     this.nowms = this.now.getTime();
//     // this.set = this.#congnitoRepository.getRecordFromUserUuId(uuid);
//     this.setms = this.set.getTime();
//     this.minutes = 1000 * 60;
//     this.nowmm = this.nowms / this.minutes;
//     this.setmm = this.setms / this.minutes;
//     this.difference = this.nowmm - this.setmm;
//   }

//   @Transactional(true)
//   async check(uuid: UserUuid): Promise<GetResult> {
//     const records = await this.#congnitoRepository.getRecordFromUserUuId(uuid);
//     const set = new Date(records.map);
//     if (this.difference < 30) {
//       this.isSkip = true;
//     }
//     // 30分以上であればfalse
//     if (this.difference >= 30) {
//       this.isSkip = false;
//     }
//     return this.isSkip;
//   }

//   skipCheck() {
//     // 30分以内であればtrue
//     if (this.difference < 30) {
//       this.isSkip = true;
//     }
//     // 30分以上であればfalse
//     if (this.difference >= 30) {
//       this.isSkip = false;
//     }
//     return this.isSkip;
//   }
// }

// export const checkSkipService = new CheckSkipService();
// checkSkipService.skipCheck();

// export interface GetResult {
//   /** uuid */
//   uuid: UserUuid;
//   /** 認証日時 */
//   authAt: UserAuthDate;
// }

// --------------------------------------------------------------

// // BP 2020/07/27
// import { injectable } from 'tsyringe';
// import { UserUuid } from '../../../domain/model/user/userUuid';
// import { CognitoSessionsRepository } from '../../repository/cognitoSessionsRepository';
// import { Transactional } from '../../../framework/decorator/service/transactional';

// @injectable()
// export class CheckSkipService {
//   #congnitoRepository: CognitoSessionsRepository;

//   constructor(congnitoRepository: CognitoSessionsRepository) {
//     this.#congnitoRepository = congnitoRepository;
//   }

//   @Transactional(true)
//   async skipCheck(uuid: UserUuid): Promise<boolean> {
//     // true:skipする / false:skipしない
//     let isSkip = false;
//     // // 1分＝1000ミリ秒×60秒
//     const minutes = 1000 * 60;
//     // 現在日時(ミリ秒)
//     const today = new Date().getTime();
//     // ミリ秒を分へ変換
//     const todaymm = today / minutes;
//     // 認証時間
//     const auth = await this.#congnitoRepository.getRecordFromUserUuId(uuid);
//     // 認証時間（ミリ秒）
//     const authms = auth.authAt.date.getTime();
//     // ミリ秒を分へ変換
//     const authmm = authms / minutes;
//     // 現在日時と認証時間の差分
//     const difference = todaymm - authmm;

//     // 認証時間が30分以内であれば[isSkip]にtrueを返す
//     if (difference < 30) {
//       isSkip = true;
//     }
//     return isSkip;
//   }
// }

// // let hoge: CheckSkipService;
// const checkSkipService = new CheckSkipService(this.uuid);
// checkSkipService.skipCheck(this.uuid);


// --------------------------------------------------------------

// import { injectable } from 'tsyringe';

// @injectable()
// export class CheckSkipService {
//   // 1分＝1000ミリ秒×60秒
//   minutes: number;

//   // 現在日時
//   today: Date;

//   // ミリ秒
//   todayms: number;

//   // ミリ秒を分へ変換
//   todaymm: number;

//   // 認証時間
//   auth: Date;

//   // ミリ秒
//   authms: number;

//   // ミリ秒を分へ変換
//   authmm: number;

//   // 現在日時
//   difference: number;

//   // constructor(congnitoRepository: CognitoSessionsRepository) {
//   constructor() {
//     // this.#congnitoRepository = congnitoRepository;

//     // this.isSkip = false;

//     this.minutes = 1000 * 60;

//     this.today = new Date();

//     this.todayms = this.today.getTime();

//     this.todaymm = this.todayms / this.minutes;

//     this.auth = new Date(2020, 6, 27, 10, 45);

//     this.authms = this.auth.getTime();

//     this.authmm = this.authms / this.minutes;

//     this.difference = this.todaymm - this.authmm;
//   }

//   async skipCheck(): Promise<boolean> {
//     let isSkip = false;
//     if (this.difference < 30) {
//       isSkip = true;
//       // return isSkip;
//     }
//     // if (this.difference >= 30) {
//     //   return isSkip;
//     // }
//     return isSkip;
//   }
// }

// // let hoge: CheckSkipService;
// const checkSkipService = new CheckSkipService();
// checkSkipService.skipCheck();

// ------------------------------------------------------------------------------------------

// import { injectable } from 'tsyringe';
// import { CognitoSessionsRepository } from '../../repository/cognitoSessionsRepository';
// import { Transactional } from '../../../framework/decorator/service/transactional';
// import { UserUuid } from '../../../domain/model/user/userUuid';

// @injectable()
// export class CheckSkipService {
//   readonly #congnitoRepository: CognitoSessionsRepository;

//   constructor(congnitoRepository: CognitoSessionsRepository) {
//     this.#congnitoRepository = congnitoRepository;
//   }

//   /**
//    * @param authAt 認証日時
//    */
//   @Transactional(false)
//   async authCodeLogin(uuid: UserUuid): Promise<void> {
//     // true: skipする false: skipしない
//     let isSkip: boolean;

//     const skipCheck = (difference): boolean => {
//       // 30分以内であればtrue
//       if (difference < 30) {
//         isSkip = true;
//       }
//       // 30分以上であればfalse
//       if (difference >= 30) {
//         isSkip = false;
//       }
//       return isSkip;
//     };

//     // function skipCheck(difference): boolean {
//     //   // 30分以内であればtrue
//     //   if (difference < 30) {
//     //     isSkip = true;
//     //   }
//     //   // 30分以上であればfalse
//     //   if (difference >= 30) {
//     //     isSkip = false;
//     //   }
//     //   return isSkip;
//     // }

//     // 現在日時取得
//     const now = new Date();
//     const nowms = now.getTime();
//     // 認証日時取得
//     const record = await this.#congnitoRepository.getRecordFromUserUuId(uuid);
//     // const aaa = new Date(cognitoRecord);
//     const authTimems = record.authAt.date.getTime();

//     // 1分＝1000ミリ秒×60秒
//     const minutes = 1000 * 60;
//     // [分]に変換
//     const nowmm = nowms / minutes;
//     const authTimemm = authTimems / minutes;

//     // [分]の差分 現在日時-認証日時
//     const difference = nowmm - authTimemm;

//   }
// }
// CheckSkipService.skipCheck(difference);
