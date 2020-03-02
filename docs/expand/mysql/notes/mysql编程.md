# 12、mysql编程
## 12.1、mysql编程中语句块包含符
其实就相当于js、java、php等语言的代码块（作用域—大括号）语法: 
```sql
[标识符:] begin
    # 语句...
end [标识符];

标示符就是关键字，如
if (条件判断) begin
   # 语句。。
end;

if (条件判断)
  A: begin
    # 语句。。
end;

# A就是标识符，它的作用就是标识该语句块，以可以在该语句块中使用它 -- 其实就是退出。
```

## 12.2、mysql编程 – 流程控制
### 12.2.1、if 语句
```sql
if 条件语句 then 
  begin 
    # 语句块...
  end; # 注意end后面有个分号
elseif 条件语句 then
  begin
    # 语句块...
  end;
# 若干个elseif语句块...
else
  begin
    # 语句块...
  end;
end if; # elseif 和 else 可以有，也可以没有（根据实际需求）
```

### 12.2.2、case语句
类似 js 中，switch case 语法
```sql
case case_value
  when when_value1  then statement_list1 // 如果case_value 与 when_value1相等，选择statement_list1，statement_list1可以为begin … end; 语句块
  when when_value2  then statement_list2
  ...
  else statement_list3
end case;
```
举例：
```sql
case @v1
  when 1  then
    begin 
      # ...
    end;
  when 2  then
    begin 
      # ...
    end;
  else
    begin 
      # ...
    end;
end case;
```
或者
```sql
case
  when search_condition1  then statement_list1 # 如果search_condition1 条件为真 ，执行statement_list1
  when search_condition2  then statement_list2
   ...
  else statement_list3
end case;
```
举例：
```sql
case
  when @v1 > 1  then
    begin 
      # ...
    end;
  when @v1 < 0  then
    begin 
      # ...
    end;
  else
    begin 
      # ...
    end;
end case;
```

### 12.2.3、loop语句
```sql
[标识符:] loop
    begin
      # 这里是循环的语句块
      # 注意：这里必须有一个“退出循环”的逻辑机制。否则循环就是死循环，基本形式类似这样：
      if (条件) then
        leave [标识符] # 退出循环
      end if;
    end;
  end loop [标识符];
```
举例：

### 12.2.4、while语句
```sql
[标识符:] while search_condition do
  begin
    # ...
  end;
end while [标识符]; # 注意：while 语句内的语句或者语句群会被重复执行，直至search_condition由真变为假。
```
举例：
```sql
set @v1 = 1; # 赋值语句
while @v1 < 10 do
  begin
    insert into tab1 (id, name) values (null, @v1);
    set @v1 = @v1 + 1;
  end;
end while;
```

### 12.2.5、repeat语句
```sql
[标识符:] repeat
  statement_list # 循环语句块，begin ... end；其中想要退出，可以使用leave语句或者repeat 配合until实现（类似break）
  until search_condition # 条件维斯真就跳出循环
end repeat [标识符]
```
举例：
```sql
set @v1 = 1
repeat
  begin
    insert into tab1 (id, name) values(null, @v1);
    set @v1 = @v1 + 1;
  end;
  until @v1 >= 10; # 条件维斯真就跳出循环
end repeat;
```

### 12.2.6、leave语句
语法：
```sql
leave [标识符] # 其作用是用来退出begin…end;结构或者其他具有标识符的结构。
```

## 12.3、mysql 变量
mysql中有两种变量形式：普通变量（不带@符号）和会话变量（带有@符号）
### 12.3.1、普通变量
1. 定义形式：
```sql
declare 变量名 类型名 [default 默认值]
```
2. 赋值形式：
```sql
set 变量名 = 值
```
3. 使用方式：直接使用变量名
4. 使用场所：只能子编程环境中使用。

编程环境：
* 定义函数的内部
* 定义在存储过程的内部
* 定义触发器的内部

