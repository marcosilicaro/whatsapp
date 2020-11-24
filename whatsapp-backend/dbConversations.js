const mongoose = require('mongoose')

const conversationsSchema = mongoose.Schema({
    users: Array,
    conversationId: String
})

export default mongoose.model('conversation', conversationsSchema);

