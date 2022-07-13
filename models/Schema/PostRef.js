const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Schema : Post_Ref
const Post_Ref_Schema = new Schema(
    {
        post_id : mongoose.Types.ObjectId,
        post_title : String,
        post_date : Date,
        no_of_comments : {
            type : Number, 
            default : 0
        },
        post_likes : {
            type : Number, 
            default : 0
        },
        post_share : {
            type : Number, 
            default : 0
        }
    }
);

// Schema : Post_Ref_Liked
const Post_Ref_Liked = new Schema(
    {
        post_id : mongoose.Types.ObjectId,
        post_title : String,
    }
)

// Schema : Post_Ref_Commented
const Post_Ref_Commented = new Schema(
    {
        post_id : mongoose.Types.ObjectId,
        post_title : String
    }
)


module.exports = {
    Post_Ref_Schema,  
    Post_Ref_Liked,
    Post_Ref_Commented,
} 