# java 语言的基础组成

## java 关键字

- 用于定义访问权限修饰符的关键：private、protected、public
- 用于定义类、函数、变量的修饰符的关键字：abstract、final、static、synchronized
- 用于定义类与类之间关系的关键字：extends、implements
- 用于定义建立实例及引用实例，判断实例的关键字：new、instanceof、this、super
- 用于异常处理的关键字：try、catch、finally、throw、throws
- 用于包的关键字：package、import
- 其他修饰符关键字：native、strictfp、transient、volatile、assert

## java 标识符

> 在程序中自定义的一些名称

- 由 26 个英文字母大小写，数字：0-9，符号：\$ \_ 组成
- 定义合法标识符的规则：数字不能开头、不可以使用关键字
- java 中严格区分大小写
- 在自定以名字时，为了提高阅读性，要尽量定义有意义的名称。
- java 中的命名规范
  - 包名：多单词组成时所有单词都小写：xxxyyyzzz
  - 类名接口名：多单词组成时，所有单词的首字母大写：XxxYyyZzz
  - 变量名和函数名：多单词组成时，第一个单词字母小写，第二个单词开始每个单词首字母大写：xxxYyyZzz
  - 常量名：所有字母都大写，多单词时每个字母用下划线分割：XXX_YYY_ZZZ

## java 常量和变量

### 常量

> 表示不能改变的数值

- java 常量分类

  - 整数常量，所有整数
  - 小数常量，所有小数
  - 布尔常量，较为特有，只有两个数值，true 和 false
  - 字符常量，将一个数字、字母或者符号使用单引号（' '）标识。
  - 字符串常量，讲一个或者多个字符用双引号标识。
  - null 常量，只有一个数值就是 null

- java 对于整数的表现形式
  - 二进制：0-1
  - 十进制：0-9
  - 八进制：0-7，开头用 0 标识
  - 十六进制：0-9 A-F，开头用）0x 表示

### 变量

> 将不确定的数据进行存储，也就是需要在内存中开辟一个空间。Java 是强类型语言，对于每一种数据都定义了明确的具体数据类型，在内存中分配了不同大小的内存空间。

#### 数据类型

<img :src="$withBase('/images/java/java数据类型.png')" alt="java数据类型">

::: tip 提示
整数默认：int
小数默认：double
:::

#### 类型转换

示例：

```java
class TypeDemo
{
	public static void main (String[] args) {
    byte b = 3;
    b = b + 2;
		System.out.println("b:" + b);
	}
}

/*
!!!编译失败
test.java:20: 错误: 不兼容的类型: 从int转换到byte可能会有损失
    b = b + 2;
          ^
1 个错误
*/
```

为什么编译失败呢？原因如下：图示

<img :src="$withBase('/images/java/java数据类型转换.png')" alt="java数据类型转换">

解决：强制类型转换(大类型转小类型)

```java
b = (byte) (b + 2);
```

## 运算符

- 算术运算符：+ - \* / % ++ -- +（字符串连接符） （字符串数据和任何数据使用 + 都是相连接，最终都是字符串）
- 赋值运算符：= += -= \*= /= %=
- 比较运算符：> < >= <= != ==
- 逻辑运算符：& | ^ ! && || (&和&&的区别就是，&&左边为 false 后，右边不参与运算。|和||也是同理。)
- 位运算符：
  - << 左移：左边的数\*2 的 n 次方
  - \>\> 右移：左边的数/2 的 n 次方
  - \>\>\> 无符号右移: 无符号右移做高位都用 0 来补充。
  - & 与运算
  - | 或运算
  - ^ 异或运算
  - ~ 反码

使用位运算符
最有效的方式计算 2\*8 的数值。

```java
2 << 3;
```

两个变量互换

```java
  n = n ^ m;
  m = n ^ m; // (n ^ m) ^ m 同一个数 ^ 一个数两次还是本身
  n = n ^ m; // n ^ (n ^ m)
```

### 位运算符练习

- 使用位运算符将 60 转为 16 进制数
  原理：

<img :src="$withBase('/images/java/使用位运算完成10进制转16进制.png')" alt="使用位运算完成10进制转16进制">

```java
  int num = 60;

  // 获取60的最后4位二进制
  int temp = num & 15;

  System.out.println((char)(temp - 10 + 'A')); // C

  // 获取完最后4位二进制数后，将60右移4位
  int tmp2 = num >>> 4; // 使用 >>> 使用0补充，方便判断原数的移动情况

  // 再次获取最后4位
  System.out.println((tmp2 & 15)); // 3
```

