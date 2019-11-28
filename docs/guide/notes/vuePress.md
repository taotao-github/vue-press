# vuePress使用教程
## VuePress是什么？
vuePress是以vue为驱动的静态网页生成器，是一个由Vue、Vue-Router和webpack驱动的单页面应用。VuePress中，你可以使用Markdown编写文档，然后生成网页，每一个由VuePress生成的页面都带有预渲染好的HTML，也因此具有非常好的加载性能和搜索引擎优化。同时，一旦页面被加载，Vue将接管这些静态内容，并将其转换成一个完整的单页应用，其他的页面则会只在用户浏览到的时候才按需加载。

## VuePress特性
- 为技术文档而优化的内置markdown拓展
- 在我markdown文件中使用vue组件的能力
- vue驱动的自定义主题系统
- 自动生成service worker（支持pwa）
- Goolge Analytics
- 多语言支持
- 响应式布局

## VuePress 搭建
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
> config.js是vuepress的配置文件，内容如下：

<<<@/docs/.vuepress/config.js

> 相应的nav.js 和 sidebar.js 内容如下：

<<<@/docs/.vuepress/nav.js
<<<@/docs/.vuepress/sidebar.js


7. 目录结构如下
```
|-- vue-press',
    |-- deploy.sh', // 自动部署脚本（注意使用git bash执行或者双击执行）
    |-- package.json',
    |-- docs',
        |-- README.md', // 首页md文件
        |-- .vuepress',
        |   |-- config.js', // 配置文件
        |   |-- nav.js', // 导航配置文件
        |   |-- sidebar.js', // 侧边栏配置文件
        |   |-- components', // md中使用vue组件
        |   |   |-- btn.vue',
        |   |   |-- h-btn.vue',
        |   |-- public', // 通用文件，css、图片等
        |       |-- css',
        |       |   |-- style.css',
        |       |-- images',
        |           |-- logo.jpg',
        |-- front-base', // 每个单独的要点
        |   |-- ES6',
        |       |-- README.md',
        |       |-- sidebar.js',
        |       |-- notes',
        |           |-- es6重要知识点.md',
        |-- guide',
            |-- README.md',
            |-- sidebar.js',
            |-- notes',
                |-- vuePress.md'
```

8. 执行npm run docs:dev即可预览自己的blog内容

## vuePress的部署
将vuepress部署在github pages上。
1. 首先创建一个远程库（vue-press）用来存储blog的源代码（文件）。
2. 然后在创建一个远程库（blog）用于展示vue-press生成的静态网页。
3. 总结思路：就是在vue-press库上编写源文件，然后使用npm run docs:build生成的dist就是我们要展示的blog内容。我们使用blog库进行展示。

## markdown上使用vue组件
<br/>
<btn/>

<<<@/docs/.vuepress/components/btn.vue

>导入代码段(这里官网有点坑)

1. 你可以通过下述的语法导入已经存在的文件中的代码段：
```
<<< @/filepath
```
然后我就照做了，页面显示的是字符串。

然后我以为是路径的问题，改了半天也没用，后来发现，是官方例子有问题。

正确如下：没错！不要中间的空格！
```js
<<<@/docs/.vuepress/components/btn.vue
```