const mongoose = require('mongoose')

const Author = require('./Author') //Author Schema

const Schema = mongoose.Schema;

const Comment_Schema = new Schema(
    {
        comment_body : String,
        author : {Author},
        date : {
            type : Date,
            default : Date.now
        }
    }
)

module.exports = Comment_Schema;

