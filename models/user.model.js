'use strict';

var users = [
  {
    name: 'shjin1',
    age: 1
  },{
    name: 'shjin2',
    age: 2
  },{
    name: 'shjin3',
    age: 3
  },{
    name: 'shjin4',
    age: 4
  },{
    name: 'shjin5',
    age: 5
  }
]
module.exports = {
  find: function(callback){
    callback(null,users);
  }
};