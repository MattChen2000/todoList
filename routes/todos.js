var express = require('express');
var router = express.Router();
var db = require('../models/index');
var helper = require('../helpers/routes_helper')

router.get('/', helper.getTodos);

router.post('/', helper.createTodos);

router.get('/:todoId', helper.showTodo);

router.put('/:todoId', helper.updateTodo);

router.delete('/:todoId', helper.deleteTodo);

module.exports = router;