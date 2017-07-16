const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({})
// Todo.findByIdAndRemove({})

Todo.findByIdAndRemove({_id:'596b22faa021a336e32c5fd6'}).then((todo) => {
  console.log(todo);
});

// Todo.findByIdAndRemove('596b2258a021a336e32c5f99').then((todo) => {
//   console.log(todo);
// });
