const mongoose = require("mongoose")

const connectDB= async ()=>{
    try {
        console.log("trying to connect mongodb")
       await mongoose.connect("mongodb://localhost:27017/school");
       console.log("Mongodb is connected")

    } catch (error) {
        console.error("Error occured while connectiong to MongoDB", error)
    }
}


module.exports =connectDB;
