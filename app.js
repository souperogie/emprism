const express = require('express');
const path = require('path');

const app = express();

require('dotenv').config();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // view engine pug/jade

app.get('/', (req, res) => { // html/pug file loated in views folder
    res.render('index.pug');
});

app.get('/about', (req, res) => {
    res.render('about.pug');
});

app.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err;
    console.log(`Server started on port ${process.env.PORT}`);
});

module.exports = app;