# Metadata Providers (元数据提供函数)
**元数据提供函数(Metadata Providers)是一个js函数，是访问Cornerstone图像的相关接口。用户可以自定义自己的`Metadata Provider` 函数，为每个特定的图像返回他们想要的任何元数据**
* **元数据：** 描述了数据集的各种属性和属性值。在图像处理和显示领域。元数据可以包括图像的分辨率、尺寸、格式、拍摄日期、设备型号等信息。
* 用户通过定义 `Metadata Provider` 函数，可以访问存储在图像文件中的任何数据。（图像文件中的数据还可以从数据库或者Web服务中获取到）
*** 

## 医疗图像的元数据
* 医学图像中包含了大量的非像素级的元数据，例如图像的像素间距、患者ID或者扫描采集日期等。
* 对于某些类型的文件格式（如DICOM），元数据是存储在文件头中，可以通过读取和解析文件来获取。
* 对于其他格式的文件（如JPEG、PNG）,元数据需要独立于像素数据提供。
* 即使是 DICOM 格式的文件，开发者通常也会独立于像素数据的传输方式来提供元数据，因为这样可以显著提高行性能

## Metadata Provider
* 为了处理获取 医疗影像图像元数据的各种场景，Cornerstone提供了 `Metadata Provider 元数据提供函数`。这个函数接受 `Image Id` 和指定的元数据类型作为参数，返回处理之后的元数据

```javascript
function metaDataProvider(type, imageId) {
    if(type === 'imagePlaneModule') {
        if(imageId === 'ct://1') {
            return {
                frameOfReferenceUID: '1.3.6.1.4.1.5962.99.1.2237260787.1662717184.1234892907507.1411.0',
                rows: 512,
                columns: 512,
                rowCosines: {
                    x: 1,
                    y: 0,
                    z: 0
                },
                columnCosines: {
                    x: 0,
                    y: 1,
                    z: 0
                },
                imagePositionPatient: {
                    x: -200,
                    y: -250,
                    z: -399.100006
                },
                rowPixelSpacing: 0.976562,
                columnPixelSpacing: 0.976562，
            }
        }
    }
}

// 将 metadata provider 注册到cornerstone中
cornerstone.metaData.addProvider(metaDataProvider);
// 通过 metadata provider 获取元数据
const imagePlanModule = cornerstone.metaData.get('imagePlaneModule', 'ct://1')
```

## Cornerstone 元数据基础
1. Cornerstone 允许注册多个 `Metadata Provider`;
2. 每个 `Metadata Provider` 都可以根据开发者的需要为开发者提供任何想要的信息，以满足特定应用的要求
3. 当请求特定的元数据信息时， Cornerstone 会遍历已知的 `Metadata Provider`，直到找到指定元数据类型定义的一组元数据。
    * 这种机制允许开发者灵活的地定义自己的元数据提供者，以满足特定的应用需求
4. Cornerstone 可以通过设置一个可选的优先级配置 来控制 `Metadata Provider` 的调用顺序
5. 当 DICOM 通过 Cornerstone WADO 图像加载器加载的时候，DICOM 图像的元数据会自动添加到 `Metadata Provider`
    * 通过这种方式，开发者可以方便的访问和处理DICOM 图像中的元数据，而无需手动解析和提取这些数据
6. 在 Cornerstone Tools 中，特定的元数据类型（type）用于为工具提供元数据。
