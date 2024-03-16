const path = require('path');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

// Config static resource
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', expressHandlebars.engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// Define route
app.get('/', (req, res) => {
    res.render('home');
});

// 127.0.0.1 - localhost
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});