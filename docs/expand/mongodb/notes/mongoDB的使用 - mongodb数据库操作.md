# mongodb 数据库操作

## 1、查看所有数据库列表
```bash
> show dbs
admin    0.000GB
config   0.000GB
local    0.000GB>
```

## 2、创建数据库 || 使用数据库

```bash
> use student
switched to db student
>
```
此时数据并没有真正的创建成功，要想创建成功就必须在新建一个集合（表）并插入一条数据。

```bash
> use student
switched to db student
> db. student_info.insert({"name":"zhangsan","age":"23"})
WriteResult({ "nInserted" : 1 })  // 插入成功
>
```
**个人理解：db 代表你当前所使用的数据库（如上代表 student），student_info 是集合（其实就是表）。db.student_info  系统发现 student_info 是一个陌生的集合名字，所以就自动创建了集合。 insert 是插如语句。上面代码含义就是：**

> student 数据库中 student_info 表中插入{"name":"zhangsan","age":"23"}数据。

通过 show collections 可以查看当前数据库中的所有集合（表）

```bash
> show collections
student_info # 当前只有一个集合（表）
>
```
## 3、删除数据库 || 删除集合（表）

1.  删除数据库

```bash
> db. dropDatabase()  # 删除当前所在的数据库
{ "dropped" : "student", "ok" : 1 }   # 删除成功
>
```

2.  删除集合（表）

```bash
> db.student_info.drop()
true # 返回一个布尔值，true 表示删除表成功
>
```
## 4、插入（增加）数据

上面我们也知道了，通过 db.collectonsName.insert(…)向 collectonsName 集合插入数据，同时也成功的创建了数据库和 collectonsName 集合（表）。

## 5、查找数据

- 查询所有数据
  **db.collectionsName.find()**

  ```bash
  > db.student.find()
  { "_id" : ObjectId("5cafe456ed4fe960abcfa70d"), "name" :   "zhangshan", "age" : 23 }
  { "_id" : ObjectId("5cafe48eed4fe960abcfa70e"), "name"   : "zhangshan", "age" : 24, "sex" : "男" }
  { "_id" : ObjectId  ("5cafe4deed4fe960abcfa70f"), "name" : "lisi", "age" : 28, "sex" : "男" }
  { "_id" : ObjectId("5cafe4f5ed4fe960abcfa710"), "name" : "wangwu", "age" : 32, "sex" : "男  " }
  { "_id" : ObjectId("5cafe50aed4fe960abcfa711"), "name" : "wangjing", "age" :   24, "sex" : "女" }
  { "_id" : ObjectId("5cafe522ed4fe960abcfa712"), "name" :   "guanghui", "age" : 24, "sex" : "女" }
  { "_id" : ObjectId  ("5cafe533ed4fe960abcfa713"), "name" : "weien", "age" : 22, "sex" : "女" }
  { "_id" : ObjectId("5cafe549ed4fe960abcfa714"), "name" : "jianhao", "age" : 30,   "sex" : "男" }
  { "_id" : ObjectId("5cafe558ed4fe960abcfa715"), "name" :   "jiansheng", "age" : 34, "sex" : "男" }
  { "_id" : ObjectId  ("5cafe573ed4fe960abcfa716"), "name" : "xiaopao", "age" : 20, "sex" : "男" }
  >
  ```

- 查询去掉当前集合中某列（某个属性）重复数据后的数据
  **db.collectionsName.distinct(keyName)**
  ```bash
  > db.student.distinct("name")
  [
      "zhangshan",
      "lisi",
      "wangwu",
      "wangjing",
      "guanghui",
      "weien",
      "jianhao",
      "jiansheng",
      "xiaopao"
  ]
  >
  ```
- 查询 age=24 的记录
  ```bash
  > db.student.find({"age": 24})
  { "_id" : ObjectId("5cafe48eed4fe960abcfa70e"), "name" : "zhangshan", "age" : 24, "sex" : "男" }
  { "_id" : ObjectId("5cafe50aed4fe960abcfa711"), "name" : "wangjing", "age" : 24, "sex" : "女" }
  { "_id" : ObjectId("5cafe522ed4fe960abcfa712"), "name" : "guanghui", "age" : 24, "sex" : "女" }
  >
  ```

- 查询 age>24 的记录
  ```bash
  > db.student.find({"age": {$gt:24}})
  { "_id" : ObjectId("5cafe4deed4fe960abcfa70f"), "name" : "lisi", "age" : 28, "sex" : "男" }
  { "_id" : ObjectId("5cafe4f5ed4fe960abcfa710"), "name" : "wangwu", "age" : 32, "sex" : "男" }
  { "_id" : ObjectId("5cafe549ed4fe960abcfa714"), "name" : "jianhao", "age" : 30, "sex" : "男" }
  { "_id" : ObjectId("5cafe558ed4fe960abcfa715"), "name" : "jiansheng", "age" : 34, "sex" : "男" }
  >

  ```
- 查询 age<24 的记录
  ```bash
  > db.student.find({"age": {$lt:24}})
  { "_id" : ObjectId("5cafe456ed4fe960abcfa70d"), "name" : "zhangshan", "age" : 23 }
  { "_id" : ObjectId("5cafe533ed4fe960abcfa713"), "name" : "weien", "age" : 22, "sex" : "女" }
  { "_id" : ObjectId("5cafe573ed4fe960abcfa716"), "name" : "xiaopao", "age" : 20, "sex" : "男" }
  >
  ```

- 查询 age>=24 的记录
  ```bash
  > db.student.find({"age": {$gte:24}}) # e ==> equal 
  { "_id" : ObjectId("5cafe48eed4fe960abcfa70e"), "name" : "zhangshan", "age" : 24, "sex" : "男" }
  { "_id" : ObjectId("5cafe4deed4fe960abcfa70f"), "name" : "lisi", "age" : 28, "sex" : "男" }
  { "_id" : ObjectId("5cafe4f5ed4fe960abcfa710"), "name" : "wangwu", "age" : 32, "sex" : "男" }
  { "_id" : ObjectId("5cafe50aed4fe960abcfa711"), "name" : "wangjing", "age" : 24, "sex" : "女" }
  { "_id" : ObjectId("5cafe522ed4fe960abcfa712"), "name" : "guanghui", "age" : 24, "sex" : "女" }
  { "_id" : ObjectId("5cafe549ed4fe960abcfa714"), "name" : "jianhao", "age" : 30, "sex" : "男" }
  { "_id" : ObjectId("5cafe558ed4fe960abcfa715"), "name" : "jiansheng", "age" : 34, "sex" : "男" }
  >
  ```


- 查询 age<=24 的记录
  ```bash
  > db.student.find({"age": {$lte:24}})
  { "_id" : ObjectId("5cafe456ed4fe960abcfa70d"), "name" : "zhangshan", "age" : 23 }
  { "_id" : ObjectId("5cafe48eed4fe960abcfa70e"), "name" : "zhangshan", "age" : 24, "sex" : "男" }
  { "_id" : ObjectId("5cafe50aed4fe960abcfa711"), "name" : "wangjing", "age" : 24, "sex" : "女" }
  { "_id" : ObjectId("5cafe522ed4fe960abcfa712"), "name" : "guanghui", "age" : 24, "sex" : "女" }
  { "_id" : ObjectId("5cafe533ed4fe960abcfa713"), "name" : "weien", "age" : 22, "sex" : "女" }
  { "_id" : ObjectId("5cafe573ed4fe960abcfa716"), "name" : "xiaopao", "age" : 20, "sex" : "男" }
  >

  ```
