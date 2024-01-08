# Objects (内置对象)

## vec2 
*vec2 是一个二维向量*
* Type: <font color=green>Object</font>
* Properties: 
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
*VOI 对象是图像帧关联的，可以在不同的图像帧之间进行复制、移动和组合等操作，这使得用户能够轻松地在多个图像之间共享和操作感兴趣的区域。在Cornerstone中 使用VOI对象可以实现更高级的图像处理和分析功能，例如定量分析、病变监测和对比度增强等*

*VOI 对象可以具有不同形状和尺寸，如矩形、圆形、椭圆等。通过在图像上绘制和调整VOI的边界，用户可以定义感兴趣的区域，一旦定义了感兴趣的区域，可以对该区域进行各种操作，例如像素提取、计算统计量、进行图像分割等*
*Type: <font color=green>Object</font>
* Properties: 
    * <font color=green>windowWidth</font>: Number 类型，窗口宽度
    * <font color=green>windowCenter</font>: Number 类型, 窗口剧中显示


## LUT
*LUT 对象是一种用于存储像素值映射关系的数组，通过使用LUT对象可以方便的实现感兴趣区域（VOI）的LUT转换，从而提高图像的对比度和可读性。临床医生可以通过调整窗宽、窗位等参数来更好的观察和分析图像中的细节信息, 从而更好地进行诊断和治疗*
* Type: <font color=green>Object</font>
* Properties: 
    * <font color=green>firstValueMapped</font>: Number 类型
    * <font color=green>numBitsPerEntry</font>: Number 类型
    * <font color=green>lut</font>: Array 类型

## ImageStat
*ImageStat 是一个包含有关<font color=green>图像统计信息</font>的对象,这些统计信息可以帮助我们更好的理解图像的一些重要特征，例如像素强度范围、平均强度值等。在医学成像中，这些信息可以更好的帮助医生了解图像的特征和内容，从而做出更准确的判断*

* Type: <font color=green>Object</font>
* Properties:
    * <font color=green>lastGetPixelDataTime</font>: Number 类型, 表示检索存储的像素以绘制图像所需的时间，单位是 ms
    * <font color=green>lastStoredPixelDataToCanvasImageDataTime</font>: Number 类型, 表示将存储的像素数组映射到 canvas 像素数组所需要的时间，单位是 ms。
        * 这个时间可以帮助开发者了解图像渲染的性能瓶颈，如果这个时间很长，意味着渲染的效率不高，可能需要优化代码或者使用更高效的算法来提升渲染速度。
        * 通过监控和优化这个时间，可以提升应用程序的性能和用户体验
    * <font color=green>lastPutImageDataTime</font>: Number 类型, 表示将 canvas 像素数据添加到 canvas context 中所需的时间，单位是ms
        * 这个时间可以钢珠开发者更好的优化图像渲染性能，如果这个时间较长，意味着渲染效率较低，需要采取一些措施来提高渲染速度(例如，可以减小渲染图像的大小、使用 Web Worker执行异步渲染、使用硬件加速等方法来提高渲染性能)
        * 通过监控和优化这个时间，可以提升应用性能和用户体验
    * <font color=green>lastRenderTime</font>: Number 类型, 表示执行整个渲染函数所需的总时间，单位是 ms。
        * 了解整个渲染流程花费的总时间可以帮助开发者更好的了解应用的性能瓶颈。如果总时间过长，意味着渲染性能低下，需要采取一些措施来提高渲染速度（例如，可以通过优化代码、使用更高效的算法、减少不必要的计算方法来提高渲染性能）
        * 通过监控和优化总时间，可以提升应用性能和用户体验
    * <font color=green>lastLutGenerateTime</font>: Number 类型, 表示生成图像查找表（LUT）所需的时间，单位是 ms
        * 了解这个时间，可以帮助开发者更好的了解应用程序的性能瓶颈，如果这个时间过长，可能意味着查找表的效率不高，需要采取一些措施来提高生成的速度（例如， 可以通过优化算法、减少不必要的计算等方法来提高生成查找表的性能）
        * 通过监控和优化这个时间，可以提高应用性能和用户体验

