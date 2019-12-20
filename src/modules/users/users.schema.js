const mongoose = require('mongoose');

const { USERS_ROLES } = require('../../constants/roles.constants');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: Object.values(USERS_ROLES),
        required: true
    }
}, { timestamps: true });

mongoose.model('User', userSchema);
