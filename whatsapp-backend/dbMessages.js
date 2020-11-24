import mongoose from 'mongoose'

const messagesSchema = mongoose.Schema({
    content: String,
    userId: String,
    conversationId: String,
    readStatus: Boolean
})

export default mongoose.model('message', messagesSchema);

