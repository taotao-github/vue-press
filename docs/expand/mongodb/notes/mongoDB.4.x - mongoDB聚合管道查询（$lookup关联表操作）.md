# MongoDB高级查询aggregate聚合管道（$lookup关联表操作）

- 范例数据
  ```
  // order表
  > db.order.find().pretty()
  {
    "_id" : ObjectId("5cd8e2f0222fd632a3a40e51"),
    "order_id" : "1",
    "user_id" : "10",
    "trade_no" : "111",
    "price" : 50,
    "all_num" : 2
  }
  {
    "_id" : ObjectId("5cd8e307222fd632a3a40e52"),
    "order_id" : "2",
    "user_id" : "12",
    "trade_no" : "121",
    "price" : 30,
    "all_num" : 1
  }
  {
    "_id" : ObjectId("5cd8e327222fd632a3a40e53"),
    "order_id" : "3",
    "user_id" : "15",
    "trade_no" : "131",
    "price" : 60,
    "all_num" : 3
  }
  // order_item表
  > db.order_item.find().pretty()
  {
    "_id" : ObjectId("5cd8e37d222fd632a3a40e54"),
    "order_id" : "1",
    "name" : "手机1"
  }
  {
    "_id" : ObjectId("5cd8e383222fd632a3a40e55"),
    "order_id" : "1",
    "name" : "手机2"
  }
  {
    "_id" : ObjectId("5cd8e393222fd632a3a40e56"),
    "order_id" : "2",
    "name" : "电脑1"
  }
  {
    "_id" : ObjectId("5cd8e3b8222fd632a3a40e57"),
    "order_id" : "3",
    "name" : "显示屏1"
  }
  {
    "_id" : ObjectId("5cd8e3bc222fd632a3a40e58"),
    "order_id" : "3",
    "name" : "显示屏2"
  }
  {
    "_id" : ObjectId("5cd8e3bf222fd632a3a40e59"),
    "order_id" : "3",
    "name" : "显示屏3"
  }
  
  ```

- $lookup（表关联2表关联）
  > 基本形式

  ```
  db.collectionName.aggregate([
	{
        $lookup: {
            from: 'collectionName1', // collectionName与collectionName1进行关联
            localField: 'xxxx', // collectionName关联的字段
            foreignField: 'yyy', // collectionName1关联的字段
            as: 'zzz' // 关联完成后的数据放在zzz字段中
        }
    }
  ])

  ```

- 示例：表order和表order_item通过order_id 进行关联
  ```
  db.order.aggregate([
    {
        $lookup: {
            from: 'order_item',
            localField: 'order_id',
            foreignField: 'order_id',
            as: 'items'
        }
    }
  ]).pretty()
  {
      "_id" : ObjectId("5cd8e2f0222fd632a3a40e51"),
      "order_id" : "1",
      "user_id" : "10",
      "trade_no" : "111",
      "price" : 50,
      "all_num" : 2,
      "items" : [
          {
              "_id" : ObjectId("5cd8e37d222fd632a3a40e54"),
              "order_id" : "1",
              "name" : "手机1"
          },
          {
              "_id" : ObjectId("5cd8e383222fd632a3a40e55"),
              "order_id" : "1",
              "name" : "手机2"
          }
      ]
  }
  {
      "_id" : ObjectId("5cd8e307222fd632a3a40e52"),
      "order_id" : "2",
      "user_id" : "12",
      "trade_no" : "121",
      "price" : 30,
      "all_num" : 1,
      "items" : [
          {
              "_id" : ObjectId("5cd8e393222fd632a3a40e56"),
              "order_id" : "2",
              "name" : "电脑1"
          }
      ]
  }
  {
      "_id" : ObjectId("5cd8e327222fd632a3a40e53"),
      "order_id" : "3",
      "user_id" : "15",
      "trade_no" : "131",
      "price" : 60,
      "all_num" : 3,
      "items" : [
          {
              "_id" : ObjectId("5cd8e3b8222fd632a3a40e57"),
              "order_id" : "3",
              "name" : "显示屏1"
          },
          {
              "_id" : ObjectId("5cd8e3bc222fd632a3a40e58"),
              "order_id" : "3",
              "name" : "显示屏2"
          },
          {
              "_id" : ObjectId("5cd8e3bf222fd632a3a40e59"),
              "order_id" : "3",
              "name" : "显示屏3"
          }
      ]
  }
  
  ```

- $lookup (表关联 N表关联)
  表结构：
  ![N表关联](images/N表关联.jpg)
  ....