- 查询 age>23 并且 age<28 的记录
  ```bash
  > db.student.find({"age": {$lte:28,$gte:23}})
  { "_id" : ObjectId("5cafe48eed4fe960abcfa70e"), "name" : "zhangshan", "age" : 24, "sex" : "男" }
  { "_id" : ObjectId("5cafe50aed4fe960abcfa711"), "name" : "wangjing", "age" : 24, "sex" : "女" }
  { "_id" : ObjectId("5cafe522ed4fe960abcfa712"), "name" : "guanghui", "age" : 24, "sex" : "女" }
  >
  ```

- 查询 name 中包含'ang'字符串的数据（模糊查询）
  ```bash
  > db.student.find({"name":/ang/ })
  { "_id" : ObjectId("5cafe456ed4fe960abcfa70d"), "name" : "zhangshan", "age" : 23 }
  { "_id" : ObjectId("5cafe48eed4fe960abcfa70e"), "name" : "zhangshan", "age" : 24, "sex" : "男" }
  { "_id" : ObjectId("5cafe4f5ed4fe960abcfa710"), "name" : "wangwu", "age" : 32, "sex" : "男" }
  { "_id" : ObjectId("5cafe50aed4fe960abcfa711"), "name" : "wangjing", "age" : 24, "sex" : "女" }
  { "_id" : ObjectId("5cafe522ed4fe960abcfa712"), "name" : "guanghui", "age" : 24, "sex" : "女" }
  >
  ```

- 查询 name 中以'jian'开头的数据
  ```bash
  > db.student.find({"name":/^jian/ })
  { "_id" : ObjectId("5cafe549ed4fe960abcfa714"), "name" : "jianhao", "age" : 30, "sex" : "男" }
  { "_id" : ObjectId("5cafe558ed4fe960abcfa715"), "name" : "jiansheng", "age" : 34, "sex" : "男" }
  >
  ```

- 查询指定列 name 和 age 的数据（返回数据中只有 name 和 age 属性的数据）
  ```bash
  > db.student.find({},{"name":1, "age": 1 })
  { "_id" : ObjectId("5cafe456ed4fe960abcfa70d"), "name" : "zhangshan", "age" : 23 }
  { "_id" : ObjectId("5cafe48eed4fe960abcfa70e"), "name" : "zhangshan", "age" : 24 }
  { "_id" : ObjectId("5cafe4deed4fe960abcfa70f"), "name" : "lisi", "age" : 28 }
  { "_id" : ObjectId("5cafe4f5ed4fe960abcfa710"), "name" : "wangwu", "age" : 32 }
  { "_id" : ObjectId("5cafe50aed4fe960abcfa711"), "name" : "wangjing", "age" : 24 }
  { "_id" : ObjectId("5cafe522ed4fe960abcfa712"), "name" : "guanghui", "age" : 24 }
  { "_id" : ObjectId("5cafe533ed4fe960abcfa713"), "name" : "weien", "age" : 22 }
  { "_id" : ObjectId("5cafe549ed4fe960abcfa714"), "name" : "jianhao", "age" : 30 }
  { "_id" : ObjectId("5cafe558ed4fe960abcfa715"), "name" : "jiansheng", "age" : 34 }
  { "_id" : ObjectId("5cafe573ed4fe960abcfa716"), "name" : "xiaopao", "age" : 20 }
  >
  ```

> <font color=00ff00>>当然 name 也可以使用 true 和 false，当使用 true 的情况下和 name:1 的效果是一样的，选用 false 就表示排除 name，显示 name 以外的其他列信息。</font>

- 查询指定列 name、age 数据, age > 25
  ```bash
  > db.student.find({"age":{$gt: 25}},{"name":1, "age": 1 })
  { "_id" : ObjectId("5cafe4deed4fe960abcfa70f"), "name" : "lisi", "age" : 28 }
  { "_id" : ObjectId("5cafe4f5ed4fe960abcfa710"), "name" : "wangwu", "age" : 32 }
  { "_id" : ObjectId("5cafe549ed4fe960abcfa714"), "name" : "jianhao", "age" : 30 }
  { "_id" : ObjectId("5cafe558ed4fe960abcfa715"), "name" : "jiansheng", "age" : 34 }>
  ```

- 按年龄排序
  ```bash
  > db.student.find().sort({age:1}) # 升序
  > db.student.find().sort({age:-1}) # 降序
  ```
  **1 代表升序      -1 代表降序**

- 查询 name=zhangshan 并且 age=24 的数据（多条件查询）
  ```bash
  > db.student.find({"name":"zhangsan","age":24})
  { "_id" : ObjectId("5cafe48eed4fe960abcfa70e"), "name" : "zhangshan", "age" : 24, "sex" : "男" }
  >
  ```

- 固定查询 5 条数据
  ```bash
  > db.student.find().limit(5)
  { "_id" : ObjectId("5cafe456ed4fe960abcfa70d"), "name" : "zhangshan", "age" : 23 }
  { "_id" : ObjectId("5cafe48eed4fe960abcfa70e"), "name" : "zhangshan", "age" : 24, "sex" : "男" }
  { "_id" : ObjectId("5cafe4deed4fe960abcfa70f"), "name" : "lisi", "age" : 28, "sex" : "男" }
  { "_id" : ObjectId("5cafe4f5ed4fe960abcfa710"), "name" : "wangwu", "age" : 32, "sex" : "男" }
  { "_id" : ObjectId("5cafe50aed4fe960abcfa711"), "name" : "wangjing", "age" : 24, "sex" : "女" }
  >
  ```

- 查询 5 条以后的数据
  ```bash
  > db.student.find().skip(5)
  { "_id" : ObjectId("5cafe522ed4fe960abcfa712"), "name" : "guanghui", "age" : 24, "sex" : "女" }
  { "_id" : ObjectId("5cafe533ed4fe960abcfa713"), "name" : "weien", "age" : 22, "sex" : "女" }
  { "_id" : ObjectId("5cafe549ed4fe960abcfa714"), "name" : "jianhao", "age" : 30, "sex" : "男" }
  { "_id" : ObjectId("5cafe558ed4fe960abcfa715"), "name" : "jiansheng", "age" : 34, "sex" : "男" }
  { "_id" : ObjectId("5cafe573ed4fe960abcfa716"), "name" : "xiaopao", "age" : 20, "sex" : "男" }>
  ```

