# Canvas基本绘图API

## 获取绘制上下文

```js
// cvs为canvas元素
const ctx = cvs.getContext("2d");
// 之后使用上下文对象ctx完成后续绘图
```

- 所有的绘图都必须在上下文中完成
- 同一个canvas元素只能产生唯一的上下文
- 上下文类型可以是：
  - 2d：绘制2d图形
  - bitmaprenderer：绘制位图上下文
  - webgl：绘制3d的上下文，只在实现[WebGL](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API)版本 1(OpenGL ES 2.0) 的浏览器上可用
  - webgl2：绘制3d的上下文，只在实现 [WebGL](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API) 版本 2 (OpenGL ES 3.0) 的浏览器上可用

## Context2D绘图

通过`cvs.getContext('2d')`，

会产生一个`CanvasRenderingContext2D`对象，它里面包含非常多的绘图方法。

利用这些绘图方法，我们可以完成下列图形的绘制：

1. 直线

   有简易版的矩形API

2. 曲线

   有简易版的椭圆API

3. 文字

4. 图片

利用上面基本形状以及它们的组合，再配合它提供的各种样式设置，就可以完成任意二维图像的绘制。

完整的API：https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D#reference

中文版：https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D