### 12.3.2、会话变量
1. 定义形式：
```sql
set @变量名 = 值
```
2. 使用方式：直接使用@变量名
3. 使用场所：基本上哪里都能使用

### 12.3.3、变量的赋值形式
1. 语法1（针对普通变量）：
```sql
set 变量名 = 值;  # 此语法中变量必须先使用daclare声明。
```
2. 语法2（针对会话变量）
```sql
set @变量名 = 值；#此方式可以无需daclare先声明，而是直接赋值。
```
3. 语法3（针对会话变量）
```sql
select @变量名: = 表达式；# 此语句会给该变量赋值，同时还会作为一个select 语句输出结果集。
```
4. 语法4（针对会话变量）
```sql
select 表达式 into @变量名; #此语句虽然看起来是select语句，但是其实不输出结果集，而只是给变量赋值。
```

举例：
```sql
mysql> set @v1 = 1;
Query OK, 0 rows affected (0.00 sec)

mysql> select @v2 := 2;
+----------+
| @v2 := 2 |
+----------+
|        2 |
+----------+
1 row in set, 1 warning (0.00 sec)

mysql> select 3 into @v3;
Query OK, 1 row affected (0.00 sec)

mysql> select @v1, @v2, @v3;
+------+------+------+
| @v1  | @v2  | @v3  |
+------+------+------+
|    1 |    2 |    3 |
+------+------+------+
1 row in set (0.00 sec)

mysql>
```

## 12.4、函数（存储函数）
函数。也可说成“存储函数”，其实就是js所说的函数。唯一的区别就是：这里的函数必须返回一个数据（值）

### 12.4.1、语法形式
1. 定义
```sql
create function 函数名(形参1 类型1, 形参2 类型2)
returns 返回类型 # 可以实mysql中的任意类型：int float date char等
begin
  # 这里写完整的函数语句
  return xx值; # 必须有return 语句，且返回的类型要跟设定的类型一致
end;
```

2. 注意：
* 在函数中，可以定义各种变量和流程控制的使用
* 在函数中，也可以有各种增删改语句
* 在函数中，不能有select 或者其他“返回值”的查询类语句。

### 12.4.2、调用形式
跟调用内部函数一样，比如 select now(), 8+3, func1(); 这里now()是内部函数，func1()是自定义的函数。或者在编程语句中使用：set @v1 = now(); set @v2 = func1();。举例如下：
```sql
mysql> create function getMaxValue(p1 float, p2 float, p3 float)
    -> returns float
    -> begin
    -> declare result float;
    -> if (p1 >= p2 and p1 >=p3) then
    -> begin
    -> set result = p1;
    -> end;
    -> elseif(p2 >= p1 and p2 >=p3) then
    -> begin
    -> set result = p2;
    -> end;
    -> else
    -> begin
    -> set result = p3;
    -> end;
    -> end if;
    -> return result;
    -> end;
    -> * # 这里使用*号作为语句结束符，因为函数中有 ‘;’号，我们需要更改语句结束符。方式：delimiter + 自定义符号
ERROR 1418 (HY000): This function has none of DETERMINISTIC, NO SQL, or READS SQL DATA in its declaration and binary logging is enabled (you *might* want to use the less safe log_bin_trust_function_creators variable)
# 这里报错，原因：这是我们开启了bin-log, 我们就必须指定我们的函数是否是
# 1 DETERMINISTIC 不确定的
# 2 NO SQL 没有SQl语句，当然也不会修改数据
# 3 READS SQL DATA 只是读取数据，当然也不会修改数据
# 4 MODIFIES SQL DATA 要修改数据
# 5 CONTAINS SQL 包含了SQL语句
# 解决方式；在创建函数之前，执行以下语句：
# set global log_bin_trust_function_creators=TRUE;（临时有效）
# 永久有效：在配置文件/etc/my.cnf的[mysqld]配置log_bin_trust_function_creators=1
mysql> set global log_bin_trust_function_creators=TRUE *
Query OK, 0 rows affected (0.00 sec)

mysql> create function getMaxValue(p1 float, p2 float, p3 float)
    -> returns float
    -> begin
    -> declare result float;
    -> if (p1 >= p2 and p1 >=p3) then
    -> begin
    -> set result = p1;
    -> end;
    -> elseif(p2 >= p1 and p2 >=p3) then
    -> begin
    -> set result = p2;
    -> end;
    -> else
    -> begin
    -> set result = p3;
    -> end;
    -> end if;
    -> return result;
    -> end;
    -> *
Query OK, 0 rows affected (0.01 sec)
mysql> select getMaxValue(1.0, 34.0, 12.0) as max*
+------+
| max  |
+------+
|   34 |
+------+
1 row in set (0.00 sec)
```


