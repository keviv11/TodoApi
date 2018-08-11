//LOAD LIBRARY
const express = require("express");
const bodyParser = require("body-parser");

//LOAD FILE MODULES
const {mongoose} = require("./../db/mongoose");
const {Todo} = require("./../models/todo");
const {User} = require("./../models/user");

const app = express();

//SETTING MIDDLEWARE
app.use(bodyParser.json());

//SETTING ROUTES
app.post("/todos", (req, res) => {
    const newTodo = new Todo({text: req.body.text});
    newTodo
        .save()
        .then((doc) => {
            res.send(doc)
        }, (e) => {
            res
                .status(400)
                .send(e)
        });
});

app.listen(3000, () => {
    console.log("your server is started on the port 3000");
});
