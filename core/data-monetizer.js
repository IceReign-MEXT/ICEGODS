const fs = require('fs');
const path = require('path');

function collectData(userId, action) {
    const logEntry = `${new Date().toISOString()} | User: ${userId} | Action: ${action}\n`;
    fs.appendFileSync(path.join(__dirname, 'empire-data.log'), logEntry);
    // This log can be sold to data brokers for pure profit
}

module.exports = { collectData };