- 查询 7-10 之间的数据
  ```bash
  > db.student.find().skip(7). limit(3)
  
  { "_id" : ObjectId("5cafe549ed4fe960abcfa714"), "name" : "jianhao", "age" : 30, "sex" : "男" }
  { "_id" : ObjectId("5cafe558ed4fe960abcfa715"), "name" : "jiansheng", "age" : 34, "sex" : "男" }
  { "_id" : ObjectId("5cafe573ed4fe960abcfa716"), "name" : "xiaopao", "age" : 20, "sex" : "男" }
  >
  ```
  适用于做分页操作，如下：
  ```bash
  > db.student.find().skip(0). limit(2) # 第 1 页
  { "_id" : ObjectId("5cafe456ed4fe960abcfa70d"), "name" : "zhangshan", "age" : 23 }
  { "_id" : ObjectId("5cafe48eed4fe960abcfa70e"), "name" : "zhangshan", "age" : 24, "sex" : "男" }
  >db.student.find().skip(2). limit(2) # 第 2 页
  { "_id" : ObjectId("5cafe4deed4fe960abcfa70f"), "name" : "lisi", "age" : 28, "sex" : "男" }
  { "_id" : ObjectId("5cafe4f5ed4fe960abcfa710"), "name" : "wangwu", "age" : 32, "sex" : "男" }
  > db.student.find().skip(4). limit(2) # 第 3 页
  { "_id" : ObjectId("5cafe50aed4fe960abcfa711"), "name" : "wangjing", "age" : 24, "sex" : "女" }
  { "_id" : ObjectId("5cafe522ed4fe960abcfa712"), "name" : "guanghui", "age" : 24, "sex" : "女" }
  > db.student.find().skip(6). limit(2) # 第 4 页
  { "_id" : ObjectId("5cafe533ed4fe960abcfa713"), "name" : "weien", "age" : 22, "sex" : "女" }
  { "_id" : ObjectId("5cafe549ed4fe960abcfa714"), "name" : "jianhao", "age" : 30, "sex" : "男" }
  ```
  **Skip(n) 与 limit(m)和 pageNum(p)的关系：n= (p-1)\*m**

- or 查询（查询 age=24 或者 age=28 的数据）
  ```bash
  > db.student.find({$or:[{"age":23},{"age":28}]})
  { "_id" : ObjectId("5cafe48eed4fe960abcfa70e"), "name" : "zhangshan", "age" : 24, "sex" : "男" }
  { "_id" : ObjectId("5cafe4deed4fe960abcfa70f"), "name" : "lisi", "age" : 28, "sex" : "男" }
  { "_id" : ObjectId("5cafe50aed4fe960abcfa711"), "name" : "wangjing", "age" : 24, "sex" : "女" }
  { "_id" : ObjectId("5cafe522ed4fe960abcfa712"), "name" : "guanghui", "age" : 24, "sex" : "女" }
  >
  ```

- findOne 查询第一条数据
  ```bash
  > db.student.findOne()
  { "_id" : ObjectId("5cafe456ed4fe960abcfa70d"), "name" : "zhangshan", "age" : 23}
  >
  ```

- 查询某个结果集的记录条数（统计数量）
  统计 age>23 数据条数
  ```bash
  > db.student.find({"age":{$gt:23}}).count()
  >
  ```

- 使用 mongodb \$type 查询相同类型的数据。
  \$type 操作符是基于 BSON 类型来检索集合中匹配的数据类型，并返回结果。
  MongoDB 中可以使用的类型如下表所示
  | 类型                    | 数字   |  备注               |
  | --------                | -----: | :----:             |
  | Double                  | 1      |                    |
  | String                  | 2      |                    |
  | Object                  | 3      |                    |
  | Array                   | 4      |                    |
  | Binary data             | 5      |                    |
  | Undefined               | 6      | 已废弃             |
  | Object id               | 7      |                    |
  | Boolean                 | 8      |                    |
  | Date                    | 9      |                    |
  | Null                    | 10     |                    |
  | Regular Expression      | 11     |                    |
  | JavaScript              | 13     |                    |
  | Symbol                  | 14     |                    |
  | JavaScript (with scope) | 15     |                    |
  | 32-bit integer          | 16     |                    |
  | Timestamp               | 17     |                    |
  | 64-bit integer          | 18     |                    |
  | Min key                 | 255    |   query with -1    |
  | Max key                 | 127    |                    |
  ```bash
  > db.student.find({"age":{$type: 2}})
  或者
  > db.student.find({"age":{$type: ‘string’}}) # 查询 age 字段中所有数据类型为 string 的数据项
  ```

## 6、修改数据
- 基本形式：
  ```bash
  db.student.update({筛选条件},{$set:{修改内容}})
  如下：
  db.student.update({"name": "zhangshan"},{$set:{"age": 16}})
  ```  

- 初始数据：
  ```bash
  > db.student.find()
  { "_id" : ObjectId("5cafe456ed4fe960abcfa70d"), "name" : "zhangshan", "age" : 23 }
  { "_id" : ObjectId("5cafe48eed4fe960abcfa70e"), "name" : "zhangshan", "age" : 24, "sex" : "男" }
  { "_id" : ObjectId("5cafe4deed4fe960abcfa70f"), "name" : "lisi", "age" : 28, "sex" : "男" }
  { "_id" : ObjectId("5cafe4f5ed4fe960abcfa710"), "name" : "wangwu", "age" : 32, "sex" : "男" }
  { "_id" : ObjectId("5cafe50aed4fe960abcfa711"), "name" : "wangjing", "age" : 24, "sex" : "女" }
  { "_id" : ObjectId("5cafe522ed4fe960abcfa712"), "name" : "guanghui", "age" : 24, "sex" : "女" }
  { "_id" : ObjectId("5cafe533ed4fe960abcfa713"), "name" : "weien", "age" : 22, "sex" : "女" }
  { "_id" : ObjectId("5cafe549ed4fe960abcfa714"), "name" : "jianhao", "age" : 30, "sex" : "男" }
  { "_id" : ObjectId("5cafe558ed4fe960abcfa715"), "name" : "jiansheng", "age" : 34, "sex" : "男" }
  { "_id" : ObjectId("5cafe573ed4fe960abcfa716"), "name" : "xiaopao", "age" : 20, "sex" : "男" }…
  >
  ```

- 修改 Lisi 的年龄和性别
  ```bash
  > db.student.update({"name":"lisi"},{$set:{"age":25,"sex":"女"}})
  WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
  > db.student.find()
  { "_id" : ObjectId("5cafe456ed4fe960abcfa70d"), "name" : "zhangshan", "age" : 23 }
  { "_id" : ObjectId("5cafe48eed4fe960abcfa70e"), "name" : "zhangshan", "age" : 24, "sex" : "男" }
  { "_id" : ObjectId("5cafe4deed4fe960abcfa70f"), "name" : "lisi", "age" : 25, "sex" : "女" }…
  >
  ```
  **注意：如果不使用\$set，效果就等于后面的 json 替换前面的 json**
  ```bash
  > db.student.update({"name":"wangwu"},{"sex":"女","like":"music"})
  WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
  > db.student.find()
  { "_id" : ObjectId("5cafe456ed4fe960abcfa70d"), "name" : "zhangshan", "age" : 23 }
  { "_id" : ObjectId("5cafe48eed4fe960abcfa70e"), "name" : "zhangshan", "age" : 24, "sex" : "男" }
  { "_id" : ObjectId("5cafe4deed4fe960abcfa70f"), "name" : "lisi", "age" : 25, "sex" : "女" }
  { "_id" : ObjectId("5cafe4f5ed4fe960abcfa710"), "sex" : "女", "like" : "music" }…
  >
  ```

