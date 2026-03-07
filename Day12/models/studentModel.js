const mongoose= require("mongoose");


 const studentSchema=new mongoose.Schema({
    name :{
        type : String,
        required: true
    },
    course:{
        type : String,
        required :true,
    },
    email :{
        type : String,
        required:true
    },
    isActive :{
        type : Boolean,
        default : false
    }
}, {timestamps:true});

module.exports = mongoose.model("Student", studentSchema)