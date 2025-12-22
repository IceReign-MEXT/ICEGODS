const fs = require('fs');
const path = require('path');

const WALLET_ETH = "0x3569846FAc7F7c1F5170a003c5a1ED9Fbf931596";

function playGlacierShuffle(userId, betAmount) {
    // Generate a random number 0-99
    // Logic: 0-47 = User Wins | 48-99 = House Wins (52% Edge for You)
    const result = Math.floor(Math.random() * 100);
    const win = result < 48;
    
    const outcome = {
        user: userId,
        bet: betAmount,
        won: win,
        payout: win ? betAmount * 2 : 0,
        timestamp: new Date().toISOString()
    };

    // Log game data for monetization and house tracking
    fs.appendFileSync(path.join(__dirname, 'game-logs.txt'), JSON.stringify(outcome) + '\n');

    return outcome;
}

module.exports = { playGlacierShuffle };
