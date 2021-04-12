const mongoose=require("mongoose");
const Schema=mongoose.Schema;


const commentSchema=new Schema({
    comment:{
        type:String,
        required:true,
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
    topicId:{
        type:String,
        require:true,
        trim:true
    }
    

   
    },{
        timestamps:true,
    }
);

const Comment=mongoose.model('Comment',commentSchema);

module.exports=Comment;