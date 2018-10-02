!function () {
	var view = View('#topNavBar');
	var controller = {
		view: null,
		init: function (view) {
			//运行这段代码后上面的view就会变成你传入的形参view
			this.view = view;
			//console.log(this.view)
			this.bindEvents();
			//this.bindEvents.call(this)
		},
		bindEvents: function () {
			//所以在这里得到的controller里面的view是形参view
			//console.log(this.view)
			window.addEventListener('scroll', x => {
				if (window.scrollY > 0) {
					this.active();
				} else {
					this.deactive();
				}
			});
		},
		active: function () {
			//console.log(this.view)
			this.view.classList.add('static');
		},
		deactive: function () {
			//console.log(this.view)
			this.view.classList.remove('static');
		}
	};
	controller.init(view);
	//controller.init.call(controller, view)
}.call();