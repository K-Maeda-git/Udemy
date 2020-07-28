import { CheckSkipService } from "../time_diffrence";

// const checkSkipService = new CheckSkipService();

describe("skipCheckの戻り値", () => {
  // test("戻り値がtrueの場合", () => {
  //   expect(checkSkipService.skipCheck()).toBeTruthy();
  // });
  test("戻り値がfalseの場合", () => {
    expect(CheckSkipService()).toBeFalsy();
  });
});
