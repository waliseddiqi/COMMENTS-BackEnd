const express  = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
var PORT  = 4000;
const signin_router = require("./routes/signup_router");
const test_router = require("../COMMENTS-BackEnd/routes/test");
const topic_router = require("./routes/topic_router");
const comment_router = require("./routes/comment_router");
app.use(cors());
app.use(express.json());

app.use("/signup",signin_router);
app.use("/test",test_router);
app.use("/topic",topic_router);
app.use("/comment",comment_router);


connectMongo=()=>{
  mongoose.connect("mongodb://localhost:27017/reactProject",{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true})
  const connection=mongoose.connection;
  connection.once('open',()=>{
      console.log("connected to mongodb")
  })}

connectMongo();


app.listen(PORT,()=>{
  console.log("listening to port "+PORT);
})