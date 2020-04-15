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