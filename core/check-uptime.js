const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const vaultPath = path.join(__dirname, 'icevault');

console.log("❄️ --- ICEGODS UPTIME MONITOR --- ❄️");

if (!fs.existsSync(vaultPath)) {
    console.log("❌ No bots found in vault.");
} else {
    const users = fs.readdirSync(vaultPath);
    users.forEach(user => {
        const userPath = path.join(vaultPath, user);
        const files = fs.readdirSync(userPath);
        
        files.forEach(file => {
            // We check if PM2 is running this specific file
            exec(`pm2 jlist`, (err, stdout) => {
                const processes = JSON.parse(stdout);
                const isRunning = processes.some(p => p.name.includes(file));
                
                console.log(`User: ${user} | Bot: ${file} | Status: ${isRunning ? '✅ ONLINE' : '⚠️ OFFLINE'}`);
            });
        });
    });
}