### 12.4.3、删除函数
形式：
```sql
# drop function 函数名
mysql> drop function getMaxValue *
Query OK, 0 rows affected (0.01 sec)

mysql> select getMaxValue(1.0, 34.0, 12.0) as max *
ERROR 1305 (42000): FUNCTION test.getMaxValue does not exist
mysql>
```

## 12.5、存储过程
我们常用的操作数据库语言SQL语句在执行的时候需要要先编译，然后执行，而存储过程（Stored Procedure）是一组为了完成特定功能的SQL语句集，经编译后存储在数据库中，用户通过指定存储过程的名字并给定参数（如果该存储过程带有参数）来调用执行它。
一个存储过程是一个可编程的函数，它在数据库中创建并保存。它可以有SQL语句和一些特殊的控制结构组成。当希望在不同的应用程序或平台上执行相同的函数，或者封装特定功能时，存储过程是非常有用的。数据库中的存储过程可以看做是对编程中面向对象方法的模拟。它允许控制数据的访问方式。

### 12.5.1、语法形式
```sql
create procedure 存储过程名 ([in | out | inout] 形参1 类型1, [in | out | inout] 形参2 类型2, ...)
begin
  # 这里写完整的过程中语句
  # 其中可以有各种流程控制
  # 还可以有增、删、查、改等等
  # 其中查询语句（select）会作为存储过程调用的结果，跟执行select语句一样，返回结果集。
end

# 说明：
#   in，用于设定该变量是用来“接收实参数据”的，即传入；默认不写，就是in
#   out，用于设定该变量是用来“存储存储过程中的数据，即“传出”，即函数中必须对它赋值。
#   inout：就是in和out的结合，具有双向作用。
#   对于，out和inout的设定，对应的实参，就必须是一个变量，因为该变量是用于“接收传出数据”
```

### 12.5.2、调用形式
使用：
```sql 
call 存储过程名(实参1，实参2，…)  进行调用存储过程。
```
举例：
```sql
# 创建一个存储过程，将3个数据写入到表tab_int中，并返回该表的第一个字段的前三大值的行。
mysql> delimiter $
mysql> create procedure inesrt_get_data(p1 int, p2 tinyint, p3 int)
    -> begin
    -> insert into tab_test(f1, f2, f3) values (p1, p2, p3);
    -> select * from tab_test order by f1 desc limit 0, 3;
    -> end;
    -> $
Query OK, 0 rows affected (0.01 sec)
mysql> call inesrt_get_data(101, 102, 103)$
+------+------+------+
| f1   | f2   | f3   |
+------+------+------+
|  123 |  123 |  123 |
|  123 |  123 |  123 |
|  123 |  123 |  123 |
+------+------+------+
3 rows in set (0.01 sec)

Query OK, 0 rows affected (0.02 sec)
```

