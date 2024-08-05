const sequelize = require('../../config/db.config')
const bcrypt = require('bcrypt')
const { DataTypes } =require('sequelize')

const author = sequelize.define(
    'authors',
    {
        author_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
        },
        user_name:{
            type:DataTypes.STRING,
            unique:{
                args:true,
                msg:"Author name Already Exists!"
            },
            validate:{
                notEmpty:{
                    msg:"please enter the user name !",
                }
            }
        },
        password:{
            type:DataTypes.STRING,
            validate:{
                len:{
                    args:[8,Number.MAX_SAFE_INTEGER],
                    msg:"password atleast contain 8 characters"
                },
                notEmpty:{
                    msg:"please enter the password !"
                }
            }
        },
        confirm_password:{
            type:DataTypes.VIRTUAL,
            validate:{
                len:{
                    args:[8,Number.MAX_SAFE_INTEGER],
                    msg:"confirm password must be atleast 8 characters !"
                },
                notEmpty:{
                    msg:"please enter the confirm password !"
                },
                isMatching(value){
                    if(value !== this.password){
                        throw new Error("password and confirm password must be same !")
                    }
                }
            }
        }
    },
    {
        tableName:'authors',
        timestamps:true,
        paranoid:true,
        hooks:{
            beforeSave: async (author)=>{
                if(author.password){
                    const salt = await bcrypt.genSalt(10)
                    author.password = await bcrypt.hash(author.password, salt);
                }
            }
        }
    }
)


module.exports = author