const bookModel = require('../model/book.model')


module.exports ={
    createBook : async (data,callback)=>{
     try {
        const book = await bookModel.create(data);
        return callback(null,book);
     } catch (error) {
        console.log(error);
        return callback(error);
     }

    },
    getAllBooks : async (callback) =>{
        try {
            const books = await bookModel.findAll({
                attributes:{
                    exclude:['updateAt','deletedAt']
                }
            });
            return callback(null,books);
        } catch (error) {
            console.log(error);
            return callback(error);
        }
    }
}