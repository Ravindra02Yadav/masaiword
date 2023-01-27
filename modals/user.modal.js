const mongoose = require('mongoose');

const UserModal = mongoose.model('userDetails', {
    level: { type: String, enum: ['High', 'Medium', 'Low'], required: true },
    name: { type: String, required: true },
    score: { type: Number }

})

module.exports = { UserModal};