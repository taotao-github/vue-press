  let a = {
    value: 1
  };
  
  function getValue(name, age){
    console.log(name);
    console.log(age);
    console.log(this.value);
  }
  
  // getValue.call(a, 'jck', '24');
  // getValue.apply(a, ['jsck', '20']);
  
  
  /**
  * 模拟实现 Call 和 apply
  * 可以从以下几点来考虑如何实现
  * 1.不传入第一个参数，那么默认为 window
  * 2.改变了 this 指向，让新的对象可以执行该函数。那么思路是否可以变成给新的对象添加一个函数，然后在执行完以后删除
  */
  Function.prototype.myCall = function(context = window, ...args) {
    // 防止直接调用Function.prototype.myCall()
    if(this === Function.prototype){
      return undefined;
    }
    debugger;
    context = context || window;
    const fn = Symbol();
    context[fn] = this; // 关键点this指向getValue，并将getValue函数作为context（这里测试就是a对象）的属性
    const result = context[fn](...args); // 通过context[fn]调用getValue函数，实质就是a对象在调用
    delete context[fn];
    return result;
  }
  
  getValue.myCall(a, 'kk', '28'); // 'kk' '28' 1
  