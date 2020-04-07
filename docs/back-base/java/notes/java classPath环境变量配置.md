# java classPath环境变量配置
> 将class文件所在的目录，配置到系统环境变量

## 使用临时配置
```bash
# 配置临时class环境
set classPath=需要运行的class文件坐在目录;

# 运行文件
java class文件 # 这里可以看见能够运行成功
```
:::tip 原理
当使用java命令时，就会调用jvm，jvm就会先去classPath中找该执行的文件，如果有就执行，没有就去当前所在目录下找，如果有就执行当前目录下的class文件，还是没有就报错。（设置classPath时结尾处加 ; 号的效果，不加就不会在当前所在目录下找）
classPath 与 path 查找顺序相反。
:::


