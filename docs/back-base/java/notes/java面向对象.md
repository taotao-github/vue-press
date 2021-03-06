# java 面向对象

## 面向对象的概念

> 3 个特征：封装、继承、多态

## 类与对象的关系

现实生活中的对象：张三、李四
想要描述：提取对象中共性内容，对具体的抽象。
描述时：这些对象的共性有：姓名、年龄、性别等

映射到 java 中，面熟就是 class 定义的类。
具体对象就是对应 java 在堆内存中使用 new 建立实体。

类：就是对现实生活中实务的描述，
对象：就是这类事物，实实在在的个体。

### 定义对象

```java
// 描述一个汽车,描述事物其实就是在描述事物的属性和行为。
class Car{
  String color = "红色"; // 成员变量
  int num = 4; // 成员变量

  // 行为
  void run () { // 成员方法
    System.out.print("run");
  }
}
// * 属性对应类中的变量，又叫成员变量，行为对应类中的函数（方法）又叫成员方法
// * 其实定义类就是在描述事物。
```

::: tip 成员变量与局部变量

1. 作用范围不同：成员变量作用于整个类中，局部变量只作用于函数或者语句中。
2. 在内存中的位置不同：成员变量在堆内存中，因为对象的存在，才在堆内存中存在。局部变量，存在于栈内存中。
   :::

### 使用对象

```java
class CarDemo{
  public static void main(String[] args) {
    // 生产汽车，在java中通过new操作符来完成，其实就是在堆内存中产生一个实体，
    Car car = new Car();
  }
}
```

### new 对象在内存做了什么

<img :src="$withBase('/images/java/java中new关键字所做的事情.png')" alt="java中new关键字所做的事情">

### 匿名对象

> 也就是没有使用变量名接收的对象。如下图示

```java
// 利用上类Car创建匿名对象
new Car().num = 5;
new Car().color = "red";
new Car().run();

// 使用new 则是在堆内存在新开一个实体，如果对一个对象进行多个成员的调用，那匿名对象就没有任何意义。
// 使用方式1：当对对象的方法只调用一次，可以用匿名对象来完成，这样写比较简化。
// 使用方式2：可以将匿名对象作为一个实参传递给一个函数（也就是作为一个方法的实际参数）
```

## 封装

### 含义

是指隐藏对象的属性和实现细节，仅对外提供公共访问方式。

### 封装的好处

- 将变化隔离
- 便于使用
- 提高重用性
- 提高安全性

### 封装原则

- 将不需要对外提供的内容都隐藏起来。
- 把属性都隐藏，提供公共方法对其进行访问。

### 封装示例

```java
// private: 私有，权限修饰符：用于修饰类中的成员（成员变量或者成员方法）。私有后只能在本类中访问
// 将age私有化以后，类以即使建立了对象也不能访问。因此就需要在类中提供访问的方法。
// 注意：私有仅仅是封装的一种表现形式。
// 之所以对外提供访问方式，就是可以在提供的方法进行逻辑处理（如下）
class Person
{
	private int age;

	// 向外界提供访问age的方法
	public void setAge (int age) {
		// 判断age不能小于0 大于200
		if (age > 0 && age < 200)
		{
			this.age = age;
		}
		else System.out.print("age不符实际！");

	}

	// 提供获取age的方法
	public int getAge()
	{
		return this.age;
	}

	void speak () {
		System.out.print("age: " + age);
	}
}
class PersonDemo
{
	public static void main(String[] args){

	}
}
```

## 构造函数

### 构造函数的特点

- 函数名与类名相同
- 不用定义返回值的类型
- 不可以写 return 语句

> 对象一建立就会调用与之对应的构造函数。

### 构造函数的作用

- 给对象进行初始化


### 默认的构造函数的特点

> 当一个类中没有定义构造函数时，系统会默认给该类加入一个空参数的构造函数。当在类中自定义了构造函数就会覆盖默认的构造函数。

### 多个构造函数是以重载的形式存在的

```java
class Person
{
	private String name;
	private int age;

	Person () {
		System.out.println("A: name=" + name + ", age=" + age);
	}

	Person (String n) {
		name = n;
		System.out.println("B: name=" + name + ", age=" + age);
	}

	Person (String n, int a) {
		name = n;
		age = a;
		System.out.println("C: name=" + name + ", age=" + age);
	}
}

class PersonDemo
{
	public static void main(String[] args){
		Person p1 = new Person();
		Person p2 = new Person("lisi");
		Person p3 = new Person("zhangsan", 10);
	}
}
```