## Image
*Image 对象包含了像素数据以及与图像相关的元数据和属性*
* Type: <font color=green>Object</font>
* Properties:
    * <font color=green>imageId</font>: String 类型, 与图像关联的图像ID, 每个图像的唯一标识符，通过这个ID，可以找到图像相关的元数据和其他信息,以便更好地处理和显示图像.
    * <font color=green>minPixelValue</font>: Number 类型, 图像中存储的最小像素值，这个值可以帮助我们确定图像的最暗部分，并用于进一步处理和操作图像。
        * 处理图像数据时，每个像素都有一个与之关联的值，这个值表示该像素的强度或者颜色。这些值通常存储在一个数组或者数据结构中，以便后续处理和显示
        * 了解图像的最小像素值，对于图像处理和增强是非常重要的，因为它可以提供有关图像对比度和亮度的有用信息.
    * <font color=green>maxPixelValue</font>:  Number 类型， 图像中存储的最大像素值，这个值可以帮助我们确认图像中最亮的部分，并用于进一步处理和操作图像。
        * 了解图像的最大像素值, 对于图像处理和增强是非常重要的，因为它可以提供有关图像对比度和亮度的有用信息
    * <font color=green>slope</font>: Number 类型,用于将存储的像素值转换为 模态像素（modality pixel） 值的 <font color=green>缩放斜率</font>，默认为1
        * 在医学图像处理中，图像数据通常以不同的模态（例如，CT、MRI、X射线等）和不同的数据类型（例如灰度、彩色等）存储的，为了正确地处理和显示这些图像，需要将存储像素值转换为适当的模态像素值(modality pixel)
        * 缩放斜率 可以将存储的像素值线性变换为所需的 模态像素值(modality pixel) 值， 这个斜率是根据图像的特性和处理需求来确定的，以确保图像的正确显示和解释
        * 了解缩放斜率对于正确处理和显示医学图像非常重要，因为它影像到图像的对比度和动态范围
    * <font color=green>intercept</font>: Number 类型, 用于将存储的像素值转化为模态像素（modality pixel）值的<font color=green>缩放截距</font>，默认为 0
        * 缩放截距 是另一个用于将存储像素转化为模态像素值的参数
        * 缩放截距是一个偏移量，用于调整像素值的转换。通常用于补偿不同模态之间差值，以确保图像的正确显示和解释
        * 了解缩放截距非常重要，因为它对与正确处理和显示医学图像非常重要，因为它影像到图像的对比度和动态范围。
        * 通过调整 缩放斜率和缩放截距，可以更好的控制图像显示效果，使其更符合医生的诊断需求.
    * <font color=green>windowCenter</font>: Number 类型，默认窗口中点，用于调整图像的显示范围和对比度，决定了图像的亮度中心和对比度的范围，从而影响医生对图像的解读。
        * 默认 窗口中心点 是指在没有特别指定的情况下应用于图像的窗口中心点的值。通过设置 windowCenter,可以确保图像的显示效果符合常见的诊断标准和时间，提高图像的可读性和准确想。
        * 了解 windowCenter 对于正确处理和显示医学图像非常重要，因为它可以帮助医生更好地解读和评估图像的内容，通过调整 windowCenter 可以突出感兴趣区域或改善图像的对比度，从而更好的识别病变或结构
    * <font color=green>windowWidth</font>: Number 类型, 图像默认窗口宽度，用于调整图像的显示范围和对比度。窗口的宽度决定可图像对象的对比度范围，从而影响医生对图像的解读
        * 了解 windowWidth 对于正确处理和显示医学图像非常重要，因为它可以帮助医生更好的解读和评估图像的内容
        * 通过调整 windowWidth,可以控制图像的对比度和动态范围，从而更好的识别病变或结构。
        * 适当调整 windowWidth， 还可以提高图像的视觉效果，使其更易于分析和解释
    * <font color=green>getImageData</font>: Function 类型，获取图像数据（image data）的方法，返回值是一个 canvas 的 ImageData 对象，这个对象包含可图像的像素数据以及图像的宽度、高度。这个对象通常用于获取、修改和操作图像数据，例如图像的亮度和对比度、应用滤镜等。这个方法在处理彩色图像时会用到.
        * 对于彩色图像，像素值通常包含 红、绿、蓝三个通道的信息，因此需要使用ImageData 对象来处理这些通道的信息。通过获取和操作 ImageData 对象，可以更好的控制图像的显示效果和特性，以瞒住特定的需求或者提高图像的可读性和准确性
        * <font color=green>getImageData</font> 返回的 ImageData 对象提供了一种机制，用于获取和处理图像的像素数据，以便进一步的处理和操作。这对于图像处理和增强任务来说是非常重要的，可以帮助开发者更好地管理和操作图像数据，提高应用程序的性能和用户体验.
    * <font color=green>getCanvas</font>: Function 类型, 用于获取 显示和处理彩色图像的 canvas 对象
        * 当处理彩色图像的时候，需要将图像加载到 canvas 中，以便进行进一步的绘制和处理操作，通过返回一个包含已加载图像的canvas元素，开发者可以轻松的将图像绘制到 canvas 上，并进行各种视觉效果和交互操作.
        * <font color=green>getCanvas</font> 这个函数返回的canvas 对象提供了一种机制，使开发者可以更方便的处理显示彩色图像。通过canvas 的 API 进行交互，可以实现对图像的处理和增强效果，例如缩放、旋转、裁剪、滤镜等
        * <font color=green>getCanvas</font> 这个函数对于需要处理和显示彩色图像的应用程序来说是非常有用的，提供了一种简单的方式来加载和处理图像，并使用canvas 对象进行绘制和显示。这样可以提高应用程序的性能和用户体验，使得开发者能够更好地控制和定制图像的显示效果
    * <font color=green>getImage</font>: Function 类型, 用户获取包含图像信息的 Image 对象, 通过这个函数，开发者可以更方便的处理和操作以 Web 格式编码的图像。通过使用Image对象，可以轻松读取、修改和显示这些图像数据，从而增强应用程序的性能和用户体验。
        * 当图像以标准 Web JPEG 或 PNG 格式编码时，这些格式通常包含了图像数据的完整描述。包括像素值、颜色信息和可能的元数据。通过返回一个 Image 对象，开发者可以使用这些数据，或者通过其他的方式进行进一步的处理和操作
        * 在使用这个函数时，应该先了解图像的格式和数据结构，以确保正确地处理和操作图像数据。
    * <font color=green>rows</font>: Number 类型,  表示图像的行数，即图像的高度。图像的行数决定了图像在垂直方向上的像素数量。在许多情况下，图像的高度和行数都是相同的，重复提供不同的变量时为了提供更多的上下文或为了方便使用
        * 了解图像的行数对于处理和操作图像数据非常重要。例如在调整图像大小或者进行其他图像处理任务时，需要找到图像的高度或者行数，以便正确的应用变换或算法
        * rows 是为了提供更多的上下文或明确性，尤其是在某些情况下，图像的高度和行数，可能在不同场合被强调或需要独立指定是。在实践中，通常根据具体的应用和需求来确定是否需要提供这些额外的信息。
    * <font color=green>columns</font>: Number 类型, 表示图像的列，即图像的宽度，图像的列数决定了图像在水平方向的像素数量。在许多情况下，图像的列数和图像的宽度是相同，重复提供这两个变量是为了提供更多的上下文或是为了方便使用。
        * 了解图像的列数对于处理和操作图像数据是非常重要的。例如，在调整图像大小或者进行其他图像处理任务是，需要知道图像的宽度或列数，以便正确地应用变换或算法
        * 图像的宽度和列数可能在不同的场合被强调或者独立指定。在实践中，通常需要开发者根据具体的应用和需求来确定是否需要提供这些额外的信息
    * <font color=green>height</font>: Number 类型， 图像的高度
    * <font color=green>width</font>: Number 类型，图像的宽度
    * <font color=green>color</font>: Boolean 类型，用于判断图像的像素数据是 RGB 格式还是, 灰度格式, 为true 是表示是RGB格式，false表示 灰度格式。
        * RGB 像素格式通常用于显示彩色图像
        * 灰度格式 只包含亮度信息，没有颜色信息
    * <font color=green>lut</font>: Object 类型， 用于将像素的RGB值映射到相应的灰度值上，从而提高图像处理的速度和效率
    * <font color=green>rgba</font>: Boolean 类型， 用于判断图像的像素数据是否以 RGBA 的格式存储
    * <font color=green>columnPixelSpacing</font>: Number 类型，表示像素之间的水平距离，以mm 为单位
        * 像素之间的距离决定了图像的分辨率
    * <font color=green>rowPixelSpacing</font>: Number 类型，表示像素之间的垂直距离，以mm为单位
    * <font color=green>invert</font>: Boolean 类型， 这个参数表示图像的初始显示方式，特别是对于DICOM格式的图像， 如果出事状态下图像以反转的方式显示则为true，否则为false
        * 当 DICOM 图像 的 photometric interpretation 被设置为 `MONOCHROME1`(表示图像亮度信息的参数)，那么图像就是以反转的形式显示的，即黑白颠倒
    * <font color=green>sizeInBytes</font>: Number 类型， 用于存储图像像素所使用的字节数
    * <font color=green>falseColoe</font>: Boolean 类型，用于标识图像是否已经经过了假色处理
        * 假色处理是一种图像处理技术，通过将灰度图像或者低色彩图像映射到高色彩图像，使其呈现出生动的颜色效果
        * 图像经过了假色处理之后，就可能不再是原始的灰度或低彩色图像了，而是经过颜色映射算法的处理后能呈现出生动颜色效果的图像
        * 如果图像没有经过假色处理，它坑还是原始的灰度或者低彩色图像
        * 这个参数信息对于了解图像的处理历史和呈现效果非常重要
    * <font color=green>origPixelData</font>: Array 类型， 经过假色映射后的图像的原始像素数据
    * <font color=green>stats</font>: ImageStats 类型, 图像最后一次重绘的统计数据
        * 重绘图像一般是在图像显示时，由于某些原因（如窗口大小调整、图像旋转等）需要重新绘制图像的过程
        * 重绘统计数据（像素数量、重绘时间、重绘频率）可以帮助我们了解图像重绘的性能和效率，以及是否存在性能瓶颈或优化空间
    ```javascript
    interface ImageStats {
        lastGetPixelDataTime: number;
        lastStoredPixelDataToCanvasImageDataTime: number;
        lastPutImageDataTime: number;
        lastRenderTime: number;
        lastLutGenerateTime: number;
    }
    ```
    * <font color=green>cachedLut</font>: Object 类型, 图像对象的缓存查找表
        * 缓存查找表是为了提高图像处理速度而建立的临时数据结构
        * 在图像处理中，查找表同样用于将像素值映射到相应的颜色或灰度值中， 通过缓存查找表可以避免重复计算和查找，从而提高图像处理的效率
        * 缓存查找表通常在图像处理的过程中创建，并存储了预先计算好的映射关系。在处理图像是，可以直接使用缓存查找表中的数据，而不需要重新计算映射关系，这样可以大大减少计算时间和加载速度，提高图像处理效率
        * 缓存查找表是一种临时的数据结构，仅用于加速图像处理过程，并不会永久保存图像数据，处理完成之后，缓存查找表会被释放或者清除，以释放内存空间
    * <font color=green>colorMap</font>: 已废弃，建议使用 `viewport.colormap` 代替
    * <font color=green>labelmap</font>: Boolean 类型, 用于标识是否条跳过 modality 和 VOI 查找表(LUT)的管道，只使用颜色查找表
        * 标签映射通常用于图像处理和计算机视觉任务，其中每个像素区域被分配一个标签或类别。在这种情况下，标签映射通常用图像分割或分类任务，其中每个像素或区域被赋予一个特定的颜色或调色板，以及其所属的类别或组
        