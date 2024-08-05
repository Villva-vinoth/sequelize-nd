const { DataTypes } = require('sequelize')

const sequelize = require('../../config/db.config')


const employee = sequelize.define(
    'employees',
    {
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:{
                    msg:"Please enter the name !"
                }
            }
        },
        employee_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            // defaultValue:DataTypes.UUIDV4,
            primaryKey:true,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:true,
            unique:true,
            validate:{
                isEmail:{
                    msg:"Please enter the valid Email !"
                }
            }
        },
        role:{
            type:DataTypes.ENUM,
            values:['employee','manager'],
            allowNull:false,
            validate:{
                isIn:{
                    args:[['employee','manager']],
                    msg:"Please enter the valid role"
                }
            }

        },
        address:{
            type:DataTypes.TEXT,
            allowNull:true,
        },
        phone_number :{
            type:DataTypes.STRING,
            allowNull:true,
            unique:true,
            validate:{
                notEmpty:{
                    msg:"please enter the Phone Number !"
                },
                len:{
                    args:[10,10],
                    msg:"please enter the 10 digits phone number !"
                },
                is:{
                    args:/^\d+$/,
                    msg:"Please enter the valid phone number !"
                }
                
            }
        },
        salary:{
            type:DataTypes.FLOAT,
            allowNull:true,
        }
    },
    {
        tableName:'employees',
        timestamps: true,  // auto created and updated at 
        paranoid: true,  // enable soft deleted and column value is deletedAt 
        deletedAt:"deletedAt"
    }
)

module.exports = employee