运行结果：

```bash
PS E:\资源\java-code> java PersonDemo
A: name=null, age=0
B: name=lisi, age=0
C: name=zhangsan, age=10
```

:::tip 小结
可以看出，创建对象时，使用哪个构造器 new 对象，就会调用其相应的构造函数。
:::

<br/>

**细节**

```java
class Person
{
	private String name;
	private int age;
  /*
	Person () {
		System.out.println("A: name=" + name + ", age=" + age);
	}
  */
	Person (String n) {
		name = n;
		System.out.println("B: name=" + name + ", age=" + age);
	}

	Person (String n, int a) {
		name = n;
		age = a;
		System.out.println("C: name=" + name + ", age=" + age);
	}
}

class PersonDemo
{
	public static void main(String[] args){
		Person p1 = new Person();
		/*
		Person p2 = new Person("lisi");
		Person p3 = new Person("zhangsan", 10);
		*/
	}
}
```

运行结果：编译失败

```bash
PS E:\资源\java-code> javac test.java
test.java:76: 错误: 对于Person(没有参数), 找不到合适的构造器
                Person p1 = new Person();
                            ^
    构造器 Person.Person(String)不适用
      (实际参数列表和形式参数列表长度不同)
    构造器 Person.Person(String,int)不适用
      (实际参数列表和形式参数列表长度不同)
1 个错误
```

:::tip 小结
自定义构造函数后，系统将不会自动添加默认的构造函数。所有调用无参数构造器就失败。
:::

### 构造函数与一般函数的区别

- 构造函数与一般函数在写法上不同
- 在运行上不同：构造函数是在对象一建立就运行，给对象初始化。而一般函数是对象调用才执行，是给对象添加对象具备的功能。
- 一个对象建立，构造函数只执行一次，而一般函数可以被该对象调用多次。

### 构造代码块

```java
class Person
{
	private String name;
	private int age;
	/*
		构造代码块：作用是给对象进行初始化。对象一建立就执行，并且优先于构造函数先执行。
		构造代码块是给所有的对象进行初始化。而构造函数只对对应的构造器生成的对象进行初始化。
		构造代码块中定义的是不同对象共性的内容。
	*/
	{
		System.out.println("构造代码块!");
	}

	Person () {
		System.out.println("A: name=" + name + ", age=" + age);
	}

	Person (String n) {
		name = n;
		System.out.println("B: name=" + name + ", age=" + age);
	}

	Person (String n, int a) {
		name = n;
		age = a;
		System.out.println("C: name=" + name + ", age=" + age);
	}
}
```

## this关键字

### 使用this区分局部变量和成员变量
```java
class Person
{
	private String name;
	private int age;
	Person (String name) {
		name = name; // 当局部变量与成员变量同名时，就会优先使用局部变量（就近原则），所以此时对象调用speak方法，就不会打印初始化赋值的name值。解决这个问题就需要使用this关键字。
	}

	Person (String n, int a) {
		name = n;
		age = a;
	}

  void speak () {
    System.out.println("name=" + name + ", age=" + age);
  }
}
```

::: tip 注意
this 用于区分局部变量和成员变量同名情况, 因为this代表本类的对象。
简单的说就是哪个对象在调用this所在的函数，this就代表哪个对象。
:::

### this关键字的基本应用
> 需求：给人定义一个用于比较年龄是否相等的功能。也就是判断是否是同龄人。
```java
class Person
{
	private String name;
	private int age;
  Person (int age) {
    this.age = age;
  }
  // 判断是否是同龄人
	public boolean compare (Person p) {
		return this.age == p.age; // 这里就是使用this代表当前调用该函数的对象
	}
}

class PersonDemo
{
	public static void main(String[] args){
		Person p1 = new Person(12);
		Person p2 = new Person(24);
		Person p3 = new Person(12);
		System.out.print(p1.compare(p2)); // false
		System.out.print(p1.compare(p3)); // true
	}
}
```

