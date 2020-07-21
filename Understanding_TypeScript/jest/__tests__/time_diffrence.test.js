import { skipCheck } from "../time_diffrence";

describe("skipCheckの戻り値", () => {
  // test("戻り値がtrueの場合", () => {
  //   expect(skipCheck()).toBeTruthy();
  // });
  test("戻り値がfalseの場合", () => {
    expect(skipCheck()).toBeFalsy();
  });
});
