/**
 * @jest-environment jsdom
 */
import { haveLetter, haveNumber, strHaveStr } from '../src/index.js';

describe('测试have模块', () => {
  test('haveLetter', () => {
    expect(haveLetter('123')).toBe(false);
  });
  test('haveNumber', () => {
    expect(haveNumber('123')).toBe(true);
  });
  test('strHaveStr', () => {
    expect(strHaveStr('123ab', '23ab')).toBe(true);
  });
});
