/**
 * 验证字符串中是否包含字母
 * @param str
 * @returns {boolean}
 */
export const haveLetter = str => {
  return /[a-z]/i.test(str + '');
};

/**
 * 验证字符串中是否包含数字
 * @param str
 * @returns {boolean}
 */
export const haveNumber = str => {
  return /\d/.test(str + '');
};

/**
 * 验证字符串中是否包含某个字符串
 * @param str 源字符串
 * @param regStr 查找字符串
 * @returns {boolean}
 */
export const strHaveStr = (str, regStr) => {
  var reg = new RegExp('^.*' + regStr + '.*$');
  if (str.match(reg)) return true;
  return false;
};
