const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const initialize = require('./api/helper/sequelizeInit')
const apiRouter = require('./api/helper/apiRoute')
dotenv.config()

const app = express()

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        message: "Home Active"
    })
})

// sequelize connection 
initialize()

app.use('/api', apiRouter);

const port = process.env.PORT || 4002
app.listen(port, () => {
    console.log(`server is running on the port ${port}`)
})

