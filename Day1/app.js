//First Node js project
console.log("Hello nodejs");

//accept input from the user
const readline= require("readline");

const rl=readline.createInterface({
    input : process.stdin,
    output: process.stdout
})

rl.question("What is node js  ?", (answer)=>{
    console.log("The answer is" + answer)
    rl.close()
})