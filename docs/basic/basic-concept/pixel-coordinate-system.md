# Pixel Coordinate System
**当我们在图像中需要定位和处理单个像素的时候会使用 `Pixel Coordinate System(像素坐标系)`, 像素坐标系以图像左上角为坐标原点(0.0, 0.0)， 然后图像的行和列时从左向右、从上到下的依次增加，右下角的像素值是图像想的最后一行和最后一列**
*** 

## 像素坐标系中的常用方法
1. `pageToPixel()` 可以将我们从浏览器事件中获取到的坐标转换为像素坐标。当我们执行(点击、移动鼠标)等操作网页中的元素时，可以根据浏览提供的（点击、鼠标）事件对象获取到元素的坐标信息。这些坐标信息是基于网页的，并不是基于单个元素的。`pageToPixel()` 方法可以将这些坐标信息转换为单个的像素坐标，这在我们进行像素级别的图像处理和分析的时候非常有帮助。
2. `setToPixelCooperativeSystem()` 可以将 canvas context 设置为像素坐标系。 这个方法在对于在加载的图像上绘制或处理像素级别的几何形状非常有用。当我们与图像交互(平移、缩放、旋转)的时候，我们需要知道如何在像素坐标中定位或者绘制特定的几何形状.`setToPixelCoorperativeSystem()` 方法可以帮助我们在图像上执行绘制操作的时候是在正确的坐标系中完成的，从而确保绘制出正确的几何形状。
3. 像素坐标系统与DICOM标准之间的关系: 像素坐标系与 `DICOM 灰度软拷贝演示状态图形注释模块` 中指定的坐标系统相匹配。`DICOM 灰度软拷贝演示状态图形注释模块` 用于注释使用 `PIXEL 注释` 单位绘制的图形。DICOM（Digital Imaging and Communications in Medicine）是医学影像和通信的国际标准，用于规范医学图像的存储、传输、打印和管理。`灰度软拷贝演示状态图形注释模块` 是 DICOM 中的一个特定模块。这个模块定义了医学图像上的图形注释的坐标系统
    * “PIXEL注释单位: 指的是使用像素作为度量单位的注释单位
    * 在处理医学图像时，像素是非常重要的度量单位，因为它们直接与图像的分辨率和显示效果相关
    * `通过匹配 像素坐标系 和 DICOM标准中的坐标系统，我们可以确保在处理和展示医学图像时的一致性和准确性`
4. 使用 `Math.ceil()` 方法将像素坐标转换为整数值像素编号(用于在像素数据中查找像素值)

## 像素坐标系与浏览器坐标系转换示例
```javascript
const ele = document.querySelector('.cornerstone-element');
ele.on('cornerstoneimagerendered', (e) => {
    this.cornerstone.setToPixelCoordinateSystem(e.detail.enabledElement, e.detail.canvasContext));
    let context = e.detail.canvasContext;
    context.save();
    context.strokeStyle = 'green';
    context.beginPath();
    context.lineWidth = 1 / e.detail.viewport.scale;
    context.strokeRect(100, 100, 100, 100);
    context.restore();
})
```

