# VuePress是什么？
vuePress是以vue为驱动的静态网页生成器，是一个由Vue、Vue-Router和webpack驱动的单页面应用。VuePress中，你可以使用Markdown编写文档，然后生成网页，每一个由VuePress生成的页面都带有预渲染好的HTML，也因此具有非常好的加载性能和搜索引擎优化。同时，一旦页面被加载，Vue将接管这些静态内容，并将其转换成一个完整的单页应用，其他的页面则会只在用户浏览到的时候才按需加载。

# VuePress特性
- 为技术文档而优化的内置markdown拓展
- 在我markdown文件中使用vue组件的能力
- vue驱动的自定义主题系统
- 自动生成service worker（支持pwa）
- Goolge Analytics
- 多语言支持
- 响应式布局

# VuePress 搭建
1. 安装Vuepress
```bash
    npm install -g vuepress # npm 版本8以上 或者：yarn glodbal add vuepress
```

2. 创建项目目录
```bash
    mkdir projectDir
    cd project
```

3. 初始化项目
``` bash
    npm init -y #或者：yarn init -y
```

4. 在projectDir 项目目录中创建docs目录，主要放置.vuepres和md类型文章
```bash
    mkdir docs
```

5. 设置package.json文件
```json
    {
    "scripts": {
        "docs:dev": "vuepress dev docs",
        "docs:build": "vuepress build docs"
        }
    }
```
6. 创建.vuepress目录并在目录中创建config.js文件。
```bash
    cd .vuepress
    touch config.js
```

### 按钮
<br/>

<btn/>

<<<@/docs/.vuepress/components/btn.vue


### 导入代码段
这里官网有点坑

>你可以通过下述的语法导入已经存在的文件中的代码段：
```
<<< @/filepath
```
然后我就照做了，页面显示的是字符串。

然后我以为是路径的问题，改了半天也没用，后来发现，是官方例子有问题。

正确如下：没错！不要中间的空格！
```js
<<<@/docs/.vuepress/components/btn.vue
```