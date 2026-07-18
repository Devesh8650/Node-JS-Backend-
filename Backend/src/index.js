// const express = require("express")
// const app = express();

// app.get("/",(req,res)=>{
//     res.send("Hello Devesh! Welcome to Express.js")
// })

// app.get("/about",(req,res)=>{
//     res.send("This is about page")
// })

// app.get("/contact",(req,res)=>{
//     res.send("This is contact page")
// })

// const PORT = 5000;
// app.listen(PORT,()=>{
//     console.log(`Server start on port ${PORT}`)
// })


// 2ND METHOD

// src/index.js
const express = require("express");
const app = express();

app.use(express.json());

// Routes ko import karna
const userRoutes = require("./routes/userRoutes");

// Express ko batana ki '/api' se shuru hone wale sabhi URLs userRoutes ke paas bhej do
app.use("/api", userRoutes); 

// Fallback Route (404)
app.use((req, res) => {
    res.status(404).json({ success: false, message: "Route Not Found" });
});

app.listen(8080, () => {
    console.log(`Server started on port 8080`);
});