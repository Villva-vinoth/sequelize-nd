const bookTypeModel = require('../model/bookType.model')


module.exports = {
    createBookType: async (data, callback) => {
        try {
            const bookType = await bookTypeModel.create(data);
            return callback(null, bookType);
        } catch (error) {
            console.log(error);
            return callback(error);
        }
    },
    getAllBookTypes: async (callback) => {
        try {
            const bookTypes = await bookTypeModel.findAll({
                attributes:{
                    exclude:['updatedAt','deletedAt']
                }
            });
            return callback(null, bookTypes);
        } catch (error) {
            console.log(error);
            return callback(error);
        }
    }
}