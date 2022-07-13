var mongoose = require('mongoose');

// Schema :
const Author = require('./Schema/Author');
const Comment = require('./Schema/Comment')


const Schema = mongoose.Schema;

// Schema : Post_Schema
const Post_Schema = new Schema(
    {
        title: String,
        body: String,
        author: { Author },
        date: {
            type: Date,
            default: Date.now
        },
        comments: [{ Comment }],
        tags: [String]
    }
)

const Post = mongoose.model('post', Post_Schema);

module.exports = Post;