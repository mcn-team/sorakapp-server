const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const DEFAULT_PORT = 5000;

//models
require('./src/modules/users/users.schema');

//init server
const app = express();

//connect db
const connectionString = 'mongodb://localhost:27017/sorakapp';
mongoose.connect(connectionString, { useNewUrlParser: true })
    .then(() => { return console.log('Database connected successfully'); })
    .catch(err => { return console.log(err); });

//config headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

//parse request body
app.use(bodyParser.json());

//error handling
app.use((err, req, res, next) => {
    console.log(err);
    next();
});

//launch server
app.listen(DEFAULT_PORT, () => {
    console.log(`Server running on port ${DEFAULT_PORT}`);
});
