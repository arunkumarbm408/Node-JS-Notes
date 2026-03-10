const studentModel = require("../models/studentModel")
const bcrypt= require("bcrypt");
const jwt= require("jsonwebtoken")


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

exports.signupStudent= async (req,res)=>{
    try {
      const {name,email,password}=req.body;
        const existStudent=await studentModel.find({email});
        console.log("Exist", existStudent);

        if(existStudent.length){
            res.status(400).json({
                message:"This email is already exist please provide other email"
            })
        }
       const hashedPass=await bcrypt.hash(password,10);

       console.log(hashedPass);
       const newStudent=new studentModel({
        name,
        email,
        password:hashedPass
       })
       
       await newStudent.save();
       res.json({
        message:"Student registed",
       })
    } catch (error) {
        console.error(error)
    }
}

exports.loginStudent= async(req,res)=>{
    try {
        const {email,password}=req.body;
        const student=await studentModel.findOne({email});

        if(!student){
            return res.status(400).json({message:"student is not found please do signup"})
        }

        const matched=await bcrypt.compare(password, student.password);
       
        if(!matched){
            return res.status(400).json({message:"password is incorrct"})
        }
         const token=jwt.sign({id:student._id, email:student.email},"abcd",{expiresIn:"1h"})
   res.status(200).json({
    messgae:"success",
    jstoken:token
   })

    } catch (error) {
        console.error(error)
    }
}

