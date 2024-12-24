const mongoose  = require("mongoose");
const URI = "mongodb+srv://ariz:kinged20@cluster0.nnzafvq.mongodb.net/GBIM?retryWrites=true&w=majority&appName=Cluster0";
const connectdb = async ()=>{
    try{
        await mongoose.connect(URI)
        console.log("connection to database successfull");
    }catch(error){
        console.log("database connection",error);
    }
}
module.exports = connectdb;