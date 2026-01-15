//File READ
const fs=require('fs');

console.log("This is first line")

//read file
const result=fs.readFileSync("./Files/input.txt","utf-8");
console.log(result);

//append file
fs.appendFileSync("./Files/input1.txt","Extra content from sync");

//write file
const res=fs.writeFileSync("./Files/output.txt", result);
console.log(res)


//async
//read file async
fs.readFile("./Files/input1.txt", "utf-8",(err,data)=>{
    if(err){
        console.log(err)
        return
    }
 console.log(data)
});

//write file async
fs.writeFile("./Files/output.txt","Hello i am from write",()=>{
    console.log("result is updated")
})

console.log("this is second line");

//append file async
fs.appendFile("./Files/input1.txt","This is extra line",(err)=>{
    console.log("result is updated");
})

console.log("this is last line")