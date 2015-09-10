require(['lib/js/comp/1-0/1-0'], function() {
  var btn = document.getElementById('btn');
  var handler = function() {
    require(['./lib/js/comp/2-0/2-0.js']);
  };

  if (btn.addEventListener) {
    btn.addEventListener('click', handler);
  } else {
    btn.attachEvent('click', handler);
  }
});