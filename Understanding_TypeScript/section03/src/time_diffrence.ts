//現在日時取得
const now = new Date();
const now_ms = now.getTime();
// セットされた日時2020/07/1711:00
const set = new Date(2020, 6, 17, 11, 40);
const set_ms = set.getTime();

//1分＝1000ミリ秒×60秒
const minutes = 1000 * 60;
//現在日時のミリ秒を「分」に換算する
const now_mm = now_ms / minutes;
const set_mm = set_ms / minutes;

/**
 * @param difference [分]の差分
 */
const difference = now_mm - set_mm;
console.log(difference);
let isSkip: boolean;
// const cognitoRecord = await this.#congnitoRepository.getRecordFromUserAuthDate(authAt);
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