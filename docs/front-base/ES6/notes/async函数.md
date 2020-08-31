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

### Promise对象的状态变化
> async韩束1返回的Promise对象，必须等到所有的await后面的Promise执行完毕，才会发生状态变化，除非遇到return或者抛出错误。也就是只有async内部所有的异步操作执行完成，才会执行then方法指定的回调函数。

```javascript
async function getTitle(url) {
  let response = await fetch(url);
  let html = await response.text();
  return html.match(/<title>([\s\S]+)<\/title>/i)[1]; // return 返回值自动包裹为Promise
}
getTitle('https://tc39.github.io/ecma262/').then(console.log)

// 上面代码中，函数getTitle内部有三个操作：抓取网页、取出文本、匹配页面标题。只有这三个操作全部完成，才会执行then方法里面的console.log。
```

### await命令
> 正常情况下，await后面跟着一个Promise对象，返回对象的结果（resolve返回的结果，如果是reject状态则直接被async函数catch捕获），如果不是Promise对象，则直接返回对应的值

```javascript
  async function foo() {
    await 123 // 等同于return 123
  }
  foo().then(res) //123
```

另一种情况，await后面跟着一个thenable对象（定义了then方法的对象），await会将其视为Promise对象
```javascript
class Sleep{
  constructor(timeout) {
    this.timeout = timeout
  }
  then(resolve, reject) {
    const startTime = Date.now()
    setTimeout(() => resolve(Date.now() - startTime), this.timeout)
  }
}

(async () => { // async匿名函数
  const sleepTime = await new Sleep(1000);
  return sleepTime
})().then(res => console.log(res));
```
await命令后面是一个Sleep对象的实例。这个实例不是 Promise 对象，但是因为定义了then方法，await会将其视为Promise处理。

借助await命令就可以让程序停顿指定的时间实现休眠效果（可以用于倒计时设计）
```javascript
function countdown(time){ // 多久倒计一次
  return new Promise((resolve, reject) => {
    if (typeof time !== 'number') {
      reject(new Error('require number, but' + typeof time))
    }
    setTimeout(resolve, time)
  })
}

// 使用
async function countdownTest(total, time) {
  for(let i = total; i > 0; i--) {
    console.log(i)
    await countdown(time)
  }
}

countdownTest(60, 1000)
```

任何一个await语句后面的 Promise 对象变为reject状态，那么整个async函数都会中断执行。(直接跳入catch)
```javascript
async function f() {
  await Promise.reject('出错了');
  await Promise.resolve('hello world'); // 不会执行
}
```

我们希望前一个一步处理失败，不要中断后续的异步操作。这时就需要结构try-catch进行处理。
```javascript
async function f() {
  try {
    await Promise.reject('出错了');
  } catch{

  }
  return await Promise.resolve('hello world');
}

f().then(v => console.log(v)) // hello world
```


另一种方法是await后面的 Promise 对象再跟一个catch方法，处理前面可能出现的错误。(这种方法就是处理出错的Promise，使程序继续执行)
```javascript
async function f() {
  // 可能出错的地方
  await Promise.reject('出错了').catch(error => { console.log(error) })
  return await Promise.resolve('hello world');
}

f().then(res => console.log(res))
```

## 使用注意点

1. await命令做reject处理
   ```javascript
   // 使用try...catch处理
   async function myFunction() {
      try {
        await somethingThatReturnsAPromise();
      } catch (err) {
        console.log(err);
      }
    }

    // 使用reject catch处理
    async function myFunction() {
      await somethingThatReturnsAPromise()
      .catch(function (err) {
        console.log(err);
      });
    }
   ```
2. 不存在相互依赖的await，最好让他们同时触发。
   ```javascript
   let foo = await getFoo()
   let bar = await getBar()
   
   // foo与bar相互独立，不存在相互依赖。如果写成继承关系，这样就比较耗时，完全可以让他们同时触发。
   // 写法1
   let [foo, bar] = Promise.all([getFoo(), getBar()])

   // 写法2
   let fooPromise = getFoo()
   let barPromise = getBar()
   let foo = await fooPromise
   let bar = await barPromise
   ```
3. await只能用在async函数中，用于普通函数就会报错
4. 

