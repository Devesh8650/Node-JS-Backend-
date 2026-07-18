// const add = require("./math")
// console.log(add(10,30));

// const fs = require("fs")
// fs.writeFileSync("demo.txt","Hello Backend")

// const fs=require("fs");

// console.log("Start");

// fs.writeFileSync("student.txt","Hello Devesh");

// console.log("End");

const fs=require("fs");
console.log("Start")

fs.readFile("student.txt","utf-8",(err,data)=>{

    if(err){

        console.log(err);

    }

    console.log(data);

});

console.log("EnD")
fs.readFile("demo.txt", "utf8", (err, data) => {
    console.log("2");
});

console.log("4");