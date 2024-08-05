const { createBook, getAllBooks } = require('../controller/book.controller')
const router = require('express').Router()

router.post('/createBook',createBook)
router.post('/getAllBooks',getAllBooks)


module.exports = router
