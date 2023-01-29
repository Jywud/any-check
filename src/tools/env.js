/**
 * 验证是否微信环境
 * @param
 * @returns {boolean}
 */
export const isWX = () => {
  return navigator.userAgent.toLowerCase().indexOf('micromessenger') >= 0;
};

/**
 * 验证是否支付宝环境
 * @param
 * @returns {boolean}
 */
export const isALIPAY = () => {
  return navigator.userAgent.toLowerCase().indexOf('alipayclient') >= 0;
};

/**
 * 验证是否钉钉环境
 * @param
 * @returns {boolean}
 */
export const isDINGDING = () => {
  return navigator.userAgent.toLowerCase().indexOf('dingtalk') >= 0;
};

/**
 * 验证是否浙里办环境
 * @param
 * @returns {boolean}
 */
export const isZLB = () => {
  return navigator.userAgent.toLowerCase().indexOf('@zlb') >= 0;
};

/**
 * 验证是否浙政钉环境
 * @param
 * @returns {boolean}
 */
export const isTaurusApp = () => {
  return navigator.userAgent.toLowerCase().indexOf('taurusapp') >= 0;
};

/**
 * 验证是否是移动端
 * @param
 * @returns {boolean}
 */
export const isDeviceMobile = () => {
  return /android|webos|iphone|ipod|balckberry/i.test(navigator.userAgent.toLowerCase());
};

/**
 * 验证是否是QQ浏览器
 * @param
 * @returns {boolean}
 */
export const isQQBrowser = () => {
  return !!navigator.userAgent.toLowerCase().match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i);
};

/**
 * 验证是否IE浏览器
 * @param
 * @returns {boolean}
 */
export const isIE = () => {
  const compare = s => navigator.userAgent.toLowerCase().indexOf(s) >= 0;
  const ie11 = (() => 'ActiveXObject' in window)();
  return compare('MSIE') || ie11;
};

/**
 * 验证是否是爬虫
 * @param
 * @returns {boolean}
 */
export const isSpider = () => {
  return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(
    navigator.userAgent.toLowerCase()
  );
};

/**
 * 验证是否安卓设备
 * @param
 * @returns {boolean}
 */
export const isAndroid = () => {
  return navigator.userAgent.toLowerCase().indexOf('Android') > -1 || u.indexOf('Adr') > -1;
};

/**
 * 验证是否苹果设备
 * @param
 * @returns {boolean}
 */
export const isIOS = () => {
  return !!navigator.userAgent.toLowerCase().match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
};
