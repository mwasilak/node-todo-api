const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if(error) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos')
  // .findOneAndUpdate({
  //   _id: new ObjectID('595410e2a1ed95b102908253')
  // },{
  //   $set:{
  //     completed: true
  //   }
  // }, {
  //   returnOriginal:false
  // })
  // .then((result) => {
  //   console.log(result);
  // })

  db.collection('Users')
  .findOneAndUpdate({
    location:'NY'
  }, {
    $set: {
      name: 'Maciej'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  // db.close();
});
