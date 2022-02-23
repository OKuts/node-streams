const Post = require('../models/post');
const path = require('path');

const createPath = page => path.resolve(__dirname, 'views', `${page}.html`);

const getData =  (req, res) => {
    Post
        .find()
        .then((result) => res.send(result))
        .catch((err) => {
            console.log(err);
            res.sendFile(createPath('error'));
        })
};

const redirectContacts = (req, res) => {
    res.redirect('/contacts');
};

const postData = (req, res) => {
    const {title, author, text} = req.body;
    const post = new Post({title, author, text});
    post
        .save()
        .then((result) => res.send(result))
        .catch((err) => {
            console.log(err);
            res.sendFile(createPath('error'));
        })
};

const homePage = (req, res) => {
    res.sendFile(createPath('index'));
};

module.exports = {
    createPath,
    getData,
    redirectContacts,
    postData,
    homePage,
}
