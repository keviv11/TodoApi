//LOAD LIBRARY
const express = require("express");
const bodyParser = require("body-parser");
const {ObjectID} = require("mongodb");

//LOAD FILE MODULES
const {mongoose} = require("./../db/mongoose");
const {Todo} = require("./../models/todo");
const {User} = require("./../models/user");
const PORT = process.env.PORT || 3000;
const app = express();

//SETTING MIDDLEWARE
app.use(bodyParser.json());

//SETTING ROUTES

//ROUTES--POST
app.post("/todos", (req, res) => {
    const newTodo = new Todo({text: req.body.text});
    newTodo
        .save()
        .then((doc) => {
            res.send(doc)
        }, (e) => {
            res
                .status(404)
                .send(e)
        });
});

//ROUTES--GET
app.get("/", (req, res) => {
    res.send("to check api goto http://localhost:3000/todos");
});


app.get("/todos", (req, res) => {
    Todo
        .find()
        .then((todos) => {
            res.send({todos});
        }, (e) => {
            res
                .status(404)
                .send(e)
        });
});


app.get("/todos/:id", (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        return res
            .status(404)
            .send();
    } else {
        Todo
            .findById(id)
            .then((doc) => {
                if (!doc) {
                    return res
                        .status(404)
                        .send();
                }
                res.send({doc});
            })
            .catch((e) => {
                res
                    .status(404)
                    .send()
            });
    }
});


//ROUTES--DELETE
app.delete("/todos/:id", (req, res) => {
    let id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res
            .status(404)
            .send();
    } else {
        Todo
            .findByIdAndRemove({_id: id})
            .then((doc) => {
                if (!doc) {
                    res
                        .status(404)
                        .send();
                }
                res
                    .status(200)
                    .send({doc});
            }).catch((e)=>{
                res.status(404).send();
            });
    }
});

app.listen(PORT, () => {
    console.log("your server is started on the port 3000");
});

module.exports = {
    app
};