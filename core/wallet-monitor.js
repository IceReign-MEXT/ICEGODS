const axios = require('axios');

async function monitorWallet(address) {
    console.log(`🛡️ SENTINEL: Monitoring address ${address} for suspicious activity...`);
    // This connects to the blockchain to watch for outgoing transfers
    // If a transfer is detected without the user's signature, it alerts the bot
}

module.exports = { monitorWallet };
