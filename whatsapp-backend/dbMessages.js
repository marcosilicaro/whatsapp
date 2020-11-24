const mongoose = require('mongoose')

const messagesSchema = mongoose.Schema({
    messageId: String,
    content: String,
    userId: String,
    conversationId: String,
    readStatus: Boolean
})

export default mongoose.model('message', messagesSchema);

