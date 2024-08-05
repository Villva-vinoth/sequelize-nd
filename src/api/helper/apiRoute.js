const router = require('express').Router()
const EmployeeRouter = require('../router/employee.router')
const AuthorRouter = require('../router/author.router')
const authRouter = require('../router/auth.router')
const bookTypeRouter = require('../router/bookType.router')
const bookRouter = require('../router/book.router')
const { authorization } =require('../middleware/jwt')


router.use('/employee',EmployeeRouter);
router.use('/author',authorization,AuthorRouter);
router.use('/bookType',authorization,bookTypeRouter);
router.use('/book',authorization,bookRouter);
router.use('/auth',authRouter);


module.exports = router