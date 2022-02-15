const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const LibraryController = require('./controllers/libraryController');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

mongoose.connect(process.env.MONGODB_CONNECTION);

app.get('/api1/getBooks', LibraryController.getBook);

app.post('/api1/addBook', LibraryController.addBook);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});


