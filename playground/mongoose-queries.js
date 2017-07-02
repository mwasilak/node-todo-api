const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '69592b1a3974371a83f325a611';
//
// if(!ObjectID.isValid()) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// })
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// })

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => {
//   console.log(e);
// })

var id = '595696c357110b14a34462c5';

User.findById(id).then((user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log('User By Id', user);
}).catch((e) => {
  console.log(e);
})
