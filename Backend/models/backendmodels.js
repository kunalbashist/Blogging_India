const mongoose = require('mongoose')

const blogTemplate = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    category:{
        type:String,
        required: true
    },
    conclusion:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('blog', blogTemplate)