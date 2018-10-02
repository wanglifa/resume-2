!function () {
	window.setTimeout(function () {
		//找到最近的并且移除offset
		findClosestAndRemoveOffset();
	}, 100);
	window.addEventListener('scroll', function () {
		findClosestAndRemoveOffset();
	});

	function findClosestAndRemoveOffset() {
		var specialTags = document.querySelectorAll('[data-x]');
		var minIndex = 0; //给出一个最小差值的索引号（对应的目标位置距顶部的距离减去滚动条易动的距离），从0开始，因为可以依次往后遍历进行比较。
		//因为上面给出的最小值索引是0，所以下面遍历从1开始与第0个开始比较
		for (var i = 1; i < specialTags.length; i++) {
			//对应的目标位置距顶部距离减去滚动条滚动的距离的绝对值差值越小，说明约接近目标位置
			if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)) {
				minIndex = i;
			}
		}
		specialTags[minIndex].classList.remove('offset');
		var id = specialTags[minIndex].id;
		console.log(id);
		var a = document.querySelector('a[href="#' + id + '"]');
		var aParent = a.parentNode.parentNode.children;
		for (var i = 0; i < aParent.length; i++) {
			aParent[i].classList.remove('active');
		}
		a.parentNode.classList.add('active');
	}
}.call();