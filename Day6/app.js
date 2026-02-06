console.log("hello");
//Readable stream
const fs= require('fs');
const {Transform}=require('stream')

// const readStream=fs.createReadStream('./input.txt',{highWaterMark:1024});
// const writeStream=fs.createWriteStream("./output.txt");

// readStream.on('data',(chunk)=>{
//     console.log("hello first")
//     console.log("chunk length is " + chunk.length)
//      writeStream.write(chunk)
// })

// readStream.on('end',()=>{
//     console.log("reading completed")
//     writeStream.end()
// })

// const writeStream=fs.createWriteStream("./output.txt");

// writeStream.write("hello")
// writeStream.write("node js")
// writeStream.write("hi")

// writeStream.end()

//duplex
// readStream.pipe(writeStream)

//transform stream
const upperCase= new Transform({
    transform(chunk,enc,cb){
      this.push(chunk.toString().toUpperCase())
      cb()
    }
})


fs.createReadStream('./input.txt')
.pipe(upperCase)
.pipe(fs.createWriteStream('./output.txt'))