const mongoose = require("mongoose");

// Schema :
const Post_Ref = require("./Schema/PostRef").Post_Ref_Schema;
const Post_Ref_Liked = require("./Schema/PostRef").Post_Ref_Liked;
const Post_Ref_Commented = require("./Schema/PostRef").Post_Ref_Commented;

// Schema : User_Schema
const User_Schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    sign_up_date: {
        type: Date,
        default: Date.now,
    },
    user_post: [
        {
            Post_Ref,
        },
    ],
    liked_post: [
        {
            Post_Ref_Liked,
        },
    ],
    commented_post: [
        {
            Post_Ref_Commented,
        },
    ],
});

// Model : User
const User = mongoose.model("user", User_Schema);

module.exports = User;
