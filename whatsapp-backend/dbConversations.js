import mongoose from 'mongoose'

const conversationsSchema = mongoose.Schema({
    userIdsInvolved: Array
})

export default mongoose.model('conversation', conversationsSchema);

