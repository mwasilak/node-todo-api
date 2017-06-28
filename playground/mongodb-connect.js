const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');



  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   } else {
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   }
  // });

  // db.collection('Users').insertOne({
  //   name: 'Maciek',
  //   age: 33,
  //   location: 'Lublin'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Error', err);
  //   }
  //   // console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  //
  // });


  db.close();
});
