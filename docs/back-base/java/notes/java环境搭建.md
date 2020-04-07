# java环境搭建

## windows命令式操作
```bash
  dir # 列出当前目录下的文件和文件夹
  md  # 创建目录
  rd  # 删除目录
  cd  # 进入目录
  cd .. # 退回上一个目录
  cd /  # 退回到根目录
  del   # 删除文件
  exit  # 退出dos
```

## java语言的特点
* 跨平台性
* 面向对像

## java语言环境搭建
### JRE（运行）
包含java虚拟机（java virtual machine） 和java所需的核心类库等，如果想运行一个java程序，计算机上只需安装JRE即可。
### JDK （编译 + 运行）
JDK是提供给开发人员的，包含java开发工具和jre，所以安装了jdk就可以不用安装jre了

::: tip 简单而言
  使用jdk开发完的java程序，交给jre去运行。
:::

### 下载JDK
www.oracle.com

### java 环境变量配置
> 将jdk bin目录添加到系统环境变量的path中。

#### 配置技巧
使用单独变量名保存jdk的路径，然后在path中是用 %变量名% 替换jdk的路径

#### jdk 临时配置
> 在别人的电脑上临时开发运行java，使用临时配置就不会更改别人的电脑配置。
set 命令：用于查看或者设置环境变量的值

> 使用start命令，可以复制当前dos窗口

