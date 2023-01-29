/**
 * 验证邮箱
 * @param val
 * @returns {boolean}
 */
export const isEmail = val => {
  return /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(val);
};

/**
 * 验证手机号码
 * @param val
 * @returns {boolean}
 */
export const isMobile = val => {
  return /^1[23456789]\d{9}$/.test(val);
};

/**
 * 验证固定电话
 * @param val
 * @returns {boolean}
 */
export const isTelPhone = val => {
  return /^(0\d{2,3}(-|\s|)\d{7,8})$/.test(val);
};

/**
 * 验证邮政编码
 * @param val
 * @returns {boolean}
 */
export const isPostal = val => {
  return /[1-9]\d{5}(?!\d)/.test(val);
};

/**
 * 验证统一社会信用代码
 * @param val
 * @returns {boolean}
 */
export const isCreditCode = val => {
  return /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/.test(val);
};

// /**
//  * 验证为数字，可以是小数
//  * @param val
//  * @returns {boolean}
//  */
// export const isNumber = val => {
//   return /^[0-9]+([.]{1}[0-9]+){0,1}$/.test(val);
// };

/**
 * 验证是否是数字
 * @param val
 * @returns {boolean}
 */
export const isDecimal = val => {
  if (val === null || val === undefined || val === '' || Math.abs(val) === Infinity) return false;
  return !isNaN(parseFloat(val - 0));
};

/**
 * 验证是否是QQ号
 * @param val
 * @returns {boolean}
 */
export const isQQ = val => {
  return /^[1-9][0-9]{4,10}$/.test(val);
};

/**
 * 验证是否是金额(小数点2位)
 * @param val
 * @returns {boolean}
 */
export const isMoney = val => {
  return /^\d*(?:\.\d{0,2})?$/.test(val);
};

/**
 * 验证正整数
 * @param val
 * @returns {boolean}
 */
export const isPosInteger = num => {
  num = num - 0;
  return num !== 0 && /^[0-9]+$/.test(num);
};

/**
 * 验证字符串是否以数字开头
 * @param val
 * @returns {boolean}
 */
export const isStartWithNum = val => {
  return /^[1-9]/.test(val);
};

/**
 * 是否是身份证号码
 * @param val
 * @returns {boolean}
 */
export const isIDNumber = val => {
  return /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
    val
  );
};

/**
 * 验证是否链接
 * @param val
 * @returns {boolean}
 */
export const isUrl = val => {
  return /^(http|https|\/\/)\S*/.test(val);
};

/**
 * 验证参数是否为空
 * @param str
 * @returns {boolean}
 */
export const isNotEmpty = str => {
  if (str !== '' && str !== null && typeof str !== 'undefined') {
    return true;
  }
  return false;
};

/**
 * 验证对象是否为空对象
 * @param str
 * @returns {boolean}
 */
export const isEmptyObject = obj => {
  if (!obj) return false;
  for (let key in obj) return false;
  return true;
};

/**
 * 验证是否IP
 * @param val
 * @returns {boolean}
 */
export const isIP = val => {
  return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(val);
};

/**
 * 验证是否中文
 * @param val
 * @returns {boolean}
 */
export const isChinese = val => {
  return /^[\\u4E00-\\u9FA5]+$/.test(val);
};

/**
 * 验证是否英文
 * @param val
 * @returns {boolean}
 */
export const isEnglish = val => {
  return /^[a-zA-Z]+$/.test(val);
};

/**
 * 验证是否HTML标记
 * @param val
 * @returns {boolean}
 */
export const isHTML = val => {
  return /<("[^"]*"|'[^']*'|[^'">])*>/.test(val);
};

/**
 * 验证是否两个对象是否键值相同
 * @param a
 * @param b
 * @returns {boolean}
 */
export const isObjectEqual = (a, b) => {
  let aProps = Object.getOwnPropertyNames(a);
  let bProps = Object.getOwnPropertyNames(b);

  if (aProps.length !== bProps.length) {
    return false;
  }

  for (let i = 0; i < aProps.length; i++) {
    let propName = aProps[i];

    if (a[propName] !== b[propName]) {
      return false;
    }
  }
  return true;
};

/**
 * 验证是否sql攻击
 * @param sQuery
 * @returns {boolean}
 */
export const isSQLXss = sQuery => {
  const re = /select|update|delete|truncate|join|union|exec|insert|drop|count|script|<|>|'|"|=|;/gi;
  if (re.test(sQuery)) {
    return false;
  }
  return true;
};
