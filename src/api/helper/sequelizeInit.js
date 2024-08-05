const sequelize = require('../../config/db.config')



// initailize sequelize 
const initialize = async () => {
    try {
         await sequelize.authenticate()
         await sequelize.sync()  // create all model in the database 
        console.log('sequelize established successfully ! pg connected');
        return { sequelize }
    } catch (error) {
        console.log("Error connecting with sequelize",error)
    }
}

module.exports =  initialize