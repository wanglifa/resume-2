var accessor = function(){
    var person = {
        name: 'wanglifa',
        age: 18
    }
    return function(){
        person.age += 1;
        return person.age;
    }
}
var growUp = accessor();