### 使用this完成构造函数之间的相互调用
```java
class Person
{
	private String name;
	private int age;
	Person (String name) {
		this.name = name; // 必须放在第一行
  }

	Person (String name, int age) {
		// this.name = name;
    this(name);
		this.age = age;
	}
}
```

::: danger 注意
使用this调用其他构造函数，必须放在构造函数的第一行。
:::


## static 关键字
用于修饰成员（成员变量或者是成员方法），不能修饰局部

### static修饰后的成员具备的特点
* 随着类的加载而加载（类一加载进内存就会加载）
* 优先于对象存在。（先有类在有对象，注意上一条特性）
* 被所以对象所共享。（所有对象都共享静态成员）
* 可以直接被类名调用。也可以被对象调用
```java
class Person
{
	String name;
	static String country = "CN"; // 这样所有对象都公用这个数据，并且修改会影响全部对象
	
	public void show () {
		System.out.print("name=" + name + ",country=" + country);
	}
}

class StaticDemo
{
	public static void main(String[] args){
		Person p = new Person();
		System.out.println(p.country);
		System.out.println(Person.country);
	}
}
```

### static在内存的特征
<img :src="$withBase('/images/java/java static在内存中的位置.png')" alt="java static在内存中的位置">

> 静态会单独在开闭一块内存空间来存储。

### 使用static的注意项
* 静态方法只能访问静态成员。
* 静态方法中不能有this、super关键字：因为static优先于对象存在，所以不能使用this、super关键字
* 主函数是静态的

### 主函数的定义
- public：代表着该函数的访问权限是最大的。
- static：代表着主函数随着类的加载就已经存在了。
- void：代表主函数没有具体的返回值
- main：不是关键字，但是是一个特殊的单词，可以被虚拟机识别。 主函数是固定的，被jvm识别
  - String[] args: main函数的参数，参数是一个字符串数组。


```java
class MainDemo
{
	public static void main(String[] args){
		/*
			主函数是给jvm调用的，在使用java 命令运行class文件时，后面跟带参数的，如：
			java test "aa" "bb" "cc"
		*/

		for (int i = 0;  i < args.length; i++)
		{
			System.out.print(args[i]); // 即可打印出通过java命令后带的参数。
		}
		// 其次，因为是主函数是静态的，因此可以在函数类使用类名调用
		String[] arr = {"this", "my", "args"};
		MainDemo.main(arr);

	}
}
```

### 静态的应用
> 使用静态封装工具类
```java
class ArrayTools{
	// 私有化空参数构造函数，使该类不能创建对象。
	private ArrayTools(){}

	// 获取数组中的最大值
	public static int getMax(int[] arr){
		int max = arr[0];
		for (int i = 1, len = arr.length; i < len; i++){
			if (max < arr[i]) {
				max = arr[i];
			}
		}

		return max;
	}

	// 将数组选择排序
	public static int[] selectSort (int[] arr) {
		for(int i = 0; i < arr.length; i++){
			for (int j = i ; j < arr.length; j++) {
				if (arr[i] > arr[j]) {
					changeArray(arr, i, j);
				}
			}
		}
		return arr;
	}

	// 旋转值
	private static void changeArray (int[] arr, int a, int b) {
		int temp = arr[a];
		arr[a] = arr[b];
		arr[b] = temp;
	}
}
```
```java
// ArrayToolsDemo.java
class ArrayToolsDemo{
	public static void main(String[] args){
		int[] arr = {2, 3, 6, 4 ,12, 32, 20};
		// 主函数发现ArrayTools，首先在当前目录下找ArrayTools.class文件，没有在找一遍ArrayTools.java, 有就编译它，没有在去classpath路径找，还是没找到就报错。
		System.out.println(ArrayTools.getMax(arr));

		// 排序
		int[] res = ArrayTools.selectSort(arr);
		for (int i = 0; i < res.length; i++)
		{
			System.out.print(res[i] + ",");
		}
	}
}
```

:::warning 提示
使用别人给的工具类时，可能不在当前运行类的目录下，这时运行就是报错，解决这个问题有2个思路，1：就是将别人的工具类放在当前运行类同目录。2：设置classpath路径，让虚拟机在指定的路径下去找，当然这时候得注意下，设置classpath的时候记得带上当前位置，否则会出现运行类不存在设置的classpath路径下，就会出现编译成功，运行失败的现象。应该这样设置：set classpath = .;别人工具类所在路径; (注意 “.” 代表当前目录)
:::

