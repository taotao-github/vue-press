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


## 单例设计模式
