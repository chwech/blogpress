# js面试题
## 原型和原型链
1. 如何判断一个变量是数组类型
``` javascript
var arr = []
// 不能跨iframe检测
arr instanceof Array // true

// 原生方法，ie9+
Array.isArray(arr) // true

// toString没被改写时有效
Object.prototype.toString.call(arr) === '[object Array]' // true
```
2. 写一个原型链继承的例子
3. 描述new一个对象的过程
4. zepto(或其他框架)源码中如何使用原型链
## 作用域和闭包
1. 说一下对变量提升的理解
2. 说明this几种不同的使用场景
3. 创建10个`<a>`标签,点击的时候弹出来对应的序号
4. 如何理解作用域
5. 实际开发中闭包的应用
## web-api
1. 原生ajax实现?
``` javascript
var xhr = new XMLHttpRequest()
xhr.onreadystatechange = function() {
  if (xhr.readystate == 4 && xhr.status == 200) {
    console.log(xhr.responseText)
  }
}
// get请求
xhr.open('GET', 'test.php?data=1')
xhr.send(null)
// post请求
xhr.open('POST', 'test.php')
xhr.send('data=1&data1=2')
```