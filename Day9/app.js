const express=require("express");
const fs= require("fs")

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

app.post('/students1',(req,res)=>{
    const data=req.body
    console.log(data)
    // res.send("student data received")
    res.json({
        message:"student data inserted",
        name: data.name
    })
})


// let jsonData='{"id":"1","name":"rohan","course":"nodejs"}'
// console.log(JSON.parse(jsonData))

// let data12=JSON.parse(jsonData)
// console.log(JSON.stringify(data12))
//
app.post('/students',(req,res)=>{
    let data= req.body;
    console.log(data);
   
    let studentData=fs.readFileSync("./data/students.json","utf-8");
    let students=JSON.parse(studentData)
    
    const newStudent={
        id:students.length + 1,
        name:data.name,
        course:data.course
    }
     students.push(newStudent)
    
     fs.writeFileSync("./data/students.json",JSON.stringify(students))

     res.status(201).json({
        message:"student added successfully"
     })
})

app.get('/students',(req,res)=>{
    //fs 
    //fs readfile
    //res.json
    const data=fs.readFileSync("./data/students.json","utf-8");
    let resp=JSON.parse(data)
    res.json(resp)
})

app.get('/student/:id',(req,res)=>{
    // let data=
    let studentId= req.params.id
    console.log(studentId)
    let data=fs.readFileSync("./data/students.json", "utf-8")
    let studentsData= JSON.parse(data);

    const student=studentsData.find(s=> s.id == studentId)
    res.json(student)
    
})


//
app.put('/student/:id',(req,res)=>{
    const studentId=req.params.id
    // console.log(studentId)
    const {name,course}=req.body

    const students= fs.readFileSync("./data/students.json","utf-8")
    const studentsData= JSON.parse(students)
    
    console.log(studentsData)
    let index= studentsData.findIndex(s=> s.id== studentId)

console.log("index value is", index)
    studentsData[index] ={ id :studentId,name,course }
    console.log(studentsData)
    //studentData[5]={}
    fs.writeFileSync("./data/students.json", JSON.stringify(studentsData))

  res.status(200).json({
    message:"student list updated"
  })
})

//patch
app.patch("/student/:id",(req,res)=>{
    const studentId=req.params.id
    const updateData=req.body

    const studentsList= JSON.parse(fs.readFileSync("./data/students.json", "utf-8"))

    const student=studentsList.find(s=> s.id==studentId)

    // console.log(student)

    Object.assign(student,updateData)

    // console.log(student)
    // console.log(studentsList)
    fs.writeFileSync("./data/students.json", JSON.stringify(studentsList))

    res.status(200).json({
        message:"student updated by patch"
    })

})

//delete


app.listen(4000,()=>{
    console.log("server is running on port 4000")
})

//route