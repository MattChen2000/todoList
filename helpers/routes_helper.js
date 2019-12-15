var db = require('../models/index')

exports.getTodos = function (req, res) {
    db.Todo.find()
        .then(function (data) {
        res.json(data);
    })
        .catch(function (err) {
        res.send(err);
    })
};

exports.createTodos = function (req, res) {
    db.Todo.create(req.body)
        .then(function (newTodo) {
            res.status(201).json(newTodo);
    })
        .catch(function (err) {
            res.send(err);
    })
};

exports.showTodo = function (req, res) {
    db.Todo.findById(req.params.todoId)
        .then(function (foundTodo) {
            res.json(foundTodo);
    })
        .catch(function (err) {
            res.send(err);
    })
};

exports.updateTodo = function (req, res) {
    db.Todo.findByIdAndUpdate({ _id: req.params.todoId }, req.body,
        { new: true, useFindAndModify: true })
        .then(function (todo) {
            res.json(todo);
    })
        .catch(function (err) {
            res.send(err);
    })
};

exports.deleteTodo = function (req, res) {
    db.Todo.remove({ _id: req.params.todoId })
        .then(function () {
            res.send("The todo is deleted");
    })
        .catch(function (err) {
            res.send(err);
    })
};

module.exports = exports;
