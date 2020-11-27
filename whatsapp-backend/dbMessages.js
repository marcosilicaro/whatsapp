const mongoose = require('mongoose')

const messagesSchema = mongoose.Schema({
    content: String,
    userId: String,
    conversationId: String,
    readStatus: Boolean
})

module.exports = mongoose.model('message', messagesSchema);

