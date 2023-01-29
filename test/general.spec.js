import { isEmail, isMobile, isTelPhone, isCreditCode } from '../src/index.js';

describe('测试general模块', () => {
  test('isEmail', () => {
    expect(isEmail('123123@163.com')).toBe(true);
  });
  test('isMobile', () => {
    expect(isMobile('17612341323')).toBe(true);
  });
  test('isTelPhone', () => {
    expect(isTelPhone('0580-44734020')).toBe(true);
  });
  test('isCreditCode', () => {
    expect(isCreditCode('91330104MA27XF5H9B')).toBe(true);
  });
});
