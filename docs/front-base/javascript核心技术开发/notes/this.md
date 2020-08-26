# 7. this
> 前面我们知道，但函数被调用执行时，会创建改函数的执行上下文，在上下文的创建阶段会生成变量对象，确认作用域链以及this的指向。所以我们要牢记，当前函数的this是在函数被调用执行时才确定下来的。

:::tip 注意
如果当前执行上下文处于函数调用栈栈顶，那么这个时候的变量对象就会变为活动对象，同时确定this的指向。正是这个原因才导致一个函数内部的this到底指向谁是非常灵活且不确定的。这也是this难以理解的真正原因所在。
:::

```javascript
var a = 10
var obj = {
  a: 20
}
function fn() {
  console.log(this.a)
}

fn() // 10
fn.call(obj) // 20

// 通过a输出结果的不同，我们可以知道this分别指向了window和obj
```

## 7.1 全局对象中的this
> 在前面的学习我们知道，全局对象中的this是个特殊的存在，它指向了自身。因此相对简单没有更多复杂特殊的情况
```javascript
// 通过this绑定到全局对象
this.a = 20

// 通过声明绑定变量对象，在全局对象中，变量对象就是它本身
var a2 = 10

// 仅仅通过赋值，标识符会隐式绑定到全局对象
a3 =  30
```

## 7.2 函数中this
> 通过前面的例子可知，同一个函数中的this由于调用方式的不同导致this的指向不同，因此this最终指向谁跟调用该函数的方式息息相关。

在一个函数的执行上下文中，this由该函数的调用者提供，有调用函数的方式来决定this的指向。
```javascript
function fn() {
  console.log(this)
}
fn() // fn为调用者。
```
**如果调用者被一个对象所拥有，那么调用该函数时，内部的this指向该对象。如果是调用者函数独立调用，那么该函数内部的this执行undefined，但是在非严格模式中，当this指向undefined时，会默认自动指向window。**
```javascript
// 为了能够准确判断我们在函数内部使用严格模式，因为非严格模式，this会自动指向window
function fn() {
  'use strict';
  console.log(this)
}
fn() // undefined fn为调用者，独立调用，this为undefined
window.fn() // window fnw为调用者，但是fn为window所拥有，this指向window
```

> 函数是独立调用，还是被某个对象拥有，值非常容易辨别的，综合上面的例子结合下面的例子进行分析。
```javascript
var a = 20
var obj = {
  a: 40
}
function fn() {
  console.log('fn this: ', this)
  function foo() {
    console.log(this.a)
  }
  foo()
}

fn.call(obj) // fn this: obj,  20
fn() // fn this: window,  20
```
这个例子中，fn的调用方式不同，this的指向会有所不同。但是无论fn如何调用，在fn执行时，foo始终是独立调用，this始终指向undefined，但是由于是非严格模式，foo中的this自动指向window，所以都会输出20。


> 再来一个例子
```javascript
'use strict';
var a = 20
function fn() {
  var a = 1
  var obj = {
    a: 10,
    c: this.a + 20
  }
  return obj.c
}

console.log(window.fn()) // 40
console.log(fn()) // 报错 TypeError: Cannot read property 'a' of undefined
```
这个例子中，对象字面量的写法不会产生自己的作用域，因此在demo02中的obj.c上的this并不会指向obj，而是与foo函数内部的this保持一致。

> 再来一个例子
```javascript
var a = 20
var foo = {
  a: 10,
  getA: function() {
    return this.a
  }
}
var test = foo.getA
console.log(foo.getA()) // 10
console.log(test()) // 20
```
这是一个非常容易理解错误的例子，但是我们只有牢记调用者独立调用与调用被某个对象所拥有得区别，就不会出错了。
在foo.getA()执行时，getA为调用者，getA为foo所拥有，因此getA函数内部的this指向了foo，这点就是与上一例对象字面量的区别。test()执行时，test为调用者，虽然test与foo.getA的引用指向同一函数，但是调用的方式不同，test引用的函数getA内部this指向了undefined，并自动指向window。


**测试思考题**
```javascript
// dome4
// 'use strict'; 严格模式将会报错
function foo() {
  console.log(this.a)
}

function active(fn) {
  fn()
}

var a = 20
var obj = {
  a: 10,
  getA: foo,
  active: active
}
active(obj.getA) // 20
obj.active(obj.getA) // 20
```
根据上面例子分析改例子，fn始终为独立调用，this在非严格模式下始终指向window。

```javascript
// dome5
var n = 'window'
var object = {
  n: 'object',
  getN: function(){
    return function (){
      return this.n
    }
  }
}

console.log(object.getN()()) // window
```
getN为调用者，为object的所拥有，因此getN内部this指向object，但是getN返回一个匿名函数（object.getN()此时返回的是一个函数的索引），object.getN()()执行时，实质为独立执行，因此this指向undefined，并自动指向window


## 7.3 call/apply/bind显示指定this
> 在Javascript内部中提供了一种可以手动设置函数内部this的指向，它们就是call/apply/bind。

```javascript
var a = 20
var obj = {
  a: 40
}
function fn(){
  console.log(this.a)
}

// 正常调用函数fn()
fn() // 20

// 使用call/apply
fn.call(obj) // 40
fn.apply(obj) // 40

```
**当函数调用 call/apply 时，函数会立即执行，并改变函数内部的this指向。call和apply都会改变this的指向，不同之处在于它们的传参方式不同。**
call的第一个参数是为函数内部指定this的指向，后续的参数则是函数函数执行时传递的参数。apply的第一个参数与call一致，不同就是后续的传参是通过数组的形式就行传递。

```javascript
function fn(num1, num2) {
  return this.a + num1 + num2
}

var a = 20
var obj = { a: 40 }

// 正常执行
fn(10, 10) // 40

// call
fn.call(obj, 10, 10) // 60

// apply
fn.apply(obj, [10, 10]) // 60
```

**bind也能指定函数内部的this，但是它与call/apply有所区别**
但函数调用call/apply时，函数内部的this被显示指定，并且函数会立即执行。而使用bind时，函数并不会立即执行，而是返回一个新的函数，这个函数与原函数有着共同的函数体，但又非原函数，并且新函数的参数和this指向都已经被绑定，参数为bind的后续参数。
```javascript
function fn(num1, num2){
  return this.a + num1 + num2
}

var a = 20
var obj = { a: 40 }
var _fn = fn.bind(obj, 1, 2)
_fn() // 43
_fn(1, 4) // 43 因为参数已经被绑定，因此重新传递参数是无效的
```



