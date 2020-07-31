import { ContractInfoBillMailRequest } from '../src/hoge';

describe('class : ContractInfoBillMailRequest _ method : constructor', () => {
  test('オブジェクトが生成されること', () => {
    const obj = new ContractInfoBillMailRequest('1');
    expect(obj.request).toBe('1');
  });
});

describe('class : ContractInfoBillMailRequest _ method : toBoolean', () => {
  test('1を設定した場合、trueを返却すること。', () => {
    const obj = new ContractInfoBillMailRequest('1');
    expect(obj.toBoolean()).toBe(true);
  });

  test('0を設定した場合、falseを返却すること。', () => {
    const obj = new ContractInfoBillMailRequest('0');
    expect(obj.toBoolean()).toBe(false);
  });

  test('0,1以外を設定した場合、falseを返却すること。', () => {
    const obj = new ContractInfoBillMailRequest('2');
    expect(obj.toBoolean()).toBe(false);
  });
});
