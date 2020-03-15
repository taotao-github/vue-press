# 常用工具函数

## 获取两个数组的交集
``` js
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的交集, 两个数组的元素为数值或字符串
 */
export const getIntersection = (arr1, arr2) => {
  let len = Math.min(arr1.length, arr2.length)
  let i = -1
  let res = []
  while (++i < len) {
    const item = arr2[i]
    if (arr1.indexOf(item) > -1) res.push(item)
  }
  return res
}
```

## 获取两个数组的并集
```js
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @description 得到两个数组的并集, 两个数组的元素为数值或字符串
 */
export const getUnion = (arr1, arr2) => {
  return Array.from(new Set([...arr1, ...arr2]))
}
```

## 判断目标数组是否包含另一个数组中的元素
```js
/**
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
export const hasOneOf = (targetArr, arr) => {
  return targetArr.some(_ => arr.indexOf(_) > -1)
}
```

## 日期时间的格式化
```js
/**
 * @param {String} target 输出格式
 * @param {Date | String} date 要格式的时间
 * @description 日期时间的格式化
 */
export const dateFormat = function (format, date) {
    let ret;
    let fmtDate = new Date(date)
    const opt = {
        "y+": fmtDate.getFullYear().toString(), // 年
        "m+": (fmtDate.getMonth() + 1).toString(), // 月
        "d+": fmtDate.getDate().toString(), // 日
        "H+": fmtDate.getHours().toString(), // 时
        "M+": fmtDate.getMinutes().toString(), // 分
        "S+": fmtDate.getSeconds().toString() // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(format);
        if (ret) {
            format = format.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return format;
}
```