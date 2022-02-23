const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/post-routes');
const path = require('path');

const app = express();

const PORT = 3000;
const db = 'mongodb+srv://violet:violet@cluster0.gkivl.mongodb.net/webdata?retryWrites=true&w=majority';

mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((res) => { console.log('connected to DB') })
    .catch((error) => { console.log(555, error) });

app.listen(PORT, (error) => {
    console.log(error ? error : `Server run on port ${PORT}`);
});

app.use(express.urlencoded({extended: false}));
app.use(express.static('views'));
app.use(postRoutes);

app.use((req, res) => {
    res
        .status(404)
        .sendFile(path.resolve(__dirname, 'views', 'error.html'));
});
