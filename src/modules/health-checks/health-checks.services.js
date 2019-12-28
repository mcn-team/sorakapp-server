const mongoose = require('mongoose');

const healthSchema = new mongoose.Schema();
const Health = mongoose.model('Health', healthSchema);

async function getDatabaseHealth() {
    return Health
        .find()
        .lean();
}

module.exports.getDatabaseHealth = getDatabaseHealth;