- guanghui 的年龄增加 20（类似 age=age+20）喜好改为 video
  ```bash
  > db.student.update({"name":"guanghui"},{$inc:{"age":20},$set:{"like":"video"}})
  WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
  > db.student.find()
  { "_id" : ObjectId("5cafe456ed4fe960abcfa70d"), "name" : "zhangshan", "age" : 23 }
  { "_id" : ObjectId("5cafe48eed4fe960abcfa70e"), "name" : "zhangshan", "age" : 24, "sex" : "男" }
  { "_id" : ObjectId("5cafe4deed4fe960abcfa70f"), "name" : "lisi", "age" : 25, "sex" : "女" }
  { "_id" : ObjectId("5cafe4f5ed4fe960abcfa710"), "sex" : "女", "like" : "music" }
  { "_id" : ObjectId("5cafe50aed4fe960abcfa711"), "name" : "wangjing", "age" : 24, "sex" : "女" }
  { "_id" : ObjectId("5cafe522ed4fe960abcfa712"), "name" : "guanghui", "age" : 44, "sex" : "女", "like" : "video" }…
  >
  ```

## 7、删除数据

- 基本形式：
  > db.student.remove({删除条件})；

- 初始数据：
  ```bash
  > db.student.find()
  { "_id" : ObjectId("5cafe456ed4fe960abcfa70d"), "name" : "zhangshan", "age" : 23 }
  { "_id" : ObjectId("5cafe48eed4fe960abcfa70e"), "name" : "zhangshan", "age" : 24, "sex" : "男" }
  { "_id" : ObjectId("5cafe4deed4fe960abcfa70f"), "name" : "lisi", "age" : 25, "sex" : "女" }
  { "_id" : ObjectId("5cafe4f5ed4fe960abcfa710"), "sex" : "女", "like" : "music" }
  { "_id" : ObjectId("5cafe50aed4fe960abcfa711"), "name" : "wangjing", "age" : 24, "sex" : "女" }
  { "_id" : ObjectId("5cafe522ed4fe960abcfa712"), "name" : "guanghui", "age" : 44, "sex" : "女", "like" : "video" }
  { "_id" : ObjectId("5cafe533ed4fe960abcfa713"), "name" : "weien", "age" : 22, "sex" : "女" }
  { "_id" : ObjectId("5cafe549ed4fe960abcfa714"), "name" : "jianhao", "age" : 30, "sex" : "男" }
  { "_id" : ObjectId("5cafe558ed4fe960abcfa715"), "name" : "jiansheng", "age" : 34, "sex" : "男" }
  { "_id" : ObjectId("5cafe573ed4fe960abcfa716"), "name" : "xiaopao", "age" : 20, "sex" : "男" }
  >
  ```

- 删除{"sex" : "女", "like" : "music" }
  ```bash
  > db.student.remove({"sex":"女","like":"music"})
  WriteResult({ "nRemoved" : 1 })
  > db.student.find()
  { "_id" : ObjectId("5cafe456ed4fe960abcfa70d"), "name" : "zhangshan", "age" : 23 }
  { "_id" : ObjectId("5cafe48eed4fe960abcfa70e"), "name" : "zhangshan", "age" : 24, "sex" : "男" }
  { "_id" : ObjectId("5cafe4deed4fe960abcfa70f"), "name" : "lisi", "age" : 25, "sex" : "女" }
  { "_id" : ObjectId("5cafe50aed4fe960abcfa711"), "name" : "wangjing", "age" : 24, "sex" : "女" }
  { "_id" : ObjectId("5cafe522ed4fe960abcfa712"), "name" : "guanghui", "age" : 44, "sex" : "女", "like" : "video" }
  { "_id" : ObjectId("5cafe533ed4fe960abcfa713"), "name" : "weien", "age" : 22, "sex" : "女" }
  { "_id" : ObjectId("5cafe549ed4fe960abcfa714"), "name" : "jianhao", "age" : 30, "sex" : "男" }
  { "_id" : ObjectId("5cafe558ed4fe960abcfa715"), "name" : "jiansheng", "age" : 34, "sex" : "男" }
  { "_id" : ObjectId("5cafe573ed4fe960abcfa716"), "name" : "xiaopao", "age" : 20, "sex" : "男" }
  >

  ```
  **对于相同 name 属性的多条数据，可以通过多个删除条件删除指定的一条数据，也可以通过第二个参数{justOne: true}来删除第一个匹配条件的数据。**
  
  >删除第一个 zhangshan
  ```bash
  > db.student.remove("name":"zhangshan"}, {justOne:true})
  WriteResult({ "nRemoved" : 1 })
  > db.student.find()
  { "_id" : ObjectId("5cafe48eed4fe960abcfa70e"), "name" : "zhangshan", "age" : 24, "sex" : "男" }
  { "_id" : ObjectId("5cafe4deed4fe960abcfa70f"), "name" : "lisi", "age" : 25, "sex" : "女" }
  { "_id" : ObjectId("5cafe50aed4fe960abcfa711"), "name" : "wangjing", "age" : 24, "sex" : "女" }
  { "_id" : ObjectId("5cafe522ed4fe960abcfa712"), "name" : "guanghui", "age" : 44, "sex" : "女", "like" : "video" }
  { "_id" : ObjectId("5cafe533ed4fe960abcfa713"), "name" : "weien", "age" : 22, "sex" : "女" }
  { "_id" : ObjectId("5cafe549ed4fe960abcfa714"), "name" : "jianhao", "age" : 30, "sex" : "男" }
  { "_id" : ObjectId("5cafe558ed4fe960abcfa715"), "name" : "jiansheng", "age" : 34, "sex" : "男" }
  { "_id" : ObjectId("5cafe573ed4fe960abcfa716"), "name" : "xiaopao", "age" : 20, "sex" : "男" }
  >
  ```

## 8、mongodb 中的聚合和分组操作

> Mongodb 中的聚合（aggregate）只要是用来处理数据的（列如统计平均值，求和），并返回计算后的数据结果。

- aggregate 的基本语法格式：
  db.collectionName.aggregate(options)
  示例：
  ```bash
  {

  _id: ObjectId(7df78ad8902c)

  title: 'MongoDB Overview',

  description: 'MongoDB is no sql database',

  by_user: 'runoob.com',

  url: 'http://www.runoob.com',

  tags: ['mongodb', 'database', 'NoSQL'],

  likes: 100

  },

  {

  _id: ObjectId(7df78ad8902d)

  title: 'NoSQL Overview',

  description: 'No sql database is very fast',

  by_user: 'runoob.com',

  url: 'http://www.runoob.com',

  tags: ['mongodb', 'database', 'NoSQL'],

  likes: 10

  },

  {

  _id: ObjectId(7df78ad8902e)

  title: 'Neo4j Overview',

  description: 'Neo4j is no sql database',

  by_user: 'Neo4j',

  url: 'http://www.neo4j.com',

  tags: ['neo4j', 'database', 'NoSQL'],

  likes: 750

  }
  ```
  现在我们通过以上集合计算每个作者所写的文章数，使用 aggregate()计算结果如下：
  ```bash
  > db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$sum : 1}}}])
  {

    "result" : [
      {
        "_id" : "runoob.com",
        "num_tutorial" : 2
      },
      {
        "_id" : "Neo4j",
        "num_tutorial" : 1
      }
    ],
    "ok" : 1
  }
  ```
  **以上实例类似 sql 语句：**
  ```sql
  select by_user as _id, count(*) as num_tutorial from mycol group by by_user
  ```

