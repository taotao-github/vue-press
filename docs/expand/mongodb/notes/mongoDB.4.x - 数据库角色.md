# MongoDB数据库角色
1. 数据库用户角色：针对每一个数据库进行控制
    - read：提供了读取所有非系统集合，以及系统集合中的system.indexes, system.js, system.namespaces
    - readWrite： 包含了所有read权限，以及修改所有非系统集合的和系统集合中的system.js的权限。

2. 数据库管理角色：每一个数据库包含了下面的数据库管理角色
    - dbAdmin：该数据库的所有者，具有该数据库的全部权限
    - dbOwner：一些数据库对象的管理操作，但是没有数据库的读写权限
    - userAdmin：为当前用户创建、修改用户和角色。拥有userAdmin权限的用户可以将该数据库的任意权限赋予任意的用户

3. 集群管理角色：admin数据库包含了下面的角色，用户管理整个系统，而非单个数据库。这些权限包含了复制集和共享集群的管理函数
    - clusterAdmin：提供了最大的集群管理功能。相当于clusterManager, clusterMonitor, and hostManager和dropDatabase的权限组合。
    - clusterManager：提供了集群和复制集管理和监控操作。拥有该权限的用户可以操作config和local数据库（即分片和复制功能）
    - clusterMonitor：仅仅监控集群和复制集
    - hostManager：提供了监控和管理服务器的权限，包括shutdown节点，logrotate, repairDatabase等。

4. 备份恢复角色：admin数据库中包含了备份恢复数据的角色。包括backup、restore等等
    - Backup
    - restore

5. 所有数据库角色：admin数据库提供了一个mongod实例中所有数据库的权限角色：
    - readAnyDatabase：具有read每一个数据库权限。但是不包括应用到集群中的数据库。
    - readWriteAnyDatabase：具有readWrite每一个数据库权限。但是不包括应用到集群中的数据库
    - userAdminAnyDatabase：具有userAdmin每一个数据库权限，但是不包括应用到集群中的数据库
    - dbAdminAnyDatabase：提供了dbAdmin每一个数据库权限，但是不包括应用到集群中的数据库

6. 超级用户角色
    - root：dbadmin到admin数据库、useradmin到admin数据库以及UserAdminAnyDatabase。但它不具有备份恢复、直接操作system.*集合的权限，但是拥有root权限的超级用户可以自己给自己赋予这些权限。

具体参考：https://www.cnblogs.com/zzw1787044/p/5773178.html
