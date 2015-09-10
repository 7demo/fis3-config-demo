fis.match('::packager', {
	spriter : fis.plugin('csssprites')
	//不采用暴力打包
	// ,
	// postpackager: fis.plugin('loader', {
	//     allInOne : 'css'
	// })
});

/**
 * sass的解析  
 */
fis.match('/lib/css/(*).scss', {
	rExt : '.css',
	parser : fis.plugin('sass'), //加载sass插件
	useSprite : true, //使用雪碧图
	optimizer: fis.plugin('clean-css') //压缩css
})

/**
 * 合并多个css 并发布合并后的css
 * 采用开发时候，直接使用sass 的import 进行引用 ，不后期进行打包
 * 分通用功能common.sass与具体功能样式
 * 
 */
fis.match('/lib/css/(*).scss', {
	packTo : '/Public/css/output/pak.css',
	release : '/Public/css/output/pak.css',
	url : '/Public/css/output/pak.css'
})

/**
 * js的解析
 */
fis.match('/lib/js/(*).js', {
	optimizer : fis.plugin('uglify-js'),
	release : '/Public/js/$1'
})


/**
 * 图片的解析
 */
fis.match('/lib/images/(*).{jpg,jpeg,png,gif}', {
	optimizer : fis.plugin('png-compressor'),
	release : '/Public/images/$1'
});
fis.match(/\/lib\/css\/output\/(.*_[xyz])\.png$/, {
  release: '/Public/images/$1'
});

// fis.media('debug').match('**/**.{js,css,png}', {
// 	useHash : false,
// 	useSprite : false,
// 	optimizer : null
// })

// fis.match('*.{css,less}', {
//   packTo: '/static/aio.css'
// });