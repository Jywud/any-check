/**
 * 验证是否是字符串
 * @param
 * @returns {boolean}
 */
export const isString = val => {
  return Object.prototype.toString.call(val).slice(8, -1) === 'String';
};

/**
 * 验证是否是数字
 * @param
 * @returns {boolean}
 */
export const isNumber = val => {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Number';
};

/**
 * 验证是否是boolean
 * @param
 * @returns {boolean}
 */
export const isBoolean = val => {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Boolean';
};

/**
 * 验证是否是函数
 * @param
 * @returns {boolean}
 */
export const isFunction = val => {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Function';
};

/**
 * 验证是否是null
 * @param
 * @returns {boolean}
 */
export const isNull = val => {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Null';
};

/**
 * 验证是否是undefined
 * @param
 * @returns {boolean}
 */
export const isUndefined = val => {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Undefined';
};

/**
 * 验证是否是对象
 * @param
 * @returns {boolean}
 */
export const isObject = val => {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Object';
};

/**
 * 验证是否是数组
 * @param
 * @returns {boolean}
 */
export const isArray = val => {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Array';
};

/**
 * 验证是否是日期
 * @param
 * @returns {boolean}
 */
export const isDate = val => {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Date';
};

/**
 * 验证是否是正则
 * @param
 * @returns {boolean}
 */
export const isRegExp = val => {
  return Object.prototype.toString.call(val).slice(8, -1) === 'RegExp';
};

/**
 * 验证是否是错误对象
 * @param
 * @returns {boolean}
 */
export const isError = val => {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Error';
};

/**
 * 验证是否是Symbol
 * @param
 * @returns {boolean}
 */
export const isSymbol = val => {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Symbol';
};

/**
 * 验证是否是Promise
 * @param
 * @returns {boolean}
 */
export const isPromise = val => {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Promise';
};

/**
 * 验证是否是Set类型
 * @param
 * @returns {boolean}
 */
export const isSet = val => {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Set';
};

/**
 * 验证是否是Map类型
 * @param
 * @returns {boolean}
 */
export const isMap = val => {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Map';
};
