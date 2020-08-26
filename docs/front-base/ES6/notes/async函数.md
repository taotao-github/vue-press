# async函数
> async函数是Generator函数的语法糖。async函数就是将Generator函数的星号（*）替换为async，将yield替换为await，并相对Generator做了以下4点的改进。

1. 内置执行器
   Generator函数的执行必须依靠执行器，所以才有了co模块（Generator自执行），async函数自带执行器，因此async函数的执行与普通函数一致。

2. 更好的语义
   async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。

3. 更广的使用性
   co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）。

4. 返回值是Promise
   async函数的返回值是Promise对象。await命令就是内部then命令的语法糖。

## 基本语法
> async 函数返回的是一个Promise对象，可以使用then添加回调函数。当函数执行时，一旦内部遇到await就会先返回，等待一步操作完成，在接着执行函数体内后面的语句。

```javascript
// 指定多少毫秒后输出值
function timeout(value, time) {
  return new Promise(function(resolve, reject) {
    setTimeout(function(){
      console.log(value)
      resolve(value)
    }, time)
  })
}

async function test(value, time) {
  await timeout(value, time);
  console.log('输出结束')
}
```

**async函数有多种声明形式**
```javascript
// 函数声明
async function foo(){}

// 函数表达式
let foo = async function() {}

// 对象方法
let obj = {
  async foo(){}
}
obj.foo().then()

// class的方法
class Storage {
  constructor() {
    this.cachePromise = caches.open('avatars');
  }

  async getAvatar(name) {
    const cache = await this.cachePromise;
    return cache.match(`/avatars/${name}.jpg`);
  }
}

let storage = new Storage()
storage.getAvatar('test').then()

// 箭头函数

const foo = async () => {}
```

## 语法

### 返回Promise对象
async返回一个Promise对象。async函数内部return语句返回的值，会成为then方法回调函数的参数。
```javascript
  async function foo() {
    return 123
  }
  foo().then(res => {console.log(res) }) // 123
```

async函数内部抛出错误，会导致返回的Promise对象变为reject状态。抛出的错误对象会被catch的回调函数接收到。
```javascript
  async function f() {
    throw new Error('出错了');
  }

  f().then(
    v => console.log(v),
    e => console.log(e)
  )
  // Error: 出错了
```