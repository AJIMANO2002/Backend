const express = require ("express");
const app=express();
const mongoose =require ("mongoose");
const productrouter =require ("./product")
const  route  = require("./router");
const cors =require ("cors")
const port=5000;

// middleware

app.use(express.json());
app.use(cors());

// db

mongoose.connect(
  "mongodb://localhost:27017/demo", 
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("database start");
  }
);


// Route

app.use("/",route);

app.use("/",productrouter);





// port
app.listen(port,console.log("server started"));