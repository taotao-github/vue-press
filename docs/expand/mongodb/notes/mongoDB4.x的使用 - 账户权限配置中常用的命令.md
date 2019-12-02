# MongoDB账户权限配置中常用的命令

1. show users
   查看当前数据库下的所有用户
2. db.dropUser(用户名)
   删除当前库下指定的用户
3. db.updateUser('admin', {pwd: 'xxx'})
   修改当前库下的用户
4. db.auth('auth': 'password')
   密码认证，如下使用方式
   ```bash
   C:\Users\DELL>mongo admin	# 需要连接的数据库
   MongoDB shell version v4.0.8
   connecting to: mongodb://127.0.0.1:27017/admin?gssapiServiceName=mongodb
       Implicit session: session { "id" : UUID   ("cfcf0072-12a3-46f8-87ba-00069194eead") }
   MongoDB server version: 4.0.8
   > db.auth('admin','123456') # 使用auth(用户，密码) 认证登录，登录成功就能操作数据库了
   1
   > show dbs
   admin    0.000GB
   config   0.000GB
   local    0.000GB
   product  0.000GB
   student  0.000GB
   test     0.000GB
   >
   ```