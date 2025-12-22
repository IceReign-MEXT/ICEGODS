const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const path = require('path');

const token = '8275212490:AAGZzFCBm6JJy_2cGf3CBc_QKzUx5rzsY-s';
const bot = new TelegramBot(token, {polling: false});

// The content of your Empire Launch
const AD_IMAGE = "https://your-hosted-logo-url.com/iceg-logo.png"; 
const MESSAGE = "❄️ **THE ICEGODS EMPIRE TOKEN () IS LIVE** ❄️\n\n" +
              "The most powerful hosting & gaming economy has arrived.\n\n" +
              "💎 **Total Supply:** 30 Billion\n" +
              "🛡️ **Security:** 100% Locked Liquidity\n" +
              "🎮 **Utility:** Play Games & Pay Hosting with $ICEG\n\n" +
              "🚀 **BUY NOW:** [Presale Link Here]";

async function startBroadcast() {
    const vaultPath = path.join(__dirname, 'icevault');
    if (!fs.existsSync(vaultPath)) return console.log("No users found.");

    const users = fs.readdirSync(vaultPath);
    console.log(`📢 Broadcasting to ${users.length} Empire Citizens...`);

    for (const userId of users) {
        try {
            await bot.sendMessage(userId, MESSAGE, { parse_mode: "Markdown" });
            console.log(`✅ Delivered to ${userId}`);
        } catch (err) {
            console.log(`❌ Failed for ${userId}: User likely blocked bot.`);
        }
    }
}

startBroadcast();
