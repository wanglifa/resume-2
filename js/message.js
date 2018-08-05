 !function(){
   var view = document.querySelector('section.message');
   var model = {
     init: function(){
      var APP_ID = 'Q6FCJ2jIHfzxXmonYAMovUpO-gzGzoHsz';
      var APP_KEY = 'Uf7Ag3m2WBMNoMQKBTduSkYf'
      AV.init({
        appId: APP_ID,
        appKey: APP_KEY
      })
     },
     //获取数据
     fetch: function(){
      var query = new AV.Query('Message');
      return query.find()  //Promise对象
     },
     //创建数据
     save: function(name,content){
      var Messege = AV.Object.extend('Message');
      var message = new Messege();
      return message.save({  //Promise对象
         'name': name,
         'content': content
      })
     }
   }
   var controller = {
     view: null,
     form: null,
     messageList: null,
     model: null,
     init: function(view,model){
      this.view = view;
      this.model = model;
      this.form = view.querySelector('form');
      this.messageList = view.querySelector('#messageList');
      this.model.init();
      this.getMessage();
      this.bindEvent();
      console.log(this)
     },
     getMessage: function(){
      this.model.fetch().then((messages)=> {
        let array = messages.map((item)=>{
          return item.attributes;
        })
        array.forEach((value)=>{
          console.log(this)
          var li = document.createElement('li');
          li.innerText = value.name+':'+value.content;
          this.messageList.appendChild(li);
        })
      })
     },
     bindEvent: function(){
      this.form.addEventListener('submit',(x)=>{
           x.preventDefault();
           this.saveMessage();
       })
     },
     saveMessage: function(){
      var myForm = this.form;
      var content = myForm.querySelector('input[name=content]').value;
      var name = myForm.querySelector('input[name=name]').value;
      this.model.save(name,content).then((object)=> {
        console.log(this)
        //每次成功了，都把当前的数据直接添加到ul里
        var li = document.createElement('li');
        li.innerText = object.attributes.name+':'+object.attributes.content;
        messageList.appendChild(li);
        myForm.querySelector('input[name=content]').value = '';
        myForm.querySelector('input[name=name]').value = ''
        content = '';
      })
     }
   }
   controller.init.call(controller,view,model);
 }.call()
 

 
 


 