### 帮助文档的制作javadoc
> 当我们编写好工具类后，通常会把编译好的class文件给别人使用，但是class文件是电脑能识别的文件，因此我们需要给这个class制作使用说明书。类似java api文档那样。

```bash
javadoc -d 导出的路径 java文件
# 执行命令后，java将会将改java文件中的所有文档注释，生成对应的文档说明。
```

### 静态代码块
* 格式
```java
static {
	// 静态代码块中的执行语句。
}
```
* 特点：随着类的加载而执行，但是只执行一次。
```java
class StaticCode{
	static {
		System.out.println("a");
	}

  public static void show () {
    System.out.println("show run");
  }
}

class StaticCodeDemo{
	static {
		System.out.println("b");
	}
	public static void main ( String[] args){
		new StaticCode(); // 创建对象，会找对象的类，此时就会打印对应的静态代码块。
		new StaticCode(); // 再次new staticCode()，因为StaticCode已经在内存中了，就不会在打印了。
		System.out.println("over");


    // 不使用new StaticCode() 的方式，也能是加载StaticCode.class。（直接使用类名.静态成员 也要加载对应的class文件）
    StaticDemo.show();  // 打印 a，show run
	}
	static {
		System.out.println("c");
	}
}

// 打印顺序 b c a over
```

## 对象的初始化过程
```java
class Person{
	private String name = "name"; // 显示初始化
	private int age;
	private static String Country = "CN";
	
	Person(String name, int age){
		this.name = name;
		this.age = age;
	}

	{
		System.out.print("name=" + name + ", age=" + age);
	}

	public void setName(String name) {
		this.name = name
	}

	public void speak() {
		System.out.print("name=" + name + ", age=" + age);
	}
	public static void showCountry(){
		System.out.println("country=" + country);
	}
}

class PersonDemo{
	public static void main(String[] args) {
		Person p = new Person();
	}
}

/*
Person p = new Person(); 程序到底做了什么

1. 以为new 用到了Person.class文件，所以会先找到Person.class文件并加载到内存中。
2. 执行该类中的static代码块，如果有的话，给Person.class类进行初始化。
3. 在堆内存在开辟空间，分配内存地址
4. 在堆内存中建立对象的特有属性，并进行默认初始化。
5. 对属性进行显示初始化
6. 对对象进行构造代码块初始化。
7. 对对象进行对应构造函数初始化。
8. 将内存地址赋值给栈内存中的p变量。
*/

```

## 对象调用成员的过程
<img :src="$withBase('/images/java/java对象的调用过程.png')" alt="java对象的调用过程">


## 单例设计模式
> 解决一个类在内存中只存在一个对象。

### 想要保证对象的唯一
* 为了避免其他程序过多的建立该类对象，先禁止其他程序建立该类对象。
* 为了让其他程序可以访问到该类对象，只好在本类中，自定义一个对象。
* 为了方便其他程序对自定义对象的访问，可以对外提供一些访问方式。


### 单例设计模式方式1（饿汉式）
> 先初始化对象, Single类一进内存就创建了对象（开发一般用这个）
```java
class Single{
	private int num;
	private Single(){} // 步骤1
	static Single single = new Single(); // 步骤2 

	public void setNum(int num) {
		this.num = num;
	}
	public int getNum(){
		return num;
	}

	public static Single getInstance(){ // 步骤3
		return single;
	}
}

class SingleDemo{
	public static void main(String[] args){
		Single s1 = Single.getInstance();
		Single s2 = Single.getInstance();
		s1.setNum(23);

		System.out.println(s2.getNum()); // 23
	}
}

/*
类该怎么描述就怎么描述。
想要该类成为单例对象，只需要加上以上三个步骤就行了。
*/

```

### 单例设计模式方式2（懒汉式）
> 调用方法时才初始化。
```java
class Single{
	private int num;
	private Single(){} // 步骤1
	static Single single = null // 步骤2 

	public void setNum(int num) {
		this.num = num;
	}
	public int getNum(){
		return num;
	}

	public static Single getInstance(){ // 步骤3
		if(single == null) 
			single =  new Single();
		return single
	}
}
```
