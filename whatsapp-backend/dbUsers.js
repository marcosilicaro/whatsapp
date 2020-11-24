import mongoose from 'mongoose'

const usersSchema = mongoose.Schema({
    name: String,
    imgSrc: String
})

export default mongoose.model('user', usersSchema);

