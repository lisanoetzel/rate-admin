//Required dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema to represent a Administrator
const administratorsSchema = new Schema ({
    survey_name: {
        type: String,
        required: true
    },
    survey_title: {
        type: String,
        required: true
    },
    survey_institution: {
        type: String,
        required: true
    },
    survey_term: {
        type: String,
        required: true
    },
    survey_q1: {
        type: String,
        required: true
    },
    survey_q2: {
        type: String,
        required: true
    },
    survey_q3: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = administrator = mongoose.model('administrators', administratorsSchema);