var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // to have promises on mongoose
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
	text: {
		type: String,
		required: true,
		minlenght: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

var newTodo = new Todo({
	text: 'Something to do'
});

newTodo.save().then((doc) => {
	console.log(JSON.stringify(doc,undefined,2));
}, (e) => {
	console.log('Unable to save todo', e)
});

// User
// email - required it - trim it - type string  - min lenght of 1

var User = mongoose.model('User',{
	email: {
		type: String,
		required: true,
		minlenght: 1,
		trim: true
	}
});

var newUser = new User({
	email: 'myemail@gmail.com'
});

newUser.save().then((doc) => {
	console.log(JSON.stringify(doc,undefined,2));
}, (e) => {
	console.log('Unable to save user', e)
});