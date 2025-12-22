const fs = require('fs');
const path = require('path');

const logPath = path.join(__dirname, 'security-logs.txt');
const vaultPath = path.join(__dirname, 'icevault');

function logSecurityEvent(event) {
    const timestamp = new Date().toISOString();
    const message = `[${timestamp}] ALERT: ${event}\n`;
    fs.appendFileSync(logPath, message);
    console.log(message);
}

// Function to scan files for dangerous commands
function scanFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const dangerousKeywords = ['rm -rf', 'process.exit', 'mkfs', '.destroy()'];
    
    dangerousKeywords.forEach(word => {
        if (content.includes(word)) {
            logSecurityEvent(`Dangerous keyword "${word}" found in ${filePath}`);
        }
    });
}

console.log("🛡️ ICEGODS SECURITY AUDITOR ACTIVE");

// Scan existing vault on startup
if (fs.existsSync(vaultPath)) {
    const folders = fs.readdirSync(vaultPath);
    folders.forEach(folder => {
        const userPath = path.join(vaultPath, folder);
        const files = fs.readdirSync(userPath);
        files.forEach(file => scanFile(path.join(userPath, file)));
    });
}
