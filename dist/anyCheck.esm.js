var t=function(){return navigator.userAgent.toLowerCase().indexOf("micromessenger")>=0},e=function(){return navigator.userAgent.toLowerCase().indexOf("alipayclient")>=0},n=function(){return navigator.userAgent.toLowerCase().indexOf("dingtalk")>=0},r=function(){return navigator.userAgent.toLowerCase().indexOf("@zlb")>=0},o=function(){return navigator.userAgent.toLowerCase().indexOf("taurusapp")>=0},i=function(){return/android|webos|iphone|ipod|balckberry/i.test(navigator.userAgent.toLowerCase())},c=function(){return!!navigator.userAgent.toLowerCase().match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i)},a=function(){var t,e="ActiveXObject"in window;return t="MSIE",navigator.userAgent.toLowerCase().indexOf(t)>=0||e},s=function(){return/adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(navigator.userAgent.toLowerCase())},l=function(){return navigator.userAgent.toLowerCase().indexOf("Android")>-1||u.indexOf("Adr")>-1},f=function(){return!!navigator.userAgent.toLowerCase().match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},d=function(t){return/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/.test(t)},p=function(t){return/^1[23456789]\d{9}$/.test(t)},g=function(t){return/^(0\d{2,3}(-|\s|)\d{7,8})$/.test(t)},b=function(t){return/[1-9]\d{5}(?!\d)/.test(t)},O=function(t){return/^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/.test(t)},w=function(t){return null!=t&&""!==t&&Math.abs(t)!==1/0&&!isNaN(parseFloat(t-0))},y=function(t){return/^[1-9][0-9]{4,10}$/.test(t)},A=function(t){return/^\d*(?:\.\d{0,2})?$/.test(t)},j=function(t){return 0!==(t-=0)&&/^[0-9]+$/.test(t)},S=function(t){return/^[1-9]/.test(t)},v=function(t){return/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(t)},m=function(t){return/^(http|https|\/\/)\S*/.test(t)},x=function(t){return""!==t&&null!=t},C=function(t){if(!t)return!1;for(var e in t)return!1;return!0},$=function(t){return/((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(t)},L=function(t){return/^[\\u4E00-\\u9FA5]+$/.test(t)},h=function(t){return/^[a-zA-Z]+$/.test(t)},z=function(t){return/<("[^"]*"|'[^']*'|[^'">])*>/.test(t)},N=function(t,e){var n=Object.getOwnPropertyNames(t),r=Object.getOwnPropertyNames(e);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++){var i=n[o];if(t[i]!==e[i])return!1}return!0},q=function(t){return!/select|update|delete|truncate|join|union|exec|insert|drop|count|script|<|>|'|"|=|;/gi.test(t)},P=function(t){return"String"===Object.prototype.toString.call(t).slice(8,-1)},E=function(t){return"Number"===Object.prototype.toString.call(t).slice(8,-1)},U=function(t){return"Boolean"===Object.prototype.toString.call(t).slice(8,-1)},X=function(t){return"Function"===Object.prototype.toString.call(t).slice(8,-1)},M=function(t){return"Null"===Object.prototype.toString.call(t).slice(8,-1)},R=function(t){return"Undefined"===Object.prototype.toString.call(t).slice(8,-1)},Z=function(t){return"Object"===Object.prototype.toString.call(t).slice(8,-1)},k=function(t){return"Array"===Object.prototype.toString.call(t).slice(8,-1)},F=function(t){return"Date"===Object.prototype.toString.call(t).slice(8,-1)},H=function(t){return"RegExp"===Object.prototype.toString.call(t).slice(8,-1)},J=function(t){return"Error"===Object.prototype.toString.call(t).slice(8,-1)},Q=function(t){return"Symbol"===Object.prototype.toString.call(t).slice(8,-1)},T=function(t){return"Promise"===Object.prototype.toString.call(t).slice(8,-1)},W=function(t){return"Set"===Object.prototype.toString.call(t).slice(8,-1)},Y=function(t){return"Map"===Object.prototype.toString.call(t).slice(8,-1)},B=function(t){return/[a-z]/i.test(t+"")},D=function(t){return/\d/.test(t+"")},I=function(t,e){var n=new RegExp("^.*"+e+".*$");return!!t.match(n)};export{B as haveLetter,D as haveNumber,e as isALIPAY,l as isAndroid,k as isArray,U as isBoolean,L as isChinese,O as isCreditCode,n as isDINGDING,F as isDate,w as isDecimal,i as isDeviceMobile,d as isEmail,C as isEmptyObject,h as isEnglish,J as isError,X as isFunction,z as isHTML,v as isIDNumber,a as isIE,f as isIOS,$ as isIP,Y as isMap,p as isMobile,A as isMoney,x as isNotEmpty,M as isNull,E as isNumber,Z as isObject,N as isObjectEqual,j as isPosInteger,b as isPostal,T as isPromise,y as isQQ,c as isQQBrowser,H as isRegExp,q as isSQLXss,W as isSet,s as isSpider,S as isStartWithNum,P as isString,Q as isSymbol,o as isTaurusApp,g as isTelPhone,R as isUndefined,m as isUrl,t as isWX,r as isZLB,I as strHaveStr};