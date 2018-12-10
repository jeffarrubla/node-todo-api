var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // to have promises on mongoose
mongoose.connect('mongodb://localhost:27017/TodoApp');


module.exports = {mongoose};