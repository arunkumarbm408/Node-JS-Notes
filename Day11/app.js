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

//get api
app.get("/students",async (req,res)=>{
      const students=await Student.find();
      console.log(students);
      res.status(200).json({
        message:"students list fetched",
        data: students
      })
})


//updation
app.get("/student/:id",async (req,res)=>{
     const student=await Student.findById(req.params.id)
     res.status(200).json({
        message:"student data fetched",
        data: student
     })
})


app.patch("/student/:id",async(req,res)=>{
     const updated=await Student.findByIdAndUpdate(req.params.id, {$set :req.body}, {new :true});
     console.log(updated)
    res.status(200).json({
        message:"student data is updated"
    })
})

app.delete("/student/:id",async (req,res)=>{
     await Student.findByIdAndDelete(req.params.id);

     res.status(200).json({
        message:"data deleted"
     })
})
app.get('/',(req,res)=>{
    res.send("server started")
})

app.listen(5000,()=>{
    console.log("server is running in port 5000")
})