- 在上面的例子中，我们通过字段 by_user 字段对数据进行分组，并计算 by_user 字段相同值的总和。下表展示了一些聚合的表达式:
  | 表达式        | 描述    |  示例  |
  | --------   | -----   | :---- |
  | $sum        | 计算总和      |   ```db.mycol.aggregate([{$group : {_id : "WW$by_user", num_tutorial : {$sum : "$likes"}}}]),注意只有数值才行```    |
  | $avg        | 计算平均值      |   ```db.mycol.aggregate(\[{$group : {\_id : "$by_user", num_tutorial : {$avg : "$likes"}}}\])注意只有数值才行```    |
  | $min        | 获取集合中所有文档对应值得最小值。     |   ```db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$min : "$likes"}}}])```    |
  |$max|获取集合中所有文档对应值得最大值。|```db.mycol.aggregate([{$group : {_id : "$by_user", num_tutorial : {$max : "$likes"}}}])```|
  |$push|在结果文档中插入值到一个数组中。|```db.mycol.aggregate([{$group : {_id : "$by_user", url : {$push: "$url"}}}])```|
  |$addToSet|在结果文档中插入值到一个数组中，但不创建副本。|```db.mycol.aggregate([{$group : {_id : "$by_user", url : {$addToSet : "$url"}}}])```|
  |$first|根据资源文档的排序获取第一个文档数据。|```db.mycol.aggregate([{$group : {_id : "$by_user", first_url : {$first : "$url"}}}])```|
  |$last|根据资源文档的排序获取最后一个文档数据|```db.mycol.aggregate([{$group : {_id : "$by_user", last_url : {$last : "$url"}}}])```|


## 9、详解 mongodb 中的聚合管道操作

> 通过上面，我们能够初步的了解聚合操作操作。聚合操作主要用于对数据的批量处理（数据统计和数据挖掘），往往将记录按条件分组以后，在进行一系列的操作。如求最大值、最小值、求和、平均值等。在 mongodb 中输入的是集合中的文档，输出可以使一个文档，也可以是多个文档。

Mongodb 提供了强大的聚合操作，有 3 中方式：

- 聚合管道
- 单目的聚合操作
- MapReduce 编程模型。

### 9.1、聚合管道

> 聚合管道是 mongodb2.2 引入的功能。它由阶段（Stage）组成，文档在一个阶段处理完成后，聚合管道会把处理结果传到下一个阶段。

聚合管道的功能：

- 对文档进行过滤，查询出符合条件的文档
- 对文档进行转换，改变文档的输出形式。

每个阶段使用**阶段操作符定义（Stage Operators）**，在每个阶段操作符中可以用**表达式操作符（Expression Operators）** 计算总和、平均值、拼接分割字符串等相关操作。直到每个阶段都执行完成，返回最终结果。返回的结果可以输出也可以存储在集合中。下面感受一下管道的用法：

<img :src="$withBase('/images/mongodb/管道的用法示例.jpg')">


对 order 集合进行筛选（status：A），然后根据 cust_id 分组，并计算分组后的 amount 总和。

#### 9.1.1、阶段操作符（Stage Operators）

- **范例数据：**
  ``` bash
  > db.article.find().pretty()
  {  
      "_id": ObjectId("58e1d2f0bb1bbc3245fa7570")  
      "title": "MongoDB Aggregate",
      "author": "liruihuan",
      "tags": ['Mongodb', 'Database', 'Query'],
      "pages": 5,
      "time" : ISODate("2017-04-09T11:42:39.736Z")  
  },  
  {  
      "_id": ObjectId("58e1d2f0bb1bbc3245fa7571")  
      "title": "MongoDB Index", 
      "author": "liruihuan", 
      "tags": ['Mongodb', 'Index', 'Query'], 
      "pages": 3, 
      "time" : ISODate("2017-04-09T11:43:39.236Z")  
  },  
  {  
      "_id": ObjectId("58e1d2f0bb1bbc3245fa7572")  
      "title": "MongoDB Query", 
      "author": "eryueyang", 
      "tags": ['Mongodb', 'Query'], 
      "pages": 8, 
      "time" : ISODate("2017-04-09T11:44:56.276Z")  
  }
  ```

- \$project

  作用：修改文档的结构。可以用来重命名、增加或者删除文档的字段

  示例：只返回文档中 title 和 author 字段
  ```bash
  > db.article.aggregate([{$project:{_id:0, title:1, author:1 }}])
  { "title": "MongoDB Aggregate", "author": "liruihuan" },  
  { "title": "MongoDB Index", "author": "liruihuan" },  
  { "title": "MongoDB Query", "author": "eryueyang" }
  >
  ```
  因为字段_id 是默认显示的，所有必须使用_id: 0 来过滤掉_id 字段。

  示例：把文档中 pages 字段都增加 10，并重命名为 newpages。
  ```bash
  > db.article.aggregate([{$project:{_id:0, title:1, author:1, newpages: {$add:[ "$pages", 10 ]}}}])
  { "title" : "MongoDB Aggregate", "author" : "liruihuan", "newpages" : 15 }  
  { "title" : "MongoDB Index", "author" : "liruihuan", "newpages" : 13 }  
  { "title" : "MongoDB Query", "author" : "eryueyang", "newpages" : 18 }
  >
  ```

- \$match
  作用：用于过滤文档，用法类似 find()方法中的参数（查询条件）。

  示例：查询出 pages > 5 的数据
  ```bash
  > db.article.aggregate([{$match: {"$pages":{$gt: 5}}}])
  { "_id" : ObjectId("5cbfd80286f30670093cef0b"), "title" : "MongoDB Aggregate", "author" : "liruihuan", "tags" : [ "Mongodb", "Database", "Query" ], "pages" : 5, "time" : ISODate("2017-04-09T11:42:39.736Z") }  
  { "_id" : ObjectId("5cbfd955abeb032fdde089f0"), "title" : "MongoDB Query", "author" : "eryueyang", "tags" : [ "Mongodb", "Query" ], "pages" : 8, "time" : ISODate("2017-04-09T11:44:56.276Z") }
  ```
  **注意：**
  - \$match中不能使用\$where 表达式操作符。
  - 如果\$match 位于管道的第一阶段，可以利用索引来提高查询效率。
  - \$match中使用\$text 操作符的话，只能位于管道的第一阶段。
  - \$match 尽可能的出现在管道的最前面，过滤出需要的数据，在后续阶段可以提高效率。


- \$group

  作用：将集合的中的文档进行分组，可用于统计结果。

  示例：article 中得到每个 author 的文章数，输出 author 和对应的文章数。
  ```bash
  > db.article.aggregate([{$group: {"_id":"$author","articleNum":{$sum: 1}}}])
  { "_id" : "eryueyang", "articleNum" : 1 }  
  { "_id" : "liruihuan", "articleNum" : 2 }>
  ```
  **\$author 作为分组条件，前面的字段名（_id）必须为累加对象。**

