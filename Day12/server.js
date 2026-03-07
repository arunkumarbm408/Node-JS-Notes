const express=require("express");
const connectDB=require("./config/db")
const studentRoutes=require("./routes/studentRoutes")


const app=express();


app.use(express.json())

app.use("/api/v1", studentRoutes)


app.get("/",(req,res)=>{
    res.send("Server is started")
})




app.listen(6000, async ()=>{
  
    try {
        await connectDB()
    console.log("server is running in the port 6000")
    } catch (error) {
       console.error(error)  
    }
})

//MVC
//model
//views
//controller

//server is running
//server is started
//connect db