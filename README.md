### any-check 介绍

##### 用于前端常见的数据校验

## 持续更新中！！！（Continuously update code！！！）

### 代码贡献规范

请查看 README_dev.md 文件

### 安装

```javascript
npm install any-check
```

### 使用例子

```javascript
// 局部导入
import { isEmail } from 'any-check';
isEmail('123123@163.com'); //true

// 导入所有
import * as anyCheck from 'any-check';
anyCheck.isEmail('123123@163.com'); //12,000.00
```

### 具体方法描述

##### 设备环境相关的方法

```javascript
import { XXX } from 'any-check';

isWX(); //验证是否微信环境
isALIPAY(); //验证是否支付宝环境
isDINGDING(); //验证是否钉钉环境
isZLB(); //验证是否浙里办环境
isTaurusApp(); //验证是否浙政钉环境
isDeviceMobile(); //验证是否是移动端
isQQBrowser(); //验证是否是QQ浏览器
isIE(); //验证是否IE浏览器
isSpider(); //验证是否是爬虫
isAndroid(); //验证是否安卓设备
isIOS(); //验证是否苹果设备
```

##### 通过原型判断数据的类型

```javascript
import { XXX } from 'any-check';

let val = '';
isString(val); //验证是否是字符串
isNumber(val); //验证是否是数字
isBoolean(val); //验证是否是boolean
isFunction(val); //验证是否是函数
isNull(val); //验证是否是null
isUndefined(val); //验证是否是undefined
isObject(val); //验证是否是对象
isArray(val); //验证是否是数组
isDate(val); //验证是否是日期
isRegExp(val); //验证是否是正则
isError(val); //验证是否是错误对象
isSymbol(val); //验证是否是Symbol
isPromise(val); //验证是否是Promise
isSet(val); //验证是否是Set类型
isMap(val); //验证是否是Map类型
```

##### 是否存在类的方法

```javascript
import { XXX } from 'any-check';

strHaveStr('abcd', 'bc'); //验证字符串中是否包含某个字符串
haveLetter('aaa'); //验证字符串中是否包含字母
haveNumber('abc123'); //验证字符串中是否包含数字
```

##### 常规方法

```javascript
import { XXX } from 'any-check';

let val = '';
isEmail(val); //验证邮箱地址
isMobile(val); //验证手机号码
isTelPhone(val); //验证固定电话
isPostal(val); //验证邮政编码
isCreditCode(val); //验证统一社会信用代码
isDecimal(val); //验证是否是数字
isQQ(val); //验证是否是QQ号
isMoney(val); //验证是否是金额(小数点2位)
isPosInteger(val); //验证正整数
isStartWithNum(val); //验证字符串是否以数字开头
isIDNumber(val); //是否是身份证号码
isUrl(val); //验证是否链接
isNotEmpty(val); //验证参数是否为空
isEmptyObject(val); //验证对象是否为空对象
isIP(val); //验证是否IP
isChinese(val); //验证是否中文
isEnglish(val); //验证是否英文
isHTML(val); //验证是否HTML标记
isObjectEqual({ a: 1 }, { a: 1 }); //验证是否两个对象是否键值相同
isSQLXss(val); //验证是否sql攻击
```

## 贡献者

<!-- readme: collaborators,contributors -start -->
<table>
<tr>
    <td align="center">
        <a href="https://github.com/Jywud">
            <img src="https://avatars.githubusercontent.com/u/18544133?v=4" width="100;" alt="Jywud"/>
            <br />
            <sub><b>大鱼</b></sub>
        </a>
    </td></tr>
</table>
<!-- readme: collaborators,contributors -end -->
