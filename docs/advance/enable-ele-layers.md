# Enabled Element Layers
**可以向当前的 <font color=green>Enabled ELement(显示图像的容器)</font>图层中添加额外的数据或者信息图层,将来自多个源的图像数据组合（融合）在一起，创建一个综合的图像，通过添加额外的图层，Cornerstone 不仅限于显示单一的图像，还能融合来自多个源的数据，提供更丰富、多维的可视化效果**

***

## 使用Enabled Element Layers
*<font color=green>Enabled Element Layers AIP</font> 允许开发人员使用Cornerstone添加构建一组复合图像*

### Enabled Element（图像显示容器）图层基础
1. 一个 <font color=green>Enabled Element</font> 上可以有多个图层
2. 每个图层都有自己对应的 图像、视口、离屏渲染画布(rendering canvas)等
    * `离屏渲染`： 通常用于预渲染或以特定的方式处理图像，然后再将其显示在屏幕上
3. 每次只能有一个图层处于激活状态
4. 图层都有 <font color=green>visibilty</font> 和 <font color=green>opacity</font> 两个关键属性，并且每个图层都有唯一的标识符（ID），这个标识符用于在系统内部或者其他系统之间引用特定的图层，确保数据的一致性和准确性

### 当图层处于激活状态时
1. 可以通过 <font color=green>enabledElement.image</font> 获取到当前图层的图像对象
2. 可以通过 <font color=green>enabledElement.viewport</font> 获取到当前图层的视口对象
    * <font color=green>setViewport、getViewport</font> 等类似的函数可以在激活状态的图层中调用

### 和图层操作相关的一些方法
1. 通过 <font color=green>addLayer</font> 方法添加新的图层
2. 通过 <font color=green>getLayer(layerId)</font> 方法，根据图层id获取图层信息
3. 通过 <font color=green>removeLayer(layerId)</font> 方法，移除对应图层id 的图层

### 图层操作的附加功能
1. 通过 <font color=green>getActiveLayer</font> 可以当前处于激活状态下的图层
2. 通过 <font color=green>getLayers</font> 可以获取到所有图层的数组
3. 通过 <font color=green>getVisibleLayers</font> 可以获取到所有可见图层数组

