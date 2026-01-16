const http = require("http");
const fs = require("fs");

const html = fs.readFileSync("./Files/index.html", "utf-8");

const server = http.createServer((req, res) => {
  console.log("Hello");
  console.log(req.url);
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
});
