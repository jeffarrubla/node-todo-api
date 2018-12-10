const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/*var id = "5c0ecbed407f1c55c5c7cb93";

if(!ObjectID.isValid(id)) {
	console.log('ID not valid');
}*/

/*
Todo.find({
	_id: id
}).then((todos) => {
	console.log('Todos', todos);
});

Todo.findOne({
	_id: id
}).then((todo) => {
	console.log('Todo', todo);
});

Todo.findById(id).then((todo) => {
	if(!todo){
		return console.log('Id not found');
	}
	console.log('Todo By Id', todo);
}).catch((e) => console.log(e));
*/

User.findById("5c082bf7297e0d0fa9797069").then((user) => {
	if(!user){
		return console.log('Unable to find user');
	}
	console.log('User',user);
}, (e) => {
	console.log(e)
})