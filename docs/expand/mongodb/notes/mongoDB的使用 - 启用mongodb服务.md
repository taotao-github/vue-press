# 启用 mongodb 服务

1. 新建一个存放数据库的文件夹，注意：不能有中文和空格，建议不要放在 c 盘
2. 启动 mongodb 服务
```bash
#服务端：mongod  开启数据库服务
mongod --dbpath e:\\mongodbs  
```
如下：开启 mongodb 服务

<img :src="$withBase('/images/mongodb/开启mongodb服务.jpg')" alt="开启 mongodb 服务">

::: tip 提示
--dbpath 后面跟着的路径就是选择数据库文档所在的文件夹。 也就是说，mongoDB 中，真的有物理文件，对应一个个数据库。U 盘可以拷走。
:::

::: danger 注意
一定要保持，开启这个 CMD （启动服务的 cmd）不能动了，不能关，不能 ctrl+c。 一旦这个 cmd 有问题了，数据 库就自动关闭了。每次使用必须先使用 mongod –dbpath 目录 开启服务
::: 

3. 新打开一个 cmd 窗口（客户端）。使用 mongo 命令连接服务端

<img :src="$withBase('/images/mongodb/使用mongo命令连接服务端.jpg')" alt="使用mongo 命令连接服务端">