使用in、out和inout
```sql
mysql> delimiter $
mysql> create procedure pro1(in p1 int, out p2 tinyint, inout p3 int)
    -> begin
    ->   set p2 = p1 * 2;
    ->   set p3 = p3 + p1 * 3;
    ->   insert into tab_test(f1, f2, f3) values(p1, p2, p3);
    -> end;
    -> $
Query OK, 0 rows affected (0.01 sec)

mysql> call pro1(1, 2, 3)$ # 该存储过程第2、3个形参有out，就需要对应的实参为变量，这里不是，所以报错
ERROR 1414 (42000): OUT or INOUT argument 2 for routine test.pro1 is not a variable or NEW pseudo-variable in BEFORE trigger
mysql> set @v3 = 3; $ # 正确的方式
Query OK, 0 rows affected (0.00 sec)

mysql> call pro1(1, @v2, @v3) $
Query OK, 1 row affected (0.01 sec)

mysql> select @v2, @v3 $
+------+------+
| @v2  | @v3  |
+------+------+
|    2 |    6 |
+------+------+
1 row in set (0.00 sec)

mysql>
```

### 12.5.3、删除存储过程
```sql
  drop procedure 存储过程名;
```

## 12.6、触发器
触发器，也是一段预先定义好的编程代码（跟存储过程和存储函数一样），并有个名字。但是，它不能调用，而是在某个表发生某个事件（增删改）的时候，会自动触发而调用起来。

### 12.6.1、定义形式
```sql
create tigger 触发器名 触发时机 触发事件 on 表名 for each row
begin
  # 这里才是编程的位置，也就是触发器的内部语句
end;

# 说明：
# 1. 触发时机，只有2个：before（在…之前）和after（在…之后）
# 2. 触发事件，只有3个：insert、delete和update
即触发器的含义就是，在某个表上进行insert（或delete或update）之前（或之后），会去执行其中写好的代码（语句）；即每个表只有6个情形可能调用该触发器。通常。触发器用于在对某个表进行增删改操作的时候，同时去做另外一件事情。

# 3. 在触发器内部，有两个关键字代表某种特定的含义，可以用来获取数据。 
#   a) new： 代表当前正要执行的insert或者update的时候的“新行”数据；通过它，可以获取这一新数据的任意一个字段的值，形式为：
#     set @v1 = new.id // 获取该新插如或者update行的id字段的值。（前提有id字段）
#     set @v2 = new.age // 同上
#   b) old：代表当前正要执行的delete的时候的旧行数据，通过它可以获取这一旧行数据的任意一个字段的值。形式为：
#     set @v1 = old.id   // 获取该旧行的上的id字段的值
#     set @v2 = old.age // 同上 

```





### 12.6.2、触发器案例
定义一个触发器，表tab_test插入一行数据的时候，能够同时将这个表中的第一个字段的最大值的行写入另一表tab_max
```sql
  mysql> create trigger tri1 after insert on tab_test for each row
    -> begin
    ->   # 删除tab_max中所有数据
    ->   delete from tab_max;
    ->   # 获取tab_test表f1字段最大值，并存入#maxf1中
    ->   select max(f1) into @maxf1 from tab_test;
    ->   # 将@maxf1作为条件查出改行的其他两个字段
    ->   select f2 into @p2 from tab_test where f1 = @maxf1;
    ->   select f3 into @p3 from tab_test where f1 = @maxf1;
    ->   # 插入
    ->   insert into tab_max(f1, f2, f3) values(@maxf1, @p2, @p3);
    -> end;
    -> $
Query OK, 0 rows affected (0.01 sec)

mysql> select * from tab_max$
Empty set (0.00 sec)

mysql> # 向tab_test表插入数据
mysql> insert into tab_test(f1, f2, f3) values(132, 13, 132);$
Query OK, 1 row affected (0.01 sec)

mysql> select * from tab_max;$  # 查看tab_max中的数据，有说明触发器触发成功。
+------+------+------+
| f1   | f2   | f3   |
+------+------+------+
|  132 |   13 |  132 |
+------+------+------+
1 row in set (0.00 sec)

mysql>
```

### 12.6.3、删除触发器
```sql
drop trigger 触发器名
```