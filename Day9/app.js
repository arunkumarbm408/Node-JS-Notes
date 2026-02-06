const express=require("express");

const app=express()


app.use(express.json())


app.get('/',(req,res)=>{
    res.send("hello from get api")
})

app.get('/home',(req,res)=>{
    console.log(req.query)
    // res.send("hello from home")
    res.json({
        name:"nodejs",
        file:"app"
    })
})


app.get('/products/:id',(req,res)=>{
    console.log(req.params.id)
    res.send("this is your product list")
})

app.post('/products',(req,res)=>{
    res.send("product added")
})

app.post('/students',(req,res)=>{
    const data=req.body
    console.log(data)
    // res.send("student data received")
    res.json({
        message:"student data inserted",
        name: data.name
    })
})

app.get('/students',(req,res)=>{
    //fs 
    //fs readfile
    //res.json
})

app.listen(4000,()=>{
    console.log("server is running on port 4000")
})

//route