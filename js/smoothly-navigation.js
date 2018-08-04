!function(){
	//smoothly-navigation平滑导航
	var view = document.querySelector('nav ul');
	var controller = {
		view: null,
		init: function(view){
			this.view = view;
			this.bindEvent();
			this.initAnimate();
		},
		bindEvent: function(){
			var atags = this.view.querySelectorAll('li a');
			for(var i =0;i<atags.length;i++){
				atags[i].onclick = (x)=>{
					var a = x.currentTarget;
					x.preventDefault();
					var href = a.getAttribute('href');
					var element = document.querySelector(href);
					this.scrollToElement(element);
				}
			}
		},
		initAnimate: function(){
			function animate(time) {
				requestAnimationFrame(animate);
				TWEEN.update(time);
			}
			requestAnimationFrame(animate);
		},
		scrollToElement: function(element){
			var top = element.offsetTop;
			// var n =25;
			// var t = 500/n;
			var currentTop = window.scrollY;
			var targetTop = top-60;
			var t = Math.abs((targetTop-currentTop)/100*300);//因为每个目标位置的高度不一样，为了保持时间和速度协调起来，
			//所以设置一个每100px的距离用300ms，然后得到目标距离里有几个100用它乘以300，又因为如果是从下边跑到上边的话它的值就会是负值，会出问题，所以用设置绝对值
			if(t>1500){
				t=1500;
			}
			
			var coords = { y:currentTop }; 
			var tween = new TWEEN.Tween(coords) 
			    .to({ y:targetTop }, t) //t秒钟到达目标位置
			    .easing(TWEEN.Easing.Quadratic.InOut) 
			    .onUpdate(function() {
					window.scrollTo(currentTop,coords.y);
			    })
			    .start(); 
		}
	}
	controller.init.call(controller,view)
	
}.call()