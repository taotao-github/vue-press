# 模拟实现 Call 和 apply

:::tip 原理
1.不传入第一个参数，那么默认为 window

2.改变了 this 指向，让新的对象可以执行该函数。那么思路是可以变成给新的对象添加一个函数，然后在执行完以后删除
:::

<<<@/docs/.vuepress/public/js/call-apply.js