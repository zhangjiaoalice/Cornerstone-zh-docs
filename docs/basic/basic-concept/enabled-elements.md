# Enabled Elements
*在 Cornerstone 中，Enabled Element 是一个 HTMLElement 通常是一个 `div`, 是我们显示图像的容器*

##### 为了能顺利渲染医学影像图像,我们需要进行以下几个步骤的操作:
1. 下载 `Cornerstone Core` 库，并将下载的库引入到我们的项目中
2. 根据图像格式的类型（DICOM、Niffti、PNG、JPG），选择对应的 图像加载器 (`Image Loaders`) 加载图像
3. 将 加载显示图像(容器) 的元素（element）添加到我们的 DOM 中
4. 设置容器的 css 样式（宽度、高度）
5. 调用 `enabled()` API,准备显示图像
6. 调用 `loadImage()` API， 加载图像
7. 调用 `displayImage()` API, 渲染加载的图像 

##### 以 Vue 为例，展示加载，显示图像的过程
[查看完整示例，请移步GitHub](https://github.com/zhangjiaoalice/cornerstone-usage.git) 
```javascript
<template>
  <div class="container">
    <div ref="image-viewport" id="image-id">医学影像成像平台</div>
  </div>
</template>

<script>
import * as cornerstone from "cornerstone-core";
import cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
import cornerstoneWebImageLoader from "cornerstone-web-image-loader";
import dicomParser from "dicom-parser";
cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
cornerstoneWebImageLoader.external.cornerstone = cornerstone;
export default {
  name: "ImageViewport",
  mounted() {
    var exampleImageId = "dicomweb://localhost:3000/dicom1.dcm";
    var element = document.getElementById("image-id");
    cornerstone.loadImage(exampleImageId).then(function (image) {
      cornerstone.displayImage(element, image);
      var viewport = {
        invert: false,
        pixelReplication: false,
        voi: {
          windowWidth: 400,
          windowCenter: 200,
        },
        scale: 1.4,
        translation: {
          x: 0,
          y: 0,
        },
      };

      cornerstone.setViewport(element, viewport);
      cornerstone.updateImage(element);
    });
  },
};
</script>
```




