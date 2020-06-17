const mongoose = require('mongoose');

const MentorSchema = mongoose.Schema({
    name:String
},{
    timestamps:true
});

module.exports = mongoose.model('Mentors',MentorSchema);