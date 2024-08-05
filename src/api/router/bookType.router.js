const { createBookType, getAllBookTypes } = require('../controller/bookType.controller')
const router = require('express').Router()

router.post("/createBookType",createBookType);
router.get("/getAllBookTypes",getAllBookTypes);

module.exports = router