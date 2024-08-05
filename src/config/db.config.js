const { Sequelize } = require("sequelize");
const dotenv = require('dotenv')

dotenv.config()

const sequelize = new Sequelize(
    // connnection string and object of options
    process.env.DB_STRING,
    {
        dialect:process.env.DB_DIALECT,
        logging:false,
    }
)

module.exports =  sequelize

