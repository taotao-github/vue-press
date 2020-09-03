# JavaScript 观察者模式与发布订阅模式

## 观察者模式和发布订阅模式有什么区别？
<img :src="$withBase('/images/javascript设计模式/观察者模式与发布订阅模式的区别.png')" alt="观察者模式与发布订阅模式的区别">

观察者模式： 观察者（Observer）直接订阅（Subscribe）主题（Subject），而当主题被激活的时候，会触发（Fire Event）观察者里的事件。

发布订阅模式： 订阅者（Subscriber）把自己想订阅的事件注册（Subscribe）到调度中心（Topic），当发布者（Publisher）发布该事件（Publish topic）到调度中心，也就是该事件触发时，由调度中心统一调度（Fire Event）订阅者注册到调度中心的处理代码。

## 观察者模式
> 定义对象间一种一对多的依赖关系，当目标对象Subject（被观察者）的状态（自定义的某个属性）发生变化时，所有依赖它的对象Observe（观察者）都会得到通知。

### 模式特征
1. 一个目标对象Subject，拥有方法：添加 / 删除 / 通知 Observe
2. 多个观察者对象Observe，拥有方法：接受Subject的状态变更通知并处理
3. 目标对象Subject变更时，通知所有的观察者Observe。
4. Subject添加一系列Observe；Subject负责维护与这些Observe之间的联系，“你对我有兴趣，我更新时就会通知你”

### 代码实现
```javascript
// 目标对象（Subject）
class Subject{
  constructor(){
    this.observe = []
  }

  // 添加观察者
  add(observe) {
    this.observe.push(observe)
  }

  // 删除观察者
  delete(observe){
    const index = this.observe.findIndex(observe => observe === observe)
    this.observe.splice(index, 1)
  }

  // 通知所有Observe
  notify() {
    for(let observe of this.observe){
      observe.update()
    }
  }
}

// 观察者（Observe）
class Observe{
  constructor(name) {
    this.name = name
  }

  // 更新方法
  update() {
    console.log(this.name + '收到更新通知')
  }
}

let s = new Subject()
let o1 = new Observe('观察者001')
let o2 = new Observe('观察者002')
let o3 = new Observe('观察者003')

s.add(o1)
s.add(o2)
s.add(o3)

// 当目标对象某个属性变化，通知所有观察者
s.notify()
```

### 优缺点
1. 优点：目标者和观察者，功能耦合度降低，各自专注自身功能。观察者被动接受更新，时间上解耦，实时接受目标者更新状态。
2. 缺点：观察者虽然实现了对象间的低耦合，但是却无法对事件进行细分管控：所有观察者都会一起执行更新。


## 进阶版的观察者模式 -> 发布订阅模式
> 两种模式类似，但是发布订阅模式多了个“第三者”（事件中心）。发布订阅模式：基于一个事件（主题）通道，希望接受通知的对象（Subscriber）通过自定义事件订阅主题，被激活事件的对象Publisher通过发布主题事件的方式通知各个订阅该主题的 Subscriber 对象。

发布订阅模式与观察者模式的不同，“第三者” （事件中心）出现。目标对象并不直接通知观察者，而是通过事件中心来派发通知。

### 代码实现
```javascript
// 事件中心
let  PubSub = {
  list: {},

  // 订阅
  subscribe: function (key, fn) {
    if (!this.list[key]) {
      this.list[key] = []
    }
    this.list[key].push(fn)
  },

  // 发布
  publish: function (key, ...args){
    for(let fn of this.list[key]){ // 订阅的同一key的事件，全部执行
      fn.call(this, ...args)
    }
  },

  // 取消订阅
  unSubscribe: function(key, fn) {
    // 如果不存在改类型的订阅，返回false
    if(!this.list[key]) return false
    // 如果不传递fn，则同一这个类型的订阅
    if(!fn) {
      this.list[key] = []
    } else {
      this.list[key].forEach((item, index) => {
        if (item === fn) {
          this.list[key].splice(index, 1)
        }
      })
    }
  }
}

// 订阅
PubSub.subscribe('test', () => {
  console.log('test类型的订阅1')
})
PubSub.subscribe('test', () => {
  console.log('test类型的订阅2')
})

let test3 = function(){
  console.log('test类型的订阅3')
}
PubSub.subscribe('test', test3)

// 事件中心向test类型发布消息，所有test类型将受到通知，触发事件
PubSub.publish('test')


// 取消test3的订阅
PubSub.unSubscribe('test', test3)


// 事件中心再次向test类型发布消息，test3将不会触发
PubSub.publish('test')

```