/**
 * js 模块化开发
 */
fis.hook('amd', {
	
})


fis.match('::packager', {
	spriter : fis.plugin('csssprites')
});

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
 * js的解析
 * 直接进行压缩
 */
fis.match('/lib/js/(*).js', {
	// optimizer : fis.plugin('uglify-js'),
	release : '/Public/js/$1'
});
fis.match('/lib/js/modules/(*).js', {
    isMod: true, // 设置 comp 下都是一些组件，组件建议都是匿名方式 define
    // release: '/Public/js/modules/$1'
});




/**
 * 图片的解析，发布
 * 包括css中压缩出现的图片
 */
fis.match(/^\/lib\/(css|images)\/(.*)\.(jpg|gig|jpeg|png)$/, {
	optimizer : fis.plugin('png-compressor'),
	release: '/Public/images/$2'
})

// fis.media('debug').match('**/**.{js,css,png}', {
// 	useHash : false,
// 	useSprite : false,
// 	optimizer : null
// })
