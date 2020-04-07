# 第一个java程序 hello world
> 切换当java文件的目录下，使用javac + 文件，编译文件，编译成功后会生成class文件，在使用java + 文件名执行class文件。
```java
class demo // class 定义类的关键字
{
	public static void main (String[] args) { // 主函数（程序入口）
		System.out.println("hell0 world"); // hello world (java严格使用分号)
	}
}
```

## java的注释
* // ... 				单行注释
* /* ...  */		多行注释
* /** ... */		文档注释 （可以使用javadoc 命令将其制作为使用文档）		