require(['../lib/js/modules/main1'], function () {
	var handler = function () {
		require(['../lib/js/modules/main2']);
	}
	console.log('这是主要入口模块');
	var btn = document.getElementById('btn');
	if (btn.addEventListener) {
	    btn.addEventListener('click', handler);
	  } else {
	    btn.attachEvent('click', handler);
	  }
})