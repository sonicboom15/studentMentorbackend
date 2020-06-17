const mongoose = require('mongoose');

const StudentsSchema = mongoose.Schema({
    name:String,
    mentor:String,
    isMentorPresent:Boolean
},{
    timestamps:true
});

module.exports = mongoose.model('Students',StudentsSchema);