require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const DB_NAME = require("./constants");
const router= require('./routes/app')
const app = express();
const bodyParser= require('body-parser')
var cors = require('cors')
app.use(express.json())
var corsOptions = {
  origin: 'https://library-management-system-mern-stack.vercel.app/',
  optionsSuccessStatus: 200 
}
app.get("/", (req, res)=>{
  res.json("Hii")
}
app.use(cors())

// app.use(bodyParser)
app.use('/api/v1/books', router);


try {
  const db = mongoose.connect(`${process.env.MONGODB_URI}`);
  console.log("Database Connected!");

  app.listen(process.env.PORT, () => {
    console.log("The URL of the Database is,", `${process.env.MONGODB_URI}`);
    console.log(`The Server is Running on:${process.env.PORT}`);
  });
} catch (err) {
  console.log("Database Cannot Connect!", err);
}

