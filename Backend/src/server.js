// METHOD 1 SIMPLE 

// const http= require("http")
// // Creating the server
// const server = http.createServer((req,res)=>{
//     console.log("User ne request ki is URL par: ", req.url);
//     // reply the client
//     // res.end("Hello, this is first node js server")
//     if(req.url === "/"){
//         res.end("Welcome to the Home Page ")
//     }
//     else if(req.url === "/about"){
//         res.end("Hi, I am Devesh. I am a Backend Developer!");
//     }
//     else if (req.url === "/contact"){
//         res.end("Contact me at: devesh@example.com");
//     }
//     else{
//         res.end("404- page not found")
//     }
// });
// // start the server
// server.listen(8000,()=>{
//    console.log("running the server")
// })


// METHOD 2 USING EXPRESS 
const express = require("express")
const app = express()

// 1. Ye hai hamara Translator (Middleware) - POST API ke liye bohot zaroori!
app.use(express.json());

//temporary Database (Array)
const users=[]
app.get("/users",(req,res)=>{
    res.json({
        success: true,
        totalUsers: users.length,
        data: users
    })
})

// POST API: Naya user add karne ke liye
app.post("/adduser",(req,res)=>{
    const userData=req.body;
    console.log("Postman se ye data aaya hai:", userData);

    // Naye user ko hamare temporary database (array) me save karna
    users.push(userData);
    res.json({
        success: true,
        message: "User successfully database me add ho gaya!",
        dataAdded: userData
    });
})

app.get("/",(req,res)=>{
    res.send("Welcome to my Portfolio")
})
// app.get("/skills",(req,res)=>{
//     res.send("My skills are Node.js, Express, and MongoDB")
// })
// app.get("/contact",(req,res)=>{
//     res.send("9876543210")
// })

app.post("/register",(req,res)=>{
    // Postman ki 'Body' se jo data aayega, wo hume req.body me milega
    const userData = req.body;
    // Isko terminal par print karake dekhte hain
    console.log("Postman se ye data aaya hai:", userData);
    res.json({
        success:true,
        message:"Data successfully receive ho gaya!",
        dataReceived:userData
    })
})

app.use((req,res)=>{
    res.status(404).json({
        success:false,
        message:"API Route Not Found"
    })
})
const port =8080
app.listen(port,()=>{
    console.log(`Server start on port ${port}`)
})