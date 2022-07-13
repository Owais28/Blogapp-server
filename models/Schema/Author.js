const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Author_Schema = new Schema(
    {
        author_firstname: String,
        author_lastname: String,
        author_id: mongoose.Types.ObjectId,
        author_image_url: String
    }
)


module.exports = Author_Schema;
