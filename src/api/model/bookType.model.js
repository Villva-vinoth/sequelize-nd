const { DataTypes } =require('sequelize')

const sequelize = require('../../config/db.config')

const bookType = sequelize.define(
    'book_types',
    {
        book_type_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        book_type:{
            type:DataTypes.STRING,
            unique: {
                args: true,
                msg: "Book type already exists!"
            },
            validate:{
                notEmpty:{
                    msg:"Book type must be needed !"
                }
            }
        },
    },
    {
        tableName:"book_types",
        timestamps:true,
    }
)


module.exports = bookType