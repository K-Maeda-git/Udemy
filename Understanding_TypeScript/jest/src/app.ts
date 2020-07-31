export class CheckSkipService {
  skipCheck(): boolean {
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
    if (difference > 30) {
      isSkip;
    }
    return isSkip;
  }
}

// let hoge: CheckSkipService;
const checkSkipService = new CheckSkipService();
console.log(checkSkipService.skipCheck());