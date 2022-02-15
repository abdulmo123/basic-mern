const BookModel = require('../models/Books');

exports.getBook = (req, res) => {
    BookModel.find().then(data => {
        res.send(data)
    })
}

exports.addBook = (req, res) => {
    const book = new BookModel({
        title: req.body.title,
        author: req.body.author,
        pages: req.body.pages
    })
    book.save().then(data => {
        res.send(data)
    })
}