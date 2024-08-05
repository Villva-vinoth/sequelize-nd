const { createAuthor, getAllAuthors, getAuthorByUserName } = require('../service/author.service')
const bcrypt = require('bcrypt')  
const { authentication } = require('../middleware/jwt')
module.exports = {
    createAuthor:(req, res) => {
        const data = req.body;
        createAuthor(data, (err, result) => {
            if (err) {
                if (err.errors && err.errors[0].length > 0) {
                    return res.status(400).json(
                        {
                            message: err.errors[0].message,
                            success: 0
                        }
                    )
                }
                else {
                    return res.status(500).json({
                        message: err.message,
                        success: 0
                    })
                }
            }
            return res.status(201).json({
                message: "Author created successfull !",
                success: 1
            })
        })
    },
    getAllAuthors:(req, res) => {
        getAllAuthors((err, response) => {
            if (err) {
                if (err.name == "SequelizeDatabaseError") {
                    return res.status(500).json({
                        success: 0,
                        message: err.message
                    })
                }
                else {
                    return res.status(500).json({
                        success: 0,
                        message: err.message
                    })
                }
            }
            return res.status(200).json({
                success: 1,
                data: response
            })
        })
    },
    login:(req, res) => {
        const body = req.body
        getAuthorByUserName(body,async (err, response) => {
            if (err) {
                // if(err.name ==""){

                // }
                return res.status(500).json({
                    success: 0,
                    message: err.message
                })
            }

            const checkPassword =  await bcrypt.compare(body.password,response.password);
            // console.log(checkPassword)
            if(checkPassword){
                const token = await authentication(response.user_id);
                return res.status(200).json({
                    success: 1,
                    user_name: response.user_name,
                    user_id:response.author_id,
                    token:token
                })
            }
            return res.status(401).json({
                success:0,
                message:"Password InValid !"
            })
            
        })
    }

}