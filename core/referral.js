const fs = require('fs');
const path = require('path');

const refDataPath = path.join(__dirname, 'referrals.json');

// Initialize database if missing
if (!fs.existsSync(refDataPath)) fs.writeFileSync(refDataPath, JSON.stringify({}));

const ReferralSystem = {
    getLink: (userId) => `https://t.me/DashboardPay_Bot?start=ref_${userId}`,
    
    track: (newUserId, referrerId) => {
        let db = JSON.parse(fs.readFileSync(refDataPath));
        if (newUserId == referrerId) return; // No self-referrals
        
        if (!db[referrerId]) db[referrerId] = [];
        if (!db[referrerId].includes(newUserId)) {
            db[referrerId].push(newUserId);
            fs.writeFileSync(refDataPath, JSON.stringify(db));
            return db[referrerId].length;
        }
        return null;
    },

    getCount: (userId) => {
        let db = JSON.parse(fs.readFileSync(refDataPath));
        return db[userId] ? db[userId].length : 0;
    }
};

module.exports = ReferralSystem;
