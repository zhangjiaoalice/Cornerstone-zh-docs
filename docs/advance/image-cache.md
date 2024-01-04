# Image Cache
**Cornerstone 会将图像存储在 Image Cache中，Cornerstone 会跟踪哪些图像正在被使用，哪些已经不再被使用了，并在必要时释放为使用的图像所占用的内存**

* Image Cache 是一个用于存储图像数据的区域，用于在重复使用图像时避免重新加载和重新渲染
* 通过将图像存储在 `Image Cache` 中的策略，Cornerstone 可以更快的加载和显示图像，并且能够更好的管理内存使用
* 当 `Image Loader` 解析完成，返回 Promise 对象之后, 解析的图像对象会被存储在Cornerstone 的 Image Cache 模块中的一个对象中。这个缓存模块被配置为按照LRU 策略来管理其存储的图像数据。如果缓存满了，最近使用最少的图像数据会被从缓存中移除，以便为新加载的图像腾出空间
***

## 配置 Image Cache
*当首次调用 <font color=green>imageLoade</font> 函数时，缓存中会为这个图像设置一个占位符，并记录其大小为0字节，这意味着初始化时，我们还不知道图像的实际大小，只是先假设图像大小为0。*

*当负责跟踪图像加载的Promise完成时(<font color=green>图像加载完成</font>)，它更新占位字符的大小为图像的实际大小*

*如果图像加载失败，占位符会被从缓存中移除，缓存不会保留无效或者无法加载的图像条目*

**开发人员可以执行以下操作来配置缓存:**
1. 调用<font color=green>setMaximumSizeBytes</font>设置最大的缓存大小，默认情况下时1GB
2. 可以调用 <font color>purgeCache</font> 来手动清除所有图像的缓存
3. 调用 <font color=green>getCacheInfo</font> 来检索缓存的摘要
4. 调用 <font color=green>changeImageIdCacheSize</font> 来更改特定Image的记录的缓存大小

