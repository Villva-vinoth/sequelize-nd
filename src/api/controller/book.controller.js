const { createBook, getAllBooks } = require('../service/book.service')

module.exports ={
    createBook : (req,res)=>{
        const data = req.body
        createBook(data,(err,response)=>{
            if(err){
                if(err.errors && err.errors[0].length >0){
                    return res.status(400).json({
                        success:0,
                        message:err.errors[0].message
                    })
                }
                else{
                    return res.status(500).json({
                        success:0,
                        message:err.message
                    })
                }
            }
            return res.status(201).json({
                success:1,
                message:"created successfully !"
            })
        })
    },
    getAllBooks:(req,res)=>{
        getAllBooks((err,response)=>{
            if(err){
                if(err.name == "SequelizeDatabaseError"){
                return res.status(500).json({
                    success:0,
                    message:err.message
                })
                    
                }
                else{
                    return res.status(500).json({
                        success:0,
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