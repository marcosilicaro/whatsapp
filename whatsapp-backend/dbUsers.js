const mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    userId: String,
    name: String,
    imgSrc: String
})

export default mongoose.model('user', usersSchema);

