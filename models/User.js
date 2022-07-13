const mongoose = require('mongoose')
const Post_Ref = require('./Schema/PostRef').Post_Ref_Schema
const Post_Ref_Liked = require('./Schema/PostRef').Post_Ref_Liked
const Post_Ref_Commented = require('./Schema/PostRef').Post_Ref_Commented

const User_Schema = new mongoose.Schema({
    name : String,
    email: String,
    password:String,
    user_post : [
        { 
            Post_Ref_Schema
        }
    ],
    liked_post : [
        {
            Post_Ref_Liked
        }
    ],
    commented_post : [
        {
            Post_Ref_Commented
        }
    ]
}
)

const User = mongoose.model('user',User_Schema);

module.exports = User;


