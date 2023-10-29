const mongoose = require('mongoose')
const studentSchema = require('mongoose')
const studentSchema = new mongoose.Schema({
    frame : {
        type : String,
    },
    lname : {
        type : String,
    },
    email : {
        type : String,
        require : true,
        unique : true,
    },
    password : {
        type : String,
        require : true,
    },
    address : {
        type : String,
    }
    },{timestamps: true
})
module.exports = mongoose.model('Student', studentSchema)