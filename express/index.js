const express = require('express');
const path = require("path");
const app = express();

const PORT = 3000;

app.listen(PORT, (error) => {
    console.log(error ? error : `Server run on port ${PORT}`);
});

const createPath = page => path.resolve(__dirname, 'views', `${page}.html`)

app.use((req, res, next) => {
    console.log(req.path);
    next();
})

app.use((_, __, next) => {
    console.log(_.query);
    next();
})


app.get('/', (req, res) => {
    res.sendFile(createPath('index'));
})

app.get('/contacts', (req, res) => {
    res.sendFile(createPath('contacts'));
})

app.get('/about-us', (req, res) => {
    res.redirect('/contacts');
})

app.use((req, res) => {
    res
        .status(404)
        .sendFile(createPath('error'));
})
