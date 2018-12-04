//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	const db = client.db('TodoApp');

	/*db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5c06b782fa547b249b7451d1')
	},{
		$set: {
			completed: true
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});*/

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5bfc58fce62972182dfe4342')
	},{
		$set: {
			name: 'Jen'
		},
		$inc: {
			age: 1
		}
	},{
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});



	//client.close();
});