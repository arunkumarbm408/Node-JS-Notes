const studentModel = require("../models/studentModel")



exports.createStudent = async(req,res)=>{
try {
       const student =await studentModel.create(req.body);
       res.status(201).json(student)
} catch (error) {
    console.log("Errr occured while insertion", error)
    res.status(400).json({
        message:"Error occured while insertion",
        errorMessage: error,
    })
}
}