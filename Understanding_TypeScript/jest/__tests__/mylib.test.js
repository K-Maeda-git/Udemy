/**
 * テストの実行「npx jest」
 * カバレッジの出力「npx jest --coverage」
 */

import { add } from "../src/mylib";
import { timer } from "../src/mylib";
import { loop } from "../src/mylib";
import { clamp } from "../src/mylib";

// テストファイルひとつひとつのことを「テストスイート」と呼びます。
// 個々のテストのことを「テストケース」と呼びます。
// テストケースで用いるtoBeの部分を、jestでは「マッチャー（Matcher）」と呼びます。
// ひとつのテストスイートの中に複数のdescribeがあってもよい
describe("add", () => {
  test("1 + 2", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("2 + 2", () => {
    expect(add(2, 2)).toBe(4);
  });

  test("-1 + 2", () => {
    expect(add(-1, 2)).toBe(1);
  });
});

// toBeCloseToはある程度の誤差を許容するマッチャー
describe("add", () => {
  test("0.1 + 0.2", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

// notマッチャーを挟むことで、任意のマッチャーの意味を逆転できます。
describe("add", () => {
  test("0.1 + 0.2", () => {
    expect(add(0.1, 0.2)).not.toBeCloseTo(5);
  });
});

// resolvesマッチャーはPromiseの値を自動的に展開してくれます。
describe("resolvesマッチャー", () => {
  test("async timer", () => {
    expect(timer(1000)).resolves.toBe("success");
  });
});

// コールバック関数の呼び出し回数、呼び出された時の引数を検証することができます。
describe("コールバック関数の呼び出し回数、呼び出された時の引数を検証", () => {
  test("loop", () => {
    const loopNum = 5;
    const mock = jest.fn(); // モック関数を作る
    loop(mock, loopNum); // mockを渡して実行する

    // mock関数の呼び出しについて検証する
    expect(mock).toBeCalledTimes(loopNum); // 5回呼び出されているはず
    expect(mock).nthCalledWith(1, 0); // 1回目はmock(0)で呼び出される
    expect(mock).nthCalledWith(2, 1); // 2回目はmock(1)で呼び出される
  });
});

// value < min
// value = min
// min < value < max
// value = max
// value > max
describe("clamp", () => {
  test("value < min", () => {
    expect(clamp(0, 2, 5)).toBe(2);
  });

  test("value = min", () => {
    expect(clamp(2, 2, 5)).toBe(2);
  });

  test("min < value < max", () => {
    expect(clamp(4, 2, 5)).toBe(4);
  });

  test("value = max", () => {
    expect(clamp(5, 2, 5)).toBe(5);
  });

  test("value > max", () => {
    expect(clamp(6, 2, 5)).toBe(5);
  });
});
