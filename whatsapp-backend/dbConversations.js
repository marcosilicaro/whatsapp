const mongoose = require('mongoose')

const conversationsSchema = mongoose.Schema({
    userIdsInvolved: Array
})

module.exports = mongoose.model('conversation', conversationsSchema);

