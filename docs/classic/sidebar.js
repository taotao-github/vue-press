module.exports = [
    {
        title: '经典文章',
        collapsable: false,
        path: '/classic/',
        children: [
            {
                title: "css经典文章",
                collapsable: true,
                children: [
                    { title: "min()、max()和clamp()介绍与使用", path: "notes/one" }
                ],
            },

            {
                title: "vue-cli3项目配置",
                collapsable: false,
                children: [
                    { title: "vue中配置使用svg", path: "notes/vue中配置使用svg" }
                ],
            }
        ]
    }
]