# Objects (内置对象)

## vec2 
*vec2 是一个二维向量*
* type: <font color=green>Object</font>
* params: 
    * <font color=green>x</font>: Number
    * <font color=green>y</font>: Number

### 什么是二维向量？
* 二维向量也称为 二维矢量，是一种几何对象，它存在于一个平面或者二维空间中，由两个分量组成（x和y），这些分量描述了向量的位置和方向
* 二维向量可以进行个各种运算，如加法、减法、数乘（标量乘法）等

### 二维向量在医疗影像图像处理中的应用
* **<font color=green>图像分割:</font>** 在医学影像中，图像分割是将图像中特定区域与背景或其他区域分离的过程，二维向量可以用于表示像素或区域的颜色和强度信息,从而用于识别和分割特定的组织结构
* **<font color=green>特征提取:</font>** 通过分析 二维向量，可以提取出图像中的各种特征如边缘、纹理和形状。这些特征可以用于疾病的诊断或分析病变的性质和程度
* **<font color=green>图像配准:</font>** 在医学影像中，图像配准是将不同时间点或不同图像来源的图像对齐的过程。二维向量可以用于表示图像之间的变换，如平移、缩放和旋转。从而实现图像的精确对齐
* **<font color=green>可视化:</font>** 通过将二维向量转换为颜色或者灰度值，可以将医学影像转换为易于理解和解释的形式，例如，可以将组织或者器官的密度信息映射到颜色上，可以帮助医生更好地识别病变或异常
* **<font color=green>模型建立:</font>** 基于二维向量的数据，可以建立各种预测和分类模型，用于疾病的诊断和治疗方案的预定，通过分析患者影像，可以预测疾病的发展趋势或评估治疗效果


## VOI
* type: <font color=green>Object</font>
* params: 
    * <font color=green>windowWidth</font>: Number 类型，窗口宽度
    * <font color=green>windowCenter</font>: Number 类型, 窗口剧中显示


