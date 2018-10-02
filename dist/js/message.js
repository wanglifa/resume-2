!function () {
  let view = View('section.message');
  let model = Model('Message');
  let controller = Controller({
    form: null,
    messageList: null,
    init: function (view, model) {
      //这里的this就是obj
      this.form = view.querySelector('form');
      this.messageList = view.querySelector('#messageList');
      this.getMessage();
    },
    getMessage: function () {
      this.model.fetch().then(messages => {
        let array = messages.map(item => {
          return item.attributes;
        });
        array.forEach(value => {
          console.log(this);
          var li = document.createElement('li');
          li.innerText = value.name + ':' + value.content;
          this.messageList.appendChild(li);
        });
      });
    },
    bindEvent: function () {
      this.form.addEventListener('submit', x => {
        x.preventDefault();
        this.saveMessage();
      });
    },
    saveMessage: function () {
      var myForm = this.form;
      var content = myForm.querySelector('input[name=content]').value;
      console.log(typeof content);
      var name = myForm.querySelector('input[name=name]').value;
      this.model.save({ 'name': name, 'content': content }).then(object => {
        console.log(this);
        //每次成功了，都把当前的数据直接添加到ul里
        var li = document.createElement('li');
        li.innerText = object.attributes.name + ':' + object.attributes.content;
        messageList.appendChild(li);
        myForm.querySelector('input[name=content]').value = '';
        myForm.querySelector('input[name=name]').value = '';
      });
    }
  });

  controller.init(view, model);
}.call();