转义字符：通过 '\' 符号来转变后面字母或者符号的意义。

- \n 换行
- \b 退格
- \t 制表符
- \r 按下回车键 （在 window 上 回车是用\r\n 来表示的）

## **语句**

## 函数

### 什么是函数？

> 函数就是定义在类中的具有特地功能的一段独立小程序。函数也成为方法。

### 函数的格式

```java
修饰符 返回类型 函数名(参数类型 参数名1, ...) {
  执行语句;
  return 返回值;
}

// 返回值类型：函数运行后的结果的数据类型,没有具体的返回值时，返回值类型为void
// 参数类型：是形式参数的数据类型
// 实际参数：是一个变量，用于存储调用函数是传递给函数的实际参数
// return： 用于结束函数
// 返回值：该值会返回给调用者
```

示例

```java
class FunctionDemo
{
  public static void main (String[] args) {
    int x = 5;
    getResule(x);
  }

  /*
    定义一个数的 * 3 + 5 结果
  */
  static int getResule (int num) {
    return num * 3 + 5;
  }

  /*
    定义一个功能，用于打印矩形
  */
  static void printRecent (int height, int width) {
    for (int i = 0; i < height; i++)   {
      for (int j = 0; j < width; j++){
        System.out.print("* ");
      }
      System.out.print("\n");
    }
  }

  /*
    打印99乘法口诀
  */
  static void print99 () {
    for (int i = 1; i<= 9; ++i) {
      for (int j = 1; j <= i; j++) {
        System.out.print(j +"x" + i + "=" + i*j + "\t" );
      }
      System.out.print("\n");
    }
  }
}
```

### 函数的重载

- 重载的含义：在同一类中，允许出现一个以上的同名函数，只要它们的参数个数或者参数类型或者参数顺序不同即可。
- 重载的特点：与返回值无关，只看参数列表。
- 重载的好处：方便阅读，优化程序设计，扩展程序

示例：

```java
// 返回两个数的和
int add (int a, int b) { return a+b; }
// 返回3个数的和
int add（int a, int b, int c）{ return a + b + c; // return add(a, b) + c; }
// 返回两个小数的和
double add (double a, double b) { return a + b; }
```

## 数组

### 数组含义

同一种类型数据的集合，其实数组就是一个容器。可以自动给数组中的元素进行编号，从 0 开始。

### 数组格式

- 格式 1

```java
// 元素类型[] 数组名称 = new 元素类型[元素个数或数组长度]
// 示例
int[] arr = new int[10];
```

- 格式 2

```java
// 元素类型[] 数组名称 = new 元素类型[]{元素1， 元素2， ...}

// 示例
int[] arr = new int[]{1, 2, 5, 4};
int[] arr1 = {1, 2, 4, 5}

// 注意，使用数组可能会出现数组角标越界或者是空指针异常的错误
```

### 数组操作

- 获取数组的长度 length

```java
// 定义功能，打印数组中的元素，元素之间使用逗号隔开
void printArr (int[] arr) {
  for (int i = 0, j = arr.length; i < j; i++) {
    System.out.print(arr[i] + ",");
  }
}
```

### 数组排序

#### 方式 1（选择排序）

原理: 外循环每一次循环找出数组中做小的一个数值，并放置在左边。

<img :src="$withBase('/images/java/java数组排序方式1.png')" alt="java数组排序方式1">

```java
static int[] selectSort (int[] arr) {
		for (int i = 0, len = arr.length; i < len; ++i)
		{
			for (int j = i; j < len; ++j)
			{
				if (arr[i] > arr[j])
				{
					int temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;
				}
			}
		}
		return arr;
	}
```

#### 方式 2（冒泡排序）

原理：相邻元素之间比较，小的放左边，大的放右边。这样每次外循环都会得出最大值并放置子最右边。

<img :src="$withBase('/images/java/java数组排序方式2.png')" alt="java数组排序方式2">

```java
/*
		冒泡排序
	*/
	static int[] bubbleSort (int[] arr) {
		for (int i = 0, len = arr.length; i < len -  1; ++i)
		{
			for (int j = 0; j < len - i - 1; ++j)
			{
				if (arr[j] > arr[j + 1])
				{
					int temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}
		return arr;
	}

```
