# 前端树实现
## 通过指定数据格式生成动态树
### 使用vue实现动态树
:::tip 原理
使用毗邻组件实现无限级tree（两子组件相互调用实现ul li之间的嵌套）
:::
**效果**
<dy-tree/>
**item-child.vue**

<<<@/docs/.vuepress/components/item-child.vue

**item-parent.vue**

<<<@/docs/.vuepress/components/item-parent.vue

**dy-tree.vue**

<<<@/docs/.vuepress/components/dy-tree.vue

### 原生js实现tree的生成和筛选
> jquery 实现tree展开关闭

 <iframe :src="$withBase('/html/jqueryTree.html')"></iframe>

 <<<@/docs/.vuepress/public/html/jqueryTree.html

 ## 将parentId和id形式的数据转为带children的数据