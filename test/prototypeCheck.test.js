/**
 * @jest-environment jsdom
 */
import { isString } from '../src/index.js';

describe('测试prototypeCheck模块', () => {
  test('isString', () => {
    expect(isString('a')).toBe(true);
  });
});
