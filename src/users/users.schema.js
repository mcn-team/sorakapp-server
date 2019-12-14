const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String,
    role: String,
}, { timestamps: true });

mongoose.model('User', userSchema);
