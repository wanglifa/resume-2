
!function(){
  var view = View('#mySlides');
  var controller = {
    view: null,
    swiper: null,
    swiperOptions: null,
    init: function(view){
      this.view = view;
      this.swiperOptions={
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        } 
      }
      this.initSwiper();
    },
    initSwiper: function(view){
      this.swiper = new Swiper (
        this.view.querySelector('.swiper-container'),
        this.swiperOptions 
      )        
    }
  }
  controller.init.call(controller,view)
}.call()