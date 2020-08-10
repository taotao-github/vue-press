# 基于element自定义组件

## 自定义多功能标题（my-title）

### 1. 组件效果

<element-my-title></element-my-title>

### 2. 组件功能
* 组件左侧显示自定义的标题。
* 组件右侧可通过配置btns属性，设置按钮组。
  * 按钮组中按钮配置基本一致，当设置某个按钮项设置"query: true"时，代表该按钮可以控制收缩插槽，插槽的内容可自定义，一般用于搜索。
  * 在该插槽中，本人自定义了一个专注于搜索的行内表单组件（my-query）。

### 3. 涉及组件

> my-title

<<<@/docs/.vuepress/components/element/components/my-title/index.vue
> my-query

<<<@/docs/.vuepress/components/element/components/my-query/index.vue

### 4. 使用组件
<<<@/docs/.vuepress/components/element/my-title.vue


## 自定义基础表格数据展示（my-table）
### 1. 组件效果
<!-- <element-my-table></element-my-table> -->


### 2. 组件功能
* 自定义基础表格，只是将表格和分页集成在一起。有些功能受到限制，如表格中1 代替为其他数据

### 3. 涉及组件
<<<@/docs/.vuepress/components/element/components/my-table/index.vue

### 4. 使用组件
<<<@/docs/.vuepress/components/element/my-table.vue