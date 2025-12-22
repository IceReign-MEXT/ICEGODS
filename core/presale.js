const fs = require('fs');

const TOKEN_PRICE = 0.00001; // Price in ETH/SOL

function processPurchase(userId, amountPaid, currency) {
    const tokensToGive = amountPaid / TOKEN_PRICE;
    
    const receipt = {
        user: userId,
        paid: amountPaid,
        currency: currency,
        tokensSent: tokensToGive,
        date: new Date().toISOString()
    };
    
    // Log the sale for your Admin Dashboard
    fs.appendFileSync('sales-ledger.txt', JSON.stringify(receipt) + '\n');
    
    return `✅ SUCCESS: ${tokensToGive} $ICEG added to your vault.`;
}

module.exports = { processPurchase };
