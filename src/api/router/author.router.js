const { createAuthor, getAllAuthors, login } = require('../controller/author.controller')
const router = require('express').Router()

// router.post('/createAuthor',createAuthor);
router.get('/getAllAuthors',getAllAuthors);
// router.get('/login',login);

module.exports = router