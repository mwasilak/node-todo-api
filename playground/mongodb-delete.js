const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos')
  // .deleteMany({text:'Eat Lunch'})
  // .then((result) => {
  //   console.log(result);
  // })

  // db.collection('Todos')
  // .deleteOne({text:'Eat Lunch'})
  // .then((result) => {
  //   console.log(result);
  // })

  // db.collection('Todos')
  // .findOneAndDelete({completed:false})
  // .then((result) => {
  //   console.log(result);
  // })

  db.collection('Users')
  .deleteMany({name:'Maciek'})
  .then((result) => {
    console.log(result);
  })

  db.collection('Users')
  .findOneAndDelete({_id:new ObjectID('595163f2a8c85515d61102e6')})
  .then((result) => {
    console.log(result);
  })

  // db.close();
});
