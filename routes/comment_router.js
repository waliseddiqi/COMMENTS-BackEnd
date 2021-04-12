const router  = require("express").Router();
const Comment  = require("../dataModels/comments_model");
const Topic  = require("../dataModels/topic_model");


router.route("/addComment").post((req,res)=>{
const comment = req.body.comment;
const userId = req.body.userId;
const username = req.body.username;
const topicId = req.body.topicId;

/**
 * @type {Object}
 * this is Comment Object that is more easy to use in MongoDB
 */
var commentObj = {
    "comment":comment,
    "userId":userId,
    "username":username,
    "topicId":topicId
}
var newcomment = new Comment(commentObj);
//var ObjectID = require('mongodb').ObjectID;
try {
    newcomment.save(commentObj).then((value)=>{
        res.status(200).send(value);
    }).
    catch((err)=>{
        res.status(400).send(err);
    })
    ///old approach
    // Topic.updateOne({"_id":ObjectID(topicId)},{"$push":{"comments":commenttype}})
    // .then((value)=>{
     
    //  if(value["nModified"]==0){
    //      res.status(200).send({"added":0})
    //  }
    //  else{
    //      res.status(200).send({"added":value["nModified"]})
    //  }
    //  res.status(200).send(value);
    // }).catch((err)=>{
    //  res.status(400).send(err);
    // })  
    } catch (error) {
    res.status(500).send({"error":error});
    }
  
          



});


router.route("/getCommentsWithTopicId").get((req,res)=>{
    const limit = req.query.limit==undefined?"10":req.query.limit;
   
   const topicId = req.params;
   console.log(topicId);
   try {
    Comment.find({"topicId":topicId}).limit(parseInt(limit)).then((value)=>{
      res.status(200).send(value);
    }).catch((err)=>{
      res.status(400).send(err);
    })
   } catch (error) {
     res.status(500).send({"error":error});
   }
 
})


router.route("/getCommentsWithUserId").get((req,res)=>{
    const limit = req.query.limit==undefined?"10":req.query.limit;
   
   const userId = req.body.userId;
   try {
    Comment.find({"userId":userId}).limit(parseInt(limit)).then((value)=>{
      res.status(200).send(value);
    }).catch((err)=>{
      res.status(400).send(err);
    })
   } catch (error) {
     res.status(500).send({"error":error});
   }
 
})



module.exports=router;