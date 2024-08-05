const authorModel = require('../model/author.model')

module.exports = {
    createAuthor : async (data,callback) =>{
        try {

            const existingAuthor = await authorModel.findOne({
                where:{
                    user_name:data.user_name
                }
            })
            if(existingAuthor){
                throw new Error("Author is Already Exist !")
            }

            const author = await authorModel.create(data)
            return callback(null,author)
        } catch (error) {
            // console.log(error)
            return callback(error)
        }
    },
    getAllAuthors : async (callback)=>{
    try {
        const authors = await authorModel.findAll({
            attributes:{
                exclude:['updateAt','deletedAt']
            }
        })
        return callback(null,authors)
    } catch (error) {
        console.log(error)
        return callback(error)
    }
    },
    getAuthorByUserName : async (data,callback)=>{
        try {
            const author = await authorModel.findOne({
                where:{
                    user_name:data.user_name
                }
            })
            if(author){
                return callback(null,author)
            }
            else{
                 throw new Error("No User Found !")
            }
        } catch (err) {
            // console.log(err)
            return callback(err)
        }
    }
}