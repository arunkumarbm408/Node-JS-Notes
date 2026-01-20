const http = require("http");
const fs = require("fs");
const url=require("url");
const {add}=require('./Modules/customAdd')


const server = http.createServer((req, res) => {
  console.log("Hello");
  console.log("reqURL is",req.url);
  const parse=url.parse(req.url, true)
//   console.log("result",parse.query.id);
console.log(parse)
    const {price}=parse.query
console.log(price)
  const obj = {
    name: "nodejs",
    place: "bng",
  };
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(obj));
});

server.listen(5000, () => {
  console.log("server started");
//   cal(2,3)
console.log(add(2,3))
});
