const router = require("express").Router();
const Topic  = require("../dataModels/topic_model");
const Comment = require("../dataModels/comments_model");
router.route("/putTopic").post((req,res)=>{
    
const topic  = req.body.topic;
const description = req.body.description;
const username = req.body.username;
const userId = req.body.userid;
// const commentobj = {
//     "comment":"heyyyy",
//     "downvoteCount":0,
//     "upvoteCount":0,
//     "username":"Heyyy"
// }
//const comment  = new Comment(commentobj);
const topicObj = {
"topic":topic,
"description":description,
"username":username,
"userId":userId,
"Comment":[]
}
const newTopic = new Topic(topicObj);

newTopic.save().then((value)=>{
  
 res.status(200).send(value);
}).catch((err)=>{
res.status(400).send(err);
})
})




module.exports=router;