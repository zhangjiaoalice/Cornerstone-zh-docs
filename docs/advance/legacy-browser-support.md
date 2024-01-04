# 低版本浏览器的兼容
**Cornerstone 可以通过集成 polyfills 来支持低版本浏览器的一些特性，通过这种方式，可以扩大Cornerstone 的 兼容范围,使得更多的用户和设备能使用 Cornerstone 的功能和特性**
***

## Polyfills
*根据我们的目标浏览器，我们可能需要包含以下功能的 polyfills:*
1. <font color=green>Promise</font> 是用于表示异步操作结果对象，<font color=green>Image Loader</font> 解析图像之后会返回一个 Promise 对象。 虽然在许多现代浏览器中，这个对象已经被内置了，但是,在IE 11 中并不支持这个 api，如果要在 IE11 中使用 <font color=green>Image Loader</font> 就需要使用 Polyfill 模拟 promise 的特性，确保代码能正常运行.
2. <font color=green>requestAnimationFrame</font> 是浏览器内置的用于执行高性能动画的API， 但是低版本浏览器器不支持这个API, Cornerstone 会检查当前浏览器对 <font color=green>requestAnimationFrame</font> 的支持性，如果不支持就使用 Polyfill 来模拟它的特性
3. <font color=green>performance.now()</font> 这个方法是一个高精度的时间测量方法,常用与性能监测和测量代码执行的时间。为了确保所有浏览器都能正确运行Cornerstone 的应用， Cornserstone 通过 polyfills 模拟 preformance.now() 来处理浏览器对这个api的兼容性问题
4. <font color=green>WebGL</font> 在Cornerstone 中是一个可选的高性能渲染路径中的硬件加速器，但是在一些浏览器中仍然存在兼容性的问题，这是在默认情况下不启用 WebGL 加速渲染管道的原因。目前 Cornerstone 提供了针对WebGL 失败后备途径，以便可以通过 HTML5 Canvas API 继续渲染
