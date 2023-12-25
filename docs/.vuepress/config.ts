import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Cornerstone 中文文档',
    theme: defaultTheme({
        sidebar: [
            {
                text: '简介',
                link: '/',
            },
            {
                text: '基础概念',
                link: '/basic/',
                children: [
                    {
                        text: '医学影像相关知识',
                        link: '/basic/basic-knowlodge/',
                    },
                    {
                        text: 'Cornerstone 基础概念',
                        link: '/basic/basic-concept/',
                        children: [
                            {
                                text: 'Enabled Elements',
                                link: '/basic/basic-concept/enabled-elements/',
                            },
                            {
                                text: 'Image Ids',
                                link: '/basic/basic-concept/image-ids/',
                            },
                            {
                                text: 'Image Loaders',
                                link: '/basic/basic-concept/image-loaders',
                            }
                        ]
                    },
                ]
            },
            {
                text: '医学影像开发库介绍',
                link: '/libriry/',
            },
            {
                text: 'Cornerstone Core 安装',
                link: '/core-install/',
            },
            {
                text: '进阶',
                link: '/advance/',
                children: [
                    {
                        text: 'Image Cache',
                        link: '/advance/image-cache/'
                    },
                    {
                        text: 'Enable Element Layers',
                        link: '/advance/enable-ele-layers/'
                    },
                    {
                        text: 'Modality LUT an VOI LUT',
                        link: '/advance/lut-and-voi'
                    },
                    {
                        text: 'Color Lookup Tables',
                        link: '/advance/color-lookup-tables'
                    },
                    {
                        text: 'WebGL Rendering Pipeline',
                        link: '/advance/webgl-rendering-pipeline'
                    },
                    {
                        text: 'Retrieving Pixel Data',
                        link: '/advance/retrieving-pixel-data',
                    },
                    {
                        text: 'Legacy Browser Support',
                        link: '/advance/legacy-browser-support',
                    },
                ]
            },
            {
                text: 'API',
                link: '/api/',
                children: [
                    {
                        text: 'Objects 对象',
                        link: '/api/objects/',
                    },
                    {
                        text: 'EnabledElement',
                        link: '/api/enabled-element/'
                    },
                    {
                        text: 'ImageLoader 图像加载器',
                        link: '/api/image-loader/'
                    },
                    {
                        text: 'ImageCache 图像缓存',
                        link: '/api/image-cache/'
                    },
                    {
                        text: 'MetaData 元数据',
                        link: '/api/meta-data/'
                    },
                    {
                        text: 'ViewportSetting 视口设置',
                        link: '/api/meta-data/'
                    },
                    {
                        text: 'ViewportSetting 视口设置',
                        link: '/api/viewport-setting/'
                    },
                    {
                        text: 'PixelCoordinateSystem 像素坐标系',
                        link: '/api/pixel-coordinate-system/'
                    },
                    {
                        text: 'EnabledElementLaysers',
                        link: '/api/enabled-element-layers/'
                    },
                    {
                        text: 'Internal',
                        link: '/api/internal/'
                    },
                    {
                        text: 'rendering 渲染',
                        link: '/api/rendering/'
                    },
                    {
                        text: 'WebGLRendering WebGL渲染',
                        link: '/api/webgl-rendering/'
                    },
                    {
                        text: 'Polyfills',
                        link: '/api/polyfills/'
                    },
                    {
                        text: 'purgeLayers 清除图层',
                        link: '/api/purge-layers/'
                    },
                    {
                        text: 'getPixelValue 获取像素值',
                        link: '/api/get-pixel-value/'
                    },
                    {
                        text: 'getRestoreImageMethod 恢复图层函数',
                        link: '/api/get-restore-image-method/'
                    },
                    {
                        text: 'ensuresColormap',
                        link: '/api/ensures-color-map/'
                    },
                    {
                        text: 'restoreImage 恢复图像',
                        link: '/api/restore-image/'
                    },
                    {
                        text: 'convertImageToFalseColorImage',
                        link: '/api/convert-image-to-false/'
                    },
                    {
                        text: 'convertToFalseColorImage',
                        link: '/api/convert-to-false-color/'
                    },
                    {
                        text: 'linspace',
                        link: '/api/linspace/'
                    },
                    {
                        text: 'getRank',
                        link: '/api/get-rank/'
                    },
                    {
                        text: 'searchSorted',
                        link: '/api/search-sorted/'
                    },
                    {
                        text: 'makeMappingArray',
                        link: '/api/make-mapping-arr/'
                    },
                    {
                        text: 'createLinearSegmentedColormap',
                        link: '/api/create-linear-segment/'
                    },
                    {
                        text: 'getColormapList',
                        link: '/api/get-colormap-list/'
                    },
                    {
                        text: 'getColormap',
                        link: '/api/get-colormap/'
                    },
                    {
                        text: 'linearIndexLookupMain',
                        link: '/api/linear-lookup-main/'
                    },
                    {
                        text: 'setNumberOfTableValues',
                        link: '/api/set-numberof-table/'
                    },
                    {
                        text: 'setRamp',
                        link: '/api/set-ramp/'
                    },
                    {
                        text: 'setTableRange',
                        link: '/api/set-table-range/'
                    },
                    {
                        text: 'setHueRange',
                        link: '/api/set-hue-range/'
                    },
                    {
                        text: 'setSaturationRange',
                        link: '/api/set-saturation-range/'
                    },
                    {
                        text: 'setValueRange',
                        link: '/api/set-value-range/'
                    },
                    {
                        text: 'setRange',
                        link: '/api/set-range/'
                    },
                    {
                        text: 'setAlphaRange',
                        link: '/api/set-alpha-range/'
                    },
                    {
                        text: 'getColor',
                        link: '/api/get-color/'
                    },
                    {
                        text: 'build',
                        link: '/api/build/'
                    },
                    {
                        text: 'buildSpecialColors',
                        link: '/api/build-special-colors/'
                    },
                    {
                        text: 'mapValue',
                        link: '/api/map-value/'
                    },
                    {
                        text: 'getIndex',
                        link: '/api/get-index/'
                    },
                    {
                        text: 'setTableValue',
                        link: '/api/set-table-value/'
                    },
                    {
                        text: 'getElementData',
                        link: '/api/get-element-data/'
                    },
                    {
                        text: 'removeElementData',
                        link: '/api/remove-element-data/'
                    },
                    {
                        text: 'HSVToRGB',
                        link: '/api/hsv-to-rgb/'
                    },
                    {
                        text: 'LookupTable',
                        link: '/api/lookup-table/'
                    },
                    {
                        text: 'disable',
                        link: '/api/disable/'
                    },
                    {
                        text: 'draw',
                        link: '/api/draw/'
                    },
                    {
                        text: 'drawInvalidated',
                        link: '/api/draw-invalidated/'
                    },
                    {
                        text: 'invalidate',
                        link: '/api/invalidate/'
                    },
                    {
                        text: 'invalidateImage',
                        link: '/api/invalidate-image/'
                    },
                    {
                        text: 'updateImage',
                        link: '/api/update-image/'
                    },
                    {
                        text: 'getEnabledElements',
                        link: '/api/get-enabled-elements/'
                    },
                    {
                        text: 'hasImageOrLayers',
                        link: '/api/has-images-layers/'
                    },
                    {
                        text: 'drawCompositeImage',
                        link: '/api/draw-composite-image/'
                    },
                    {
                        text: 'tryEnableWebgl',
                        link: '/api/try-enable-webgl/'
                    },
                    {
                        text: 'generateUUID',
                        link: '/api/generate-uuid/'
                    },
                    {
                        text: 'createCanvas',
                        link: '/api/create-canvas/'
                    },
                    {
                        text: 'fitToWindow',
                        link: '/api/fit-to-window/'
                    },
                    {
                        text: 'validateParameterUndefined',
                        link: '/api/validate-parameter-undefined/'
                    },
                    {
                        text: 'generateLinearVOILUT',
                        link: '/api/generate-linear-voilut/'
                    },
                    {
                        text: 'getVOILut',
                        link: '/api/get-voi-lut/'
                    },
                    {
                        text: 'getDefauleViewportForImage',
                        link: '/api/get-default-viewport/'
                    },
                    {
                        text: 'getImage',
                        link: '/api/get-image/'
                    },
                    {
                        text: 'getPixels',
                        link: '/api/get-pixels/'
                    },
                    {
                        text: 'getStoredPixels',
                        link: '/api/get-stored-pixels/'
                    },
                    {
                        text: 'setMaximumSizeBytes',
                        link: '/api/set-maximum-bytes/'
                    },
                    {
                        text: 'purgeCacheIfNecessary',
                        link: '/api/purge-cahe-necessary/'
                    },
                    {
                        text: 'putImageLoadObject',
                        link: '/api/put-Image-loadeobj/'
                    },
                    {
                        text: 'getImageLoadObject',
                        link: '/api/get-Image-loadeobj/'
                    },
                    {
                        text: 'removeImageLoadObject',
                        link: '/api/remove-Image-loadeobj/'
                    },
                    {
                        text: 'CacheInfomation',
                        link: '/api/cache-infomation/'
                    },
                    {
                        text: 'getCacheInfo',
                        link: '/api/get-cache-info/'
                    },
                    {
                        text: 'decache',
                        link: '/api/decache/'
                    },
                    {
                        text: 'purgeCache',
                        link: '/api/purge-cache/'
                    },
                    {
                        text: 'changeImageIdCacheSize',
                        link: '/api/change-imageid-cachesize/'
                    },
                    {
                        text: 'pageToPixel',
                        link: '/api/page-to-pixel/',
                    },
                    {
                        text: 'pixelDataToFalseColorData',
                        link: '/api/pixel-datato-falsecolordata/',
                    },
                    {
                        text: 'addGrayscaleLayer',
                        link: '/api/add-grayscale-layer/',
                    },
                    {
                        text: 'getFillStyle',
                        link: '/api/get-fill-style/',
                    },
                    {
                        text: 'addLabelMapLayer',
                        link: '/api/add-label-maplayer/',
                    },
                    {
                        text: 'addPseudoColorLayer',
                        link: '/api/add-pseudo-colorlayer/',
                    },
                    {
                        text: 'reset',
                        link: '/api/reset/',
                    },
                    {
                        text: 'setCanvasSize',
                        link: '/api/set-canvas-size/',
                    },
                    {
                        text: 'wasFitToWindow',
                        link: '/api/was-fit-window/',
                    },
                    {
                        text: 'relativeRescale',
                        link: '/api/relative-rescale/',
                    },
                    {
                        text: 'resize',
                        link: '/api/resize/',
                    },
                    {
                        text: 'setDefaultViewport',
                        link: '/api/set-defaule-viewport/',
                    },
                    {
                        text: 'setToPixelCoordinateSystem',
                        link: '/api/set-to-pixelcoordinate/',
                    },
                    {
                        text: 'triggerEvent',
                        link: '/api/trigger-event/',
                    },
                    {
                        text: 'WebGLTextureCache',
                        link: '/api/webgl-texture-cache/',
                    },
                ]
            },
        ]
    })
})