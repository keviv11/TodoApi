const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

//mongodb://vivekjaiswal11:@ds119442.mlab.com:19442/todoapi





module.exports = {mongoose};