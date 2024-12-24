const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phone:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
);

userSchema.pre("save",async function (next) {
    const user = this;
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(user.password, saltRounds);
        user.password=hashedPassword;
        next();
    }catch(error){
            console.log("error from the pre method",error);
    }
})

userSchema.methods.verifyPassword = function async(password){
    return bcrypt.compare(password,this.password);
    console.log(this.password);
}

const userModel = new mongoose.model("User",userSchema);

module.exports = userModel;