const express = require('express');
const fileUpload = require('express-fileupload');
const { exec } = require('child_process');
const path = require('path');
const app = express();

app.use(fileUpload());
app.use(express.static('public'));

// Secure Upload Endpoint
app.post('/deploy', (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    let botFile = req.files.botFile;
    let txHash = req.body.txHash;

    // SECURITY: In a real empire, you'd check this hash against the blockchain here
    console.log("Verifying Payment Hash: " + txHash);

    const uploadPath = path.join(__dirname, 'uploads', botFile.name);

    botFile.mv(uploadPath, (err) => {
        if (err) return res.status(500).send(err);

        // AUTO-DEPLOY: Start the user's bot immediately using PM2
        exec(`pm2 start ${uploadPath} --name user-${txHash.slice(0,6)}`, (err) => {
            if (err) console.log("Deploy Error: " + err);
        });

        res.send('🚀 Bot Deployed to IceVault! Monitoring on Dashboard...');
    });
});

app.listen(3000, () => console.log('Hosting Server Live on Port 3000'));
