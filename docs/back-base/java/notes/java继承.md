# java继承

## 继承的概念
1. 提高了代码的复用性
2. 让类与类之间产生了关系，有个这个关系，才有了多态的特性。
```java
class Person{
  String name;
  int age;
}
class Student extends Person{
  void study(){
    name = "zhangsan";
    System.out.print(name);
  }
} 

```

* java只支持单继承，不支持多继承。，因为多继承容易带来安全隐患 -- 当多个父类中定义了相同名字的功能函数，当子类继承后调用就不知道调用的是那个父类的功能了。

* java支持多层继承。


## 子父类中变量的特点
```java
class Fu{
  int num =  4;
}

class Zi extends Fu{
  int num = 5;
  void show () {
     // 使用super调用父类的变量
    System.out.println(super.num);
  }
  // 如果子类中出现非私有的同名变量，子类要访问本类中的变量用this，要访问父类中的同名变量要使用super
}

class extendsDemo{
  public static void main(String[] args){
    Zi z = new Zi();
    System.out.print("z.num:" + z.num);
  }
}

```

::: tip 注意
 当父类的变量与子类的变量同名时，子类对象调用时，子类变量将会覆盖父类的同名变量。当然子类也可以通过super关键字去访问同名的父类变量。
 :::

 ## 子父类中函数的特点（重写）
 > 当子类出现和父类一样的函数时，当子类调用该函数，会运行子类函数的内容，这样的情况称为函数的覆盖，也叫重写。
```java
class Fu{
  void show(){
    System.out.print("Fu show");
  }
}

class Zi extends Fu{
  void show () {
    System.out.print("zi show");
  }
}

class extendsDemo{
  public static void main(String[] args){
    Zi z = new Zi();
    z.show(); // zi show
  }
}
```