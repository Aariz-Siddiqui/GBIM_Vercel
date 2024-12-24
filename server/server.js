const express = require("express");
const app = express();
const router = require("./router");
const connectdb = require("./database/db");
const cors = require("cors");
const corsOption ={
    origin:"https://gbim-vercel-zkwo.vercel.app",
    methods:"GET,POST,PUT,PATCH,DELETE,HEAD",
    credentials:true,
     allowedHeaders: "Content-Type,Authorization",

};
app.use(cors(corsOption));
app.use(express.json());
app.use("/",router);
app.get("/", (req,res)=>{res.send("Welcome to the backend")});
app.options("/register", cors(corsOptions));
app.options("/login", cors(corsOptions));
app.options("/contact", cors(corsOptions));
router.route("/register");
router.route("/login");
router.route("/contact");
connectdb().then(app.listen(8000, ()=>{
    console.log("server is up and running at the port number 8000")
}));
