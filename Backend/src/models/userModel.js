const mongoose = require("mongoose")
// Rulebook (Schema) banana
const userSchema = new mongoose.Schema({
    name:{
        type:String,  // 'name' hamesha text (string) hona chahiye
        required:true  // Agar 'name' nahi aaya, toh data save mat karna (Error de dena)
    },
    role:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:false
    }
})

//Is rulebook se ek Model (Database Collection) banana
const User = mongoose.model("User",userSchema)
//Isko export karna taaki controller isko use kar sake
module.exports = User;