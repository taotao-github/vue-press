# JavaScript 观察者模式与发布订阅模式

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