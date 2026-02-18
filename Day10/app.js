const express=require("express");
const morgan=require("morgan");
require('dotenv').config()
const app=express();
const os= require("os")

console.log(process.env.NODE_ENV)
app.use(express.json())// builtin middleware

if(process.env.NODE_ENV== "development"){
app.use(morgan("dev"))
}

console.log("platform",os.platform())
console.log("type", os.type())
console.log(os.arch())
console.log(os.hostname())
console.log(os.totalmem())
console.log(os.freemem())
console.log(os.cpus().length)//
console.log(os.userInfo())
//application middleware
const myMiddleware= (req,res,next)=>{
console.log("Middleware called");
// res.send("middleware called")
next()
}

app.use(myMiddleware);

const routerMiddleware= (req,res,next)=>{
console.log("router level Middleware called");
// res.send("middleware called")
next()
}

// app.use((err,req,res,next)=>{
//     console.log(err)
//     res.status(400).send("something went wrong")
// })

app.get('/', (req,res)=>{
    // if(true){
    //  throw new Error("something went wrong")
    // }
    console.log(num)
    console.log("this is my first api")
    res.send("server started")
})

app.get('/students',routerMiddleware, (req,res)=>{
    console.log("this is my second api")
    res.send("students api route")
})


// error middleware
app.use((err,req,res,next)=>{
    console.log(err.message)
    res.status(400).send("something went wrong")
})
app.listen(process.env.PORT,()=>{
    console.log("Sever started in the PORT of 6000")
})

//application
//router
//builtin
//error