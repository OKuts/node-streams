const express = require('express');
const router = express.Router();
const {getData, redirectContacts, postData, homePage} = require('../controllers/post-controller');

router.get('/contacts', getData);
router.get('/about-us', redirectContacts);
router.post('/post', postData);
router.get('/', homePage);

module.exports = router;
