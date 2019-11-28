module.exports = {
    title: 'Tao\'s blog', //标题（左上角）
    description: '我的个人网站', // 描述
    head: [ // 注入到当前页面的 HTML <head> 中的标签，可以添加css、js等文件，跟h5头部一样
      ['link', { rel: 'icon', href: '/images/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
      ['link', { rel: "stylesheet", href: '/css/style.css' }], // 添加一个修改默认主题的css样式文件
    ],
    base: '/blog/', // 这是部署到github相关的配置 https://github.com/taotao-github.github.io/blog
    markdown: {
      lineNumbers: true // 代码是否显示行号
    },
    themeConfig: {
      nav: require('./nav'), // 导航栏配置 (为了好维护，单独写在一个配置文件)
      sidebar: require('./sidebar'), // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
    }
    // ... 还有更多配置
  };