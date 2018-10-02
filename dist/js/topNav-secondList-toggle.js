!function () {
	var view = document.getElementsByClassName('menuTigger');
	var controller = {
		init: function (view) {
			for (var i = 0; i < view.length; i++) {
				view[i].onmouseenter = function (x) {
					var ul = this.getElementsByTagName('ul')[0];
					ul.classList.add('active');
				};
				view[i].onmouseleave = function () {
					var ul = this.getElementsByTagName('ul')[0];
					ul.classList.remove('active');
				};
			}
		}
	};
	controller.init.call(controller, view);
}.call();