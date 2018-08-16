/*
var controller = Controller({
    init:function(){
        this.view
        this.model
        this.xxx()
        this.yyy()
    },
    xxx: function(){},
    yyy: function(){}
})
*/ 

window.Controller = function(options){
    var init = options.init;
    var obj = {
        view: null,
        model: null,
        init: function(view,model){
            this.view = view;
            this.model = model;

            this.model.init()

            
            
            //问题1：这里为什么不能直接使用下面的函数调用，为什么非得用call调用
            //init(view,model)

            //答1：init(view,model)里面不传入this，this就是undefined，也就是非严格模式下的window
            //而我们的init实际应里面的this应该是当前这个init函数里的第一个参数，所以我们需要把当前的this传进去

            
            //问题2：init.call(this,view,model)里面的this哪来的：是上面的init函数被调用时写成call形式的第一个参数
            //也就是controller.init.call(controller,view,model)里面的controller对象
            //那controller对象是哪来的，是调用Controller这个函数，也就是函数的返回值，返回的也就是obj，所以this就是obj
            
            //另外这里的init是上面的变量init而不是属性init，因为属性只能通过对象.属性的方法使用，而不能直接属性名后面跟别的东西
            //而这个init是传入的参数，所以当你调用传入init的时候里面的this就是下面的this，也就是obj
            
            init.call(this,view,model)

            
            //这里的bindEvent也是init里面的，所以可以直接用this来调
            this.bindEvent.call(this)


        },
    }
    for(var key in options){
        if(key !== 'init'){
            obj[key]=options[key]
        }
    }
    this.console.log(obj)
    return obj;
  
}