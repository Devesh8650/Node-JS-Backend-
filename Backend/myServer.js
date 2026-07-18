const http = require("http");

const server = http.createServer((req, res) => {
   console.log("User ne request ki is URL par: ", req.url);
  if (req.url === "/") {
     res.end("Welcome to My E-commerce App");
  } else if (req.url === "/products") {
     res.end("Here is the list of products");
  } else {
     res.end("Route not found");
  }
});

server.listen(8001,()=>{
    console.log("Start the myServer")
})
