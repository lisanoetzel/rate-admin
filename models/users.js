//Required dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema to represent a User
const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = user = mongoose.model('users', userSchema);