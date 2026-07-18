const users=[]         //Temporary DataBase
const getUsers=(req,res)=>{
    res.json({
        success:true,
        totalUsers:users.length,
        data:users
    })
}

const addUser = (req,res)=>{
    const userData = req.body;
    users.push(userData);
    res.json({
        success:true,
        message:"User successfully database me add ho gaya!",
        dataAdded:userData
    })
}

// In dono functions ko export kar rahe hain taaki baaki files inhe use kar sakein
module.exports ={
    getUsers,addUser
}