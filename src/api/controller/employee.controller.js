const { response } = require('express');
const { createEmployee, getAllEmployee } = require('../service/employee.service')

module.exports ={
    createEmployee: async (req,res)=>{
        const data = req.body;
        // console.log("controller",data)
        createEmployee(data,(err,response)=>{
            if(err){
                if(err.errors && err.errors[0].length >0){
                    return res.status(500).json(
                        {
                            message:err.errors[0].message,
                            success:0,
                            
                        }
                    )
                }
                else{
                    return res.status(500).json(
                        {
                            message:"Internal sever error !",
                            success:0,
                            error:err.message
                            
                        }
                    )
                }
            }
            return res.status(201).json(
                {
                    message:"Employee created Successfully !",
                    success:1
                }
            )
        })
    },
    getAllEmployee: async (req,res) =>{
        getAllEmployee((err,response)=>{
            if(err){

                if(err.name == 'SequelizeDatabaseError'){
                    return res.status(500).json({
                        message:"Database Error",
                        success:0
                    })
                }

                return res.status(500).json({
                    message:"Internal Server Error !",
                    success:0
                })
            }
            return res.status(200).json({
                message:"fetched Successfully !",
                success:1,
                data:response
            })
        })
    }
}