const { createEmployee ,getAllEmployee } = require('../controller/employee.controller')
const router = require("express").Router()

router.post('/createEmployee',createEmployee);
router.get('/getAllEmployee',getAllEmployee);

module.exports = router