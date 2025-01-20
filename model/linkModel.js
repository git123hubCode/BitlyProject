const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    originalUrl: { type: String, required: true, trim: true },
    shortUrl: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now, expires: '7d' }
});

module.exports = mongoose.model('Link', linkSchema);
