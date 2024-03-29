var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    todoRouters = require('./routes/todos'),
    bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.send("Hello from the root");
})

app.use('/api/todos', todoRouters);

app.listen(port, function() {
    console.log("App is running on port", port);
})