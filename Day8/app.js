const fs = require("fs");
console.log("first line started");

//timer phase
// setTimeout(()=>{
//     console.log("timer callback 5 seconds")
// },5000);

// setTimeout(()=>{
//     console.log("timer callback 1 second")
// },1000);

// 2nd phase
fs.readFile("./input.txt", "utf-8", () => {
  console.log("file read");

  setTimeout(() => {
    console.log("timer callback 1 second");
  }, 1000);

  Promise.resolve().then(() => {
    console.log("promise is called");
  });
  process.nextTick(() => {
    console.log("process nexttick called");
  });
});

//3rd phase
setImmediate(() => {
  console.log("this is setImmediate");
});

//4th streams
const rs = fs.createReadStream("./input.txt");

rs.on("close", () => {
  console.log("stream closed");
  
});

rs.close();

console.log("last line");