- \$sort

  作用： 对文档结果进行排序。

  示例：让集合 article 以 pages 升序排列
  ```bash
  > db.article.aggregate([{$sort: {"pages": 1 }}]).pretty()
  {  
    "_id" : ObjectId("5cbfd8c286f30670093cef0c"), 
    "title" : "MongoDB Index", 
    "author" : "liruihuan", 
    "tags" : [ "Mongodb", "Index", "Query" ],
    "pages" : 3,
    "time" : ISODate("2017-04-09T11:43:39.236Z")  
  }  
  {  
    "_id" : ObjectId("5cbfd80286f30670093cef0b"), 
    "title" : "MongoDB Aggregate", 
    "author" : "liruihuan",  
    "tags" : [ "Mongodb", "Database", "Query" ], 
    "pages" : 5, 
    "time" : ISODate("2017-04-09T11:42:39.736Z")  
  }  
  {  
    "_id" : ObjectId("5cbfd955abeb032fdde089f0"), 
    "title" : "MongoDB Query", 
    "author" : "eryueyang",  
    "tags" : [ "Mongodb", "Query" ], 
    "pages" : 8, 
    "time" : ISODate("2017-04-09T11:44:56.276Z")  
  }
  ```
  <font color=#ff0000>pretty() 的作用：使得查询出来的数据在命令行中更加美观的显示，不至于太紧凑。</font>

- \$limit

  作用：限制返回的文档数量

  示例：返回集合 article 中前两条文档
  ```bash
  > db.article.aggregate([{$limit: 2 }])
  { 
    "_id" : ObjectId("5cbfd80286f30670093cef0b"), 
    "title" : "MongoDB Aggregate", 
    "author" : "liruihuan", 
    "tags" : [ "Mongodb", "Database", "Query" ], 
    "pages" : 5, 
    "time" : ISODate("2017-04-09T11:42:39.736Z") }
  { 
    "_id" : ObjectId("5cbfd8c286f30670093cef0c"), 
    "title" : "MongoDB Index", 
    "author" : "liruihuan", 
    "tags" : [ "Mongodb", "Index", "Query" ], 
    "pages" : 3, 
    "time" : ISODate("2017-04-09T11:43:39.236Z") 
  }
  ```

- \$skip

  作用：跳过指定数量的文档，返回其后面的文档

  示例：跳过 article 集合中的第一条数据，返回剩下的数据
  ```bash
  > db.article.aggregate([{$skip: 1 }])
  { 
    "_id" : ObjectId("5cbfd8c286f30670093cef0c"), 
    "title" : "MongoDB Index", 
    "author" : "liruihuan", 
    "tags" : [ "Mongodb", "Index", "Query" ], 
    "pages" : 3, 
    "time" : ISODate("2017-04-09T11:43:39.236Z") 
  }  
  { 
    "_id" : ObjectId("5cbfd955abeb032fdde089f0"), 
    "title" : "MongoDB Query", 
    "author" : "eryueyang", 
    "tags" : [ "Mongodb", "Query" ], 
    "pages" : 8, 
    "time" : ISODate("2017-04-09T11:44:56.276Z") 
  }
  ```

- \$unwind

  作用：将文档中的数组类型拆分为多条文档（去取决于数组长度），每个文档包含数组中的一个值。

  示例：把集合 article 中 title="MongoDB Aggregate" 的 tags 字段拆分
  ```bash
  > db.article.aggregate([{$match:{"title":"MongoDB Aggregate"}},{$unwind: "$tags"}]).pretty()
  {  
    "_id" : ObjectId("5cbfd80286f30670093cef0b"), 
    "title" : "MongoDB Aggregate", 
    "author" : "liruihuan", 
    "tags" : "Mongodb", 
    "pages" : 5, 
    "time" : ISODate("2017-04-09T11:42:39.736Z")  
  }  
  {  
    "_id" : ObjectId("5cbfd80286f30670093cef0b"), 
    "title" : "MongoDB Aggregate", 
    "author" : "liruihuan", 
    "tags" : "Database", 
    "pages" : 5, 
    "time" : ISODate("2017-04-09T11:42:39.736Z")  
  }  
  {  
    "_id" : ObjectId("5cbfd80286f30670093cef0b"), 
    "title" : "MongoDB Aggregate", 
    "author" : "liruihuan", 
    "tags" : "Query", 
    "pages" : 5, 
    "time" : ISODate("2017-04-09T11:42:39.736Z")  
  }
  ```
  注意：

  - \$unwind 参数数组字段为空或者不存在时，待处理文档将会被忽略，不会输出结果。
  - \$unwind 参数字段不是一个数组类型，将会报错
  - \$unwind 不会修改原文档

#### 9.1.2、表达式操作符

> 表达式操作符有很多操作类型，其中最常用的有布尔管道聚合操作、集合操作、比较聚合操作、算术聚合操作、字符串聚合操作、数组聚合操作、日期聚合操作、条件聚合操作、数据类型聚合操作等。每种类型都有很多用法，这里就不一 一举例了。

- 布尔管道聚合操作
  |  名称  |  说明  | 
  |--------|:--------|
  |\$and|表达式都为 true 时，才返回 true|
  |\$or|任意表达式为 true 就返回 true|
  |\$not|返回与参数表达式相反的布尔值。接受单个参数表达式。|

  > 假如有一集合：
  ```bash
  { "_id" : 1, "item" : "abc1", description: "product 1", qty: 300 }  
  { "_id" : 2, "item" : "abc2", description: "product 2", qty: 200 }  
  { "_id" : 3, "item" : "xyz1", description: "product 3", qty: 250 }  
  { "_id" : 4, "item" : "VWZ1", description: "product 4", qty: 300 }  
  { "_id" : 5, "item" : "VWZ2", description: "product 5", qty: 180 }
  ```

  要求：确定 qty 是否大于 250 或者小于 200
  ```bash
  > db.article.aggregate([{ $project:{ "item" : 1, "result":{$and: [{$gt:["$qty" ,250]},{ $lt:["$qty" ,320]}]}}])
  > { "_id" : 1, "item" : "abc1", "result" : true }  
  { "_id" : 2, "item" : "abc2", "result" : false }  
  { "_id" : 3, "item" : "xyz1", "result" : false }  
  { "_id" : 4, "item" : "VWZ1", "result" : true }  
  { "_id" : 5, "item" : "VWZ2", "result" : false }
  ```


