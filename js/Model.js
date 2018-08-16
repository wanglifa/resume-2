window.Model = function(tag){
   //初始化数据
   return {
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
        var query = new AV.Query(tag);
        return query.find()  //Promise对象
       },
       //创建数据
       save: function(object){
        var X = AV.Object.extend(tag);
        var x = new X();
        return x.save(object)
       } 
   }
}