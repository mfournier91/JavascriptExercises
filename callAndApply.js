//how call and apply work. The first argument you pass is what the this keyword refers to.
//you can pass an object literal

var param1 = '1';
var param2 = '2';

var obj = {
  name: 'john doe',
  greet: function(param) {
    console.log(`Hello ${this.name}`, param);
  }
};

obj.greet(param1);
obj.greet.call({name: 'joe schmoe'}, param1);  // params for call are passed with commas
obj.greet.call({name: 'bob dole'}, [param1, param2]); //params for apply are passed as an array