- 集合操作

  用于集合操作，求集合的并集、交集、差集运算
  |名称|说明|
  |----|:---|
  |\$setEquals|如果输入集具有相同的 distinct elements，则返回 true。接受两个或多个参数表达式。（每个输入集出去重复项后再做比较，如果相同则返回 true）|
  |\$setIntersection|返回一个集合，其中包含出现在所有输入集中共有的元素。接受任意数量的参数表达式。（交集）|
  |\$setUnion|返回包含出现在任何输入集中的元素的集合。接受任意数量的参数表达式。（并集）|
  |\$setDifference|返回一个集合，其中的元素出现在第一个集合中，但不在第二个集合中。只接受两个参数表达式。|
  |\$setIsSubset|判断第一个输入集是否是第二个输入集的子集（包括相等），如果是返回 true。只接受两个参数表达式。|
  |\$anyElementTrue|如果集合的任意位置元素的值为 true，则返回 true;否则,返回 false。接受单个参数表达式。|
  |\$allElementsTrue|如果集合的所有位置的元素的值都为 true，则返回 true;否则,返回 false。接受单个参数表达式。|

  集合数据:
  ```bash
  { "_id" : 1, "A" : [ "red", "blue" ], "B" : [ "red", "blue" ] }  
  { "_id" : 2, "A" : [ "red", "blue" ], "B" : [ "blue", "red", "blue" ] }  
  { "_id" : 3, "A" : [ "red", "blue" ], "B" : [ "red", "blue", "green" ] }  
  { "_id" : 4, "A" : [ "red", "blue" ], "B" : [ "green", "red" ] }  
  { "_id" : 5, "A" : [ "red", "blue" ], "B" : [ ] }  
  { "_id" : 6, "A" : [ "red", "blue" ], "B" : [ [ "red" ], [ "blue" ] ] }  
  { "_id" : 7, "A" : [ "red", "blue" ], "B" : [ [ "red", "blue" ] ] }  
  { "_id" : 8, "A" : [ ], "B" : [ ] }  
  { "_id" : 9, "A" : [ ], "B" : [ "red" ] }
  ```

  示例：输出 A 于 B 之间的交集
  ```bash
  db.test1.aggregate([{  
      $project:{  
          _id: 0, A:1, B:1, jiaoji:{$setUnion:["$A","$B"]}  
      }  
  }])

  { "A" : [ "red", "blue" ], "B" : [ "red", "blue" ], "bingji" : [ "blue", "red" ] }  
  { "A" : [ "red", "blue" ], "B" : [ "blue", "red", "blue" ], "bingji" : [ "blue", "red" ] }  
  { "A" : [ "red", "blue" ], "B" : [ "red", "blue", "green" ], "bingji" : [ "blue", "red" ] }  
  { "A" : [ "red", "blue" ], "B" : [ "green", "red" ], "bingji" : [ "blue", "red" ] }  
  { "A" : [ "red", "blue" ], "B" : [ ], "bingji" : [ "blue", "red" ] }  
  { "A" : [ "red", "blue" ], "B" : [ [ "red" ], [ "blue" ] ], "bingji" : [ "blue", "red" ] }  
  { "A" : [ "red", "blue" ], "B" : [ [ "red", "blue" ] ], "bingji" : [ "blue", "red" ] }  
  { "A" : [ ], "B" : [ ], "bingji" : [ ] }  
  { "A" : [ ], "B" : [ "red" ], "bingji" : [ ] }
  ```

- 比较集合操作
  |名称|说明|
  |----|:----|
  |\$cmp|比较两个值，如果相等返回 0，大于返回 1，小于返回-1|
  |\$eq|比较两个值，如果相等返回 true|
  |\$gt|第一个值大于第二个值，返回 true（必须是数值）|
  |\$gte|第一个值大于等于第二个值，返回 true（必须是数值）|
  |\$lt|第一个值小于第二个值，返回 true（必须是数值）|
  |\$lte|第一个值小于等于第二个值，返回 true（必须是数值）|
  |\$ne|第一个值不等于第二个值，返回 true|


- 算术集合操作
  |名称|说明|
  |----|:----|
  |\$abs|返回绝对值|
  |\$add|添加数字来返回和，或者添加数字和日期来返回新日期。如果添加数字和日期，则将这些数字视为毫秒。接受任意数量的参数表达式，但最多只能解析一个表达式到日期。|
  |\$ceil|向上取整|
  |\$divide|除法操作|
  |\$exp|将 e 提升到指定的指数。|
  |\$floor|向下取整|
  |\$ln|log x, 计算一个数字的对数|
  |\$log|Calculates the log of a number in the specified base.|
  |\$log10|计算以 10 为底的对数。|
  |\$mod|返回第一个数字除以第二个数字的余数。接受两个参数表达式。|
  |\$multiply|乘法。接受任意数量的参数表达式。|
  |\$pow|Raises a number to the specified exponent.|
  |\$sqrt|计算平方根.|
  |\$subtract|返回从第一个值减去第二个值的结果。如果这两个值是数字，则返回差值。如果这两个值是日期，则以毫秒为单位返回差值。如果这两个值是一个日期和一个以毫秒为单位的数字，则返回结果日期。接受两个参数表达式。如果这两个值是日期和数字，请首先指定 date 参数，因为从数字中减去日期没有意义。|
  |\$trunc|去除小数部分。|

  集合：
  ```bash
  { "_id": 1, "start": 5, "end": 8 }  
  { "_id": 2, "start": 4, "end": 4 }  
  { "_id": 3, "start": 9, "end": 7 }  
  { "_id": 4, "start": 6, "end": 7 }
  ```

  示例：求 start 减去 end 的绝对值
  ```bash
  db.test2.aggregate([
    {  
      $project:{  
          _id: 0, start:1, end:1, s_b_absolute:{$abs:{$subtract:["$start","$end"]}
      }
    }
  ])

  { "start" : 5, "end" : 8, "s_b_absolute" : 3 }  
  { "start" : 4, "end" : 4, "s_b_absolute" : 0 }  
  { "start" : 9, "end" : 7, "s_b_absolute" : 2 }  
  { "start" : 6, "end" : 7, "s_b_absolute" : 1 }
  ```

- 字符串聚合操作
  ...
- 数组聚合操作
  ...
- 日期聚合操作
  ...
- 条件聚合操作
  ...
- 数据类型聚合操作
  ...

#### 9.1.3、聚合管道的优化

默认情况下，整个集合成为聚合管道的输入，为了提高数据的处理效率，可以采用以下的策略：

- 将\$match和\$sort 放在管道的前面，可以给集合建立索引，提高处理数据的效率。
- 可以使用\$match、\$limit、\$skip 对文档进行提前的过滤，以减少后续处理文档的数量。

当聚合管道执行命令时，MongoDB 也会对各个阶段进行优化。主要包括以下几个情况。

- \_\$sort +\$match顺序优化
  如果 \$match 出现在 \$sort 之后，优化器会自动把 \$match 放到 \$sort 前面

- \_\$skip + \$limit顺序优化

  如果 \$skip 在 \$limit 之后，优化器会把 \$limit 移动到\$skip 的前面，移动后 \$limit的值等于原来的值加上 \$skip 的值。

  例如：移动前：{\$skip: 10, \$limit: 5}，移动后：{\$limit: 15, \$skip: 10}

### 9.2、单目的聚合操作

> 单目的聚合命令，常用的：count()、distinct()，与聚合管道相比，单目的聚合操作更简单，使用非常频繁。先通过  distinct() 看一下工作流程。

<img :src="$withBase('/images/mongodb/单目的聚合操作.jpg')">

求出集合 article 中 time 值大于 2017-04-09 的文档个数
```bash
db.article.count( { time: { $gt: new Date('04/09/2017') } } )
```
上面的语句的等价于：
```bash
db.article.find( { time: { $gt: new Date('04/09/2017') } } ).count()
```
## 10、Mongodb 的索引和 explain 的使用

