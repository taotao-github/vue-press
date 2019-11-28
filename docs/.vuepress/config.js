module.exports = {
    title: 'Tao\'s blog',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/images/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/blog/', // 这是部署到github相关的配置 https://github.com/taotao-github/taotao.github.io
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      nav: require('./nav'),
      sidebar: require('./sidebar'), // 侧边栏配置
      sidebarDepth: 2, // 侧边栏显示2级
    }
  };