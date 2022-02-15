const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    pages: Number
});

const BookModel = mongoose.model("books", BookSchema);
module.exports = BookModel;