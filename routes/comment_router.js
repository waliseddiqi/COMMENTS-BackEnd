const router  = require("express").Router();
const Comment  = require("../dataModels/comments_model");
const Topic  = require("../dataModels/topic_model");


router.route("/addComment").post((req,res)=>{
const comment = req.body.comment;
const userId = req.body.userId;
const username = req.body.username;
const topicId = req.body.topicId;
var commentObj = {
    "comment":comment,
    "userId":userId,
    "username":username,
    "topicId":topicId
}
var commenttype = new Comment(commentObj);
var ObjectID = require('mongodb').ObjectID;
try {
   Topic.updateOne({"_id":ObjectID(topicId)},{"$push":{"comments":commenttype}})
   .then((value)=>{
    res.status(200).send(value);
   }).catch((err)=>{
    res.status(400).send(err);
   })
          
} catch (error) {
    res.status(500).send(error)
}


});


module.exports=router;