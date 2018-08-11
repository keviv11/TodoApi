const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://vivekjaiswal11:mlab@123456789#@ds119442.mlab.com:19442/todoapi");

//mongodb://vivekjaiswal11:mlab@123456789#@ds119442.mlab.com:19442/todoapi





module.exports = {mongoose};