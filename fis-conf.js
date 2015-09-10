
fis.hook('amd');

fis.match('/lib/js/(*).js', {
    optimizer : fis.plugin('uglify-js'),
    release : '/Public/js/$1'
});

fis.match('/lib/js/modules/(*).js', {
    isMod: true, // 设置 comp 下都是一些组件，组件建议都是匿名方式 define
    release: '/Public/js/modules/$1'
});

fis.match('::package', {
    spriter : fis.plugin('csssprites'),
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'amd',
        useInlineMap: true // 资源映射表内嵌
    })
})

/**
 * sass的解析  
 * 关于样式的合并，直接在开发的时候使用sass 的import 进行引用合并 ，不再后期进行暴力打包合并
 * 分通用功能common.sass与具体功能样式
 */
fis.match('/lib/css/(*).scss', {
    rExt : '.css',
    parser : fis.plugin('sass'), //加载sass插件
    useSprite : true, //使用雪碧图
    optimizer: fis.plugin('clean-css'), //压缩css
    release : '/Public/css/$1'
})

/**
 * 图片的解析，发布
 * 包括css中压缩出现的图片
 */
fis.match(/^\/lib\/(css|images)\/(.*)\.(jpg|gig|jpeg|png)$/, {
    optimizer : fis.plugin('png-compressor'),
    release: '/Public/images/$2'
})

// fis3 release prod 产品发布，进行合并
fis.media('prod')
    .match('/lib/js/modules/**.js', {
        optimizer : fis.plugin('uglify-js'),
        packTo: '/Public/js/main.js'
    });
