# Image Ids
*在Cornerstone中 `Image Ids` 是一个用于标识 单个图像的 URL*

* Cornerstone 使用 `Image Id` 中的 URL 方案来确定调用哪个图像加载器插件(`Image Loaders`)来实际加载图像。
* 该策略允许 Cornerstone 同时显示通过不同协议从不同服务器获得的多个图像。
* 例如，Cornerstone 可以显示通过 WADO 加载器 加载的 DICOM CT 图像以及由相机获取并存储在文件系统中的 JPEG 图像

## Image Id 的格式
![Alt text](image.png)
* Cornerstone 通过图像加载器来定义 `Image Id` 的格式
* 以下是 Image Id 的以一些例子
```javascript
example://1

dicomweb://server/wado/{uid}/{uid}/{uid}

http://server/image.jpeg

custom://server/uuid
```
