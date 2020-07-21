/**
 * ▼参考サイト▼
 * https://sbfl.net/blog/2019/01/20/javascript-unittest/ 
 */
export function add(a, b) {
  return a + b;
}

// 指定時間が経過するとresolveされる非同期関数
export async function timer(timeMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("success!"), timeMs);
  });
}

// モック関数
export function loop(callback, loopNum) {
  for (let i = 0; i < loopNum; i++) {
    callback(i);
  }
}

// clamp関数はvalueをminからmaxの間に収める
//
// valueがminより小さいならminを返し、
// valueがmaxより大きいならmaxを返す
// minとmaxの間ならそのままのvalueを返す
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
