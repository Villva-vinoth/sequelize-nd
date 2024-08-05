const sequelize = require('../../config/db.config');
const employeeModel = require('../model/employee.model')
module.exports = {
    createEmployee: async (data, callback) => {
        // const transaction = await sequelize.transaction()
        try {

            const existingEmployee = await employeeModel.findOne({ where: { email: data.email } });
            if (existingEmployee) {
                throw new Error('Email must be unique');
            }

            const employeePhoneNumber = await employeeModel.findOne({ where: { phone_number: data.phone_number } });
            if (employeePhoneNumber) {
                throw new Error('phone number must be unique');
            }

            const employee = await employeeModel.create(data);
            // await transaction.commit()
            return callback(null, employee);
        } catch (error) {
            // await transaction.rollback();
            // console.log("error", error)
            return callback(error)
        }
    },
    getAllEmployee: async (callback) => {
        try {
            const employee = await employeeModel.findAll({
                attributes:
                {
                    exclude: ['updatedAt', 'deletedAt']
                }

            })
            return callback(null, employee)

        } catch (error) {
            // console.log(error)
            return callback(error)
        }
    }
}