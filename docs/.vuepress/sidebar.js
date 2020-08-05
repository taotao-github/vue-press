module.exports = { // 侧边栏配置 sidebar.js
    // 指南
    '/guide/': require('../guide/sidebar'),

    // 拓展
    '/expand/git/': require('../expand/git/sidebar'),
    '/expand/mongodb/': require('../expand/mongodb/sidebar'),
    '/expand/mysql/': require('../expand/mysql/sidebar'),
    '/expand/mini-program/': require('../expand/mini-program/sidebar'),

    // 前端基础
    '/front-base/ES6/': require('../front-base/ES6/sidebar'),
    '/front-base/html/': require('../front-base/html/sidebar'),
    '/front-base/javascript核心技术开发/': require('../front-base/javascript核心技术开发/sidebar'),
    '/front-base/webpack/': require('../front-base/webpack/sidebar'),

    // 后端基础
    '/back-base/java/': require('../back-base/java/sidebar'),

    // 算法题库
    '/algorithm/': require('../algorithm/sidebar'),
    // 经典文章
    '/classic/': require('../classic/sidebar'),

    // 前端UI
    '/front-ui/element/': require('../front-ui/element/sidebar'), // element
    '/front-ui/iview/': require('../front-ui/iview/sidebar'), // iview
    // 高级组件
    '/my-components/': require('../my-components/sidebar')
}   