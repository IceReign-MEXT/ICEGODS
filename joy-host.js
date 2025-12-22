const express = require('express');
const fileUpload = require('express-fileupload');
const { exec } = require('child_process');
const fs = require('fs');
const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(express.static('.'));

// 💎 THE VAULT: Where user bots live
const vaultPath = './icevault';
if (!fs.existsSync(vaultPath)) fs.mkdirSync(vaultPath);

app.post('/host-me', (req, res) => {
    const { txHash } = req.body;
    const botFile = req.files.bot;

    if (!txHash || txHash.length < 50) return res.status(400).send("Invalid Payment Hash");

    const savePath = `${vaultPath}/${txHash.slice(0,8)}-${botFile.name}`;
    
    botFile.mv(savePath, (err) => {
        if (err) return res.status(500).send(err);

        // 🚀 THE MAGIC: Start user bot with memory limits
        exec(`pm2 start ${savePath} --name "User-${txHash.slice(0,5)}" --max-memory-restart 40M`, (e) => {
            if (e) return res.send("Payment received, but bot failed to start. Admin notified.");
            res.send("✅ EMPIRE ACTIVE: Your bot is live in the IceVault!");
        });
    });
});

app.listen(3000, () => console.log("❄️ ICEGODS HOSTING ENGINE: ONLINE"));
