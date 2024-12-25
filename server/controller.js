const User = require("./database/user-model");
const contactDB = require("./database/contact-model");
const home = (req,res)=>{
    res.send("Welcome to the home page")
}
const register =async(req,res)=>{
    try{
        const {name,email,phone,password} = req.body;
        const userExist = await User.findOne({email});
        if(userExist){
           return res.status(409).send("User already exist");
        }
        const createUser = await User.create({name,email,phone,password});
        res.status(201).send("User created successfully");
    }catch(error){
        console.log("Error on the register controller", error);
    }
}
const login =async(req,res)=>{
    try{
        const {email,password} = req.body;
        const verifyUser = await User.findOne({email});
        if (!verifyUser){
            return res.status(409).send("User doesnt exist");
        }
        const luser = await verifyUser.verifyPassword(password);
        if (luser){
            res.status(200).send("login successfull");
        }
        else{
            res.status(401).send("Invalid credentials");
        }
    }catch(error){
        console.log("error from the login controller", error);
    }
}
const contact =async(req,res)=>{
   try{
        const {name,email,phone,message} = req.body;
        if(!name||!phone||!email||!message){
            return res.status(409).send("Please fill all the details");
        }
        const saveDetails = await contactDB.create({name,phone,email,message});
        res.status(201).send("Message sent successfully")
   }catch(error){
    console.log("error from the conatct controller", error);
   }
}

module.exports = {register,login,contact};
