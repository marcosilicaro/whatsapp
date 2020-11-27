const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    name: String,
    imgSrc: String
})

module.exports = mongoose.model('user', usersSchema);

