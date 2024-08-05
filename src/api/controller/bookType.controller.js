const { createBookType, getAllBookTypes } = require('../service/bookType.service')

module.exports = {
    createBookType:(req,res)=>{
        const data = req.body
        createBookType(data,(err,response)=>{
            if(err){
                if(err.errors && err.errors[0].length > 0){
                    return res.status(400).json({
                        success:0,
                        message:err.errors[0].message
                    })
                }
                else{
                    res.status(500).json({
                        success:1,
                        message:err.message
                    })
                }
            }
            return res.status(201).json({
                success:1,
                message:"Created successfully !"
            })
        })
    },
    getAllBookTypes:(req,res)=>{
        getAllBookTypes((err,response)=>{
            if(err){
                if(err.name =="SequelizeDatabaseError"){
                    return res.status(500).json({
                        success:0,
                        message:err.message
                    })
                }
                else{
                    return res.status(500).json({
                        success:1,
                        message:err.message
                    })
                }
            }
            return res.status(200).json({
                success:1,
                data:response
            })
        })
    }
}