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

exports.getStudentById= async(req,res)=>{
    try {
        let id= req.params.id;
         console.log(id);
         const studentData=await studentModel.findById(id);
         console.log(studentData)
         res.status(200).json({
            message: "Data fetched",
            data: studentData
         })
    } catch (error) {
        console.log("Error occuerrde while getiing student", error)
    }
}