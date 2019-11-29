# mongodb
## mongodb 的介绍

>MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。他支持的数据结构非常松散，是类似 json 的 bson 格式，因此可以存储比较复杂的数据类型。Mongo 最大的特点是他支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。它的特点是高性能、易部署、易使用，存储数据非常方便。

## mongodb 的安装

官网：[https://www.mongodb.com/](https://www.mongodb.com/)

下载：[https://www.mongodb.com/download-center/community](https://www.mongodb.com/download-center/community)

<img :src="$withBase('/images/mongodb/mongoDB的安装.jpg')" alt="mongoDB的安装">

> 本人安装的是最新的 mongodb，下载安装后附带有官方的 MongoDB Compass Community，MongoDB Compass Community 提供的一个集创建数据库、管理集合和文档、运行临时查询、评估和优化查询、性能图表、构建地理查询等功能为一体的 MongoDB 可视化管理工具。如下：

<img :src="$withBase('/images/mongodb/MongoDB_Compass_Community.jpg')" alt="MongoDB Compass Community">

可视化具体使用操作参考：[https://blog.csdn.net/sunhuansheng/article/details/82707103](https://blog.csdn.net/sunhuansheng/article/details/82707103)

安装完成后配置环境变量：将安装目录放置在环境变量 path 中去。

<img :src="$withBase('/images/mongodb/mongodb配置环境变量.jpg')" alt="配置环境变量">

检测环境变量是否配置成功：

<img :src="$withBase('/images/mongodb/mongodb检测环境变量.jpg')" alt="检测环境变量">


连接远程的 mongodb 数据库  
```bash
    mongo 127.0.0.1:27017 + 回车
```
