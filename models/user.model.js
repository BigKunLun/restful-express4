'use strict';

var users = [
  {
    name: 'Person1',
    age: 1
  },{
    name: 'Person1',
    age: 2
  },{
    name: 'Person3',
    age: 3
  },{
    name: 'Person4',
    age: 4
  },{
    name: 'Person5',
    age: 5
  }
]
module.exports = {
  find: function(callback){
    callback(null,users);
  }
};