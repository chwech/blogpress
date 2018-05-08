# css水平垂直居中总结
## 水平居中
1. 定宽块级元素，左右margin设置为auto
``` css
// html
<div class="box"></div>

// css
.box {
  height: 300px;
  background-color: green;
  /* 关键代码 */
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}
```
demo: [定宽块级元素水平居中](https://codepen.io/chwech/pen/ergbEm)
2. 内联元素，父元素设置text-align: center
``` css
// html
<div class="parent">
  <span class="child">文字水平居中</span>
</div>

// css
.parent {
  text-align: center;
}
```
demo: [内联元素水平居中](https://codepen.io/chwech/pen/yjgGvB)
## 垂直居中
1. 单行文本垂直居中  
单行内联元素（包括inline,inline-block,inline-table,inline-flex,etc.）垂直居中，设置内联元素display:block后height和line-height相等或父元素height和line-height相等。（父元素高度确定的单行文本）
``` css
// html
<div class="box1">
  <span>单行文本垂直居中</span>
</div>
<div class="box2">
  单行文本垂直居中
</div>
// css
div.box1 {
  height: 100px;
  line-height: 100px;
  background-color: green;
}
div.box2 {
  height: 100px;
  line-height: 100px;
  background-color: yellow;
}
```
demo: [单行文本垂直居中](https://codepen.io/chwech/pen/OZOYGO)
## 水平垂直居中
1. 绝对定位元素水平垂直居中  

有三种方法可实现绝对定位元素水平垂直居中，第一种方法：
``` css
// html
<div class="absolute"></div>

// css
.absolute {
  width: 300px;
  height: 300px;
  background-color: green;
  
  position: absolute;
  top: 50%;
  left: 50%;
  /* 位置调整，调整成宽高的一半 */
  margin-left: -150px;
  margin-top: -150px
}
```
demo: [绝对定位元素水平垂直居中(一)](https://codepen.io/chwech/pen/rvjENK)  
此方法兼容性良好，但是缺点是需要知道绝对定位元素的宽度和高度。
由于需要知道元素宽度和高度，所以有了以下改进的方法。利用css3变换位移。
``` css
// html
<div class="absolute">要居中的div</div> 

// css
.absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  /* translate百分比值是相对于自身宽高计算 */
  transform: translate(-50%, -50%);
}
```
demo: [绝对定位元素水平垂直居中(二)](https://codepen.io/chwech/pen/ELZBoJ)  
此方法不需要知道元素宽度和高度，但是由于使用了css3 transform，兼容为ie9(-ms-)以上浏览器。还有一种方法，弥补了以上两种方法的缺点，不需要知道元素的宽高，兼容ie8以上浏览器。
``` css
// html
<img class="absolute" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1315688446,1836897379&fm=27&gp=0.jpg" alt="">

// css
.absolute {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
```
demo: [绝对定位元素水平垂直居中(三)](https://codepen.io/chwech/pen/bMgXZJ)  
如果绝对定位元素是其它不包含尺寸的元素，需随便设置一个尺寸才能居中。如果是图片这种自包含尺寸的元素，则无需设置。  



