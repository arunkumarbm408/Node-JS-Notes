//please create one node js server in your local
const express=require("express");
const mongoose=require("mongoose")

const app=express();
app.use(express.json())

//mongodb
mongoose.connect("mongodb://localhost:27017/school")
.then(()=> console.log("connected"))
.catch(()=> console.log("error"))

//Schema
 const studentSchema=new mongoose.Schema({
    name: String,
    department:String
})

//model
const Student= mongoose.model("Student", studentSchema);

//insertion
app.post("/add-student",async (req,res)=>{
    console.log(req.body)
      const student=new Student(req.body);
      await student.save();
      res.json({message:"Student added"})
})

app.get('/',(req,res)=>{
    res.send("server started")
})

app.listen(5000,()=>{
    console.log("server is running in port 5000")
})