const mongoose=require("mongoose");
const Schema=mongoose.Schema;
// const Comment = require("./comments_model");
// const commentobj = new Comment();

const topicSchema=new Schema({
    topic:{
        type:String,
        required:true,
        trim:true,
      
    },
    description:{
        type:String,
        trim:true,
    },
    downvoteCount:{
        type:Number,
        default:0,
        trim:true,
    },
    upvoteCount:{
        type:Number,
        default:0,
        trim:true
        
    },
    username:{
        type:String,
        require:true,
        trim:true
    },
    userId:{
        type:String,
        require:true,
        trim:true
    },
    
    // comments:[
    //     Comment.schema
    // ]
    

   
    },{
        timestamps:true,
    }
);

const Topic=mongoose.model('Topic',topicSchema);

module.exports=Topic;