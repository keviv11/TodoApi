const mongoose = require("mongoose");
const Todo = mongoose.model("Todo", {
    text: {
        type: String,
        require: true
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

module.exports = {Todo};
