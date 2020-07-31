const { CheckSkipService } = require("../src/app");

const checkSkipService = new CheckSkipService();
checkSkipService.skipCheck(new Date(2020, 6, 27, 17, 30));
checkSkipService.skipCheck(new Date());

describe("skipCheckの戻り値", () => {
  test("戻り値がtrueの場合", () => {
    expect(checkSkipService.skipCheck()).toBeTruthy();
  });
  test("戻り値がfalseの場合", () => {
    expect(checkSkipService.skipCheck()).toBeFalsy();
  });
});
// describe("skipCheckの戻り値", () => {
//     test("戻り値がtrueの場合", () => {
//       expect(checkSkipService.skipCheck()).toBeTruthy();
//     });
// test("戻り値がfalseの場合", () => {
//   expect(checkSkipService.skipCheck()).toBeFalsy();
// });
// });