### 10.1、索引基础

> 索引是对数据库表中一列或多列的值进行排序的一种结构，可以让我们查询数据库变得 更快。MongoDB 的索引几乎与传统的关系型数据库一模一样，这其中也包括一些基本的查 询优化技巧。

- 创建索引
```bash
db.student.ensureIndex({"name": 1})  // 给 name 列创建索引
```
- 获取当前集合的所有索引
```bash
db.student.getIndexes()  // 获取 student 的索引
```
- 删除索引
```bash
db.student.dropIndex({"name":1})  // 删除 student 的 name 索引
```
- 复合索引

数字 1 表示 name 键的索引按升序存储，-1 表示 age 键的索引按照降序方式存储
```bash
db.student.ensureIndex({"name":1, "age":-1})  // 创建复合索引
```
该索引被创建后，基于 name 和 age 的查询将会用到该索引，或者是基于 name 的查询也会用到该索引，但是只是基于 age 的查询将不会用到该复合索引。

因此可以说， 如果想用到复合索引，必须在查询条件中包含复合索引中的前 N 个索引列。然而如果查询条件中的键值顺序和复合索引中的创建顺序不一致的话，MongoDB 可以智能的帮助我们调 整该顺序，以便使复合索引可以为查询所用。如
```bash
> db.student.find({"age":24,"name":"stu1"})
```
对于上面示例中的查询条件，MongoDB 在检索之前将会动态的调整查询条件文档的顺 序，以使该查询可以用到刚刚创建的复合索引

对于上面创建的索引，MongoDB 都会根据索引的 keyname 和索引方向为新创建的索引自动分配一个索引名，下面的命令可以在创建索引时为其指定索引名，如：
```bash
> db.student.ensureIndex({"name":1},{"name":"userIndex"})  // 创建索引时为其指定索引名
```
随着集合的增长，需要针对查询中大量的排序做索引。如果没有对索引的键调用 sort， MongoDB 需要将所有数据提取到内存并排序。因此在做无索引排序时，如果数据量过大以 致无法在内存中进行排序，此时 MongoDB 将会报错。


- 唯一索引

在缺省的情况下创建的索引均不是唯一索引。下面示例创建唯一索引：
```bash
db.student.ensureIndex({"userId" : 123}, {"unique": true})
```
唯一索引创建后，如果再次插入重复的文档时，mongodb 就会报错，以提示插入了重复键。
```bash
> db.user.insert({"userid": 1,"username":"zhangsan","age":23,"sex":"男"})
WriteResult({
  "nInserted" : 0,
  "writeError" : {
    "code" : 11000,
    "errmsg" : "E11000 duplicate key error collection: student.user index: userid_1 dup key: { : 1.0 }"        
  }
})
```
如果插入的文档中不包含 userid 键，name 文档中该键的值就为 null，如果多次插入类似的文档，mongodb 将会报同样的错误。
```bash
> db.user.insert({"name": "lisi"})
WriteResult({ "nInserted" : 1 })
> db.user.insert({"name": "wangwu"})
WriteResult({
  "nInserted" : 0,
  "writeError" : {
    "code" : 11000,
    "errmsg" : "E11000 duplicate key error collection: student.user index: userid_1 dup key: { : null }"
  }
})
```
- 复合唯一索引

我们同样可以创建复合唯一索引，即保证复合键值唯一即可
```bash
> db.user.ensureIndex({"userid":1,"age":1},{"unique":true})
```
### 10.2、索引的一些参数
|Parameter|Type|Description|
|----|----|----|
|background|Boolean|建索引过程会阻塞其它数据库操作，background 可指定以后台方式创建索引，即增加 "background" 可选参数。 "background" 默认值为**false**。|
|unique|Boolean|建立的索引是否唯一。指定为 true 创建唯一索引。默认值为**false**。|
|name|string|索引的名称。如果未指定，MongoDB 的通过连接索引的字段名和排序顺序生成一个索引名称。|
|sparse|Boolean|对文档中不存在的字段数据不启用索引；这个参数需要特别注意，如果设置为 true 的话，在索引字段中不会查询出不包含对应字段的文档.。默认值为  **false**。|
|expireAfterSeconds|integer|指定一个以秒为单位的数值，完成 TTL 设定，设定集合的生存时间。|
|v|index version|指定一个以秒为单位的数值，完成 TTL 设定，设定集合的生存时间。|
|weights|document|索引权重值，数值在 1 到 99,999 之间，表示该索引相对于其他索引字段的得分权重。|
|default_language|string|对于文本索引，该参数决定了停用词及词干和词器的规则的列表。 默认为英语|
|language_override|string|对于文本索引，该参数指定了包含在文档中的字段名，语言覆盖默认的 language，默认值为 language.|

> 如果在为已有数据的文档创建索引时，可以执行下面的命令，以使 MongoDB 在后台创建索引，这样的创建时就不会阻塞其他操作。但是相比而言，以阻塞方式创建索引，会使整个创建过程效率更高，但是在创建时 MongoDB 将无法接收其他的操作。
```bash
> db.user.ensureIndex({"userid":1},{"background":true})
```
### 10.3、explain 的使用

explain 是非常有用的工具，会帮助你获得查询方面诸多有用的信息。只要对游标调用
该方法，就可以得到查询细节。explain 会返回一个文档，而不是游标本身。如：
```bash
> db.user.find().explain()
{
  "queryPlanner" : {        
  "plannerVersion" : 1,        
  "namespace" : "student.student",        
  "indexFilterSet" : false,        
  "parsedQuery" : {         
  },        
  "winningPlan" : {                
    "stage" : "COLLSCAN",                
    "direction" : "forward"        
  },        
  "rejectedPlans" : [ ]
  },
  "serverInfo" : {        
    "host" : "DESKTOP-53JS0A9",        
    "port" : 27017,        
    "version" : "4.0.8",        
    "gitVersion" : "9b00696ed75f65e1ebc8d635593bed79b290cfbb"
  },
  "ok" : 1
}
```
> **explain 会返回查询使用的索引情况，耗时和扫描文档数的统计信息。**

### 10.4、explain executionStats 查询具体的执行时间
```bash
> db.user.find().explain( "executionStats")
{
  "executionStats" : {
    "executionSuccess" : true,
    "nReturned" : 108,
    "executionTimeMillis" : 0,
    "totalKeysExamined" : 0,
    "totalDocsExamined" : 108,
    "executionStages" : {
      "stage" : "COLLSCAN",
      "nReturned" : 108,
      "executionTimeMillisEstimate" : 0,
      "works" : 110,
      "advanced" : 108,
      "needTime" : 1,
      "needYield" : 0,
      "saveState" : 0,
      "restoreState" : 0,
      "isEOF" : 1,
      "invalidates" : 0,
      "direction" : "forward",
      "docsExamined" : 108
    }        
  },
  "serverInfo" : {
    "host" : "DESKTOP-53JS0A9",
    "port" : 27017,
    "version" : "4.0.8",
    "gitVersion" : "9b00696ed75f65e1ebc8d635593bed79b290cfbb"
  },
  "ok" : 1
}
```
__关注输出的如下数值：explain.executionStats.executionTimeMillis__