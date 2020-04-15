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
}

class extendsDemo{
  public static void main(String[] args){
    Zi z = new Zi();
    System.out.print("z.num:" + z.num);
  }
}

```

1. 变量
    * 当父类的变量与子类的变量同名时，子类对象调用时，子类变量将会覆盖父类的同名变量。当然子类也可以通过super关键字去访问同名的父类变量。