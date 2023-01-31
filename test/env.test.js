/**
 * @jest-environment jsdom
 */
import { isWX } from '../src/index.js';

describe('测试env模块', () => {
  test('isWX', () => {
    expect(isWX()).toBe(false);
  });
});
