const fs = require('fs');
const path = require('path');
const vault = path.join(__dirname, 'icevault');

console.log("📊 --- ICEGODS HOSTING STATUS ---");
if (!fs.existsSync(vault)) {
    console.log("Vault empty.");
} else {
    const users = fs.readdirSync(vault);
    users.forEach(user => {
        const files = fs.readdirSync(path.join(vault, user));
        console.log("User [" + user + "] has hosted: " + files.join(', '));
    });
}
