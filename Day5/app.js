console.log("hello");
const EventEmitter= require("events")

const emitter= new EventEmitter()

// emitter.emit("bellRing");

emitter.on("bellRing",(data)=>{
    console.log("Door opened" + data)
})

emitter.on("bell",(data)=>{
    console.log("Door opened" + data)
})

emitter.emit("bellRing","houseNo-123");

