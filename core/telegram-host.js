// ... (previous setup code)
bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, "❄️ **WELCOME TO THE ICEGODS EMPIRE**\n\nChoose your path:", {
        reply_markup: {
            inline_keyboard: [
                [{ text: "🎰 PLAY EMPIRE GAMES", callback_data: 'game' }],
                [{ text: "🚀 LAUNCH TOKEN ()", callback_data: 'launch' }],
                [{ text: "🛡️ WALLET SENTINEL", callback_data: 'monitor' }],
                [{ text: "💳 BUY $ICEG TOKENS", url: 'https://pancakeswap.finance/...' }]
            ]
        }
    });
});

bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    if (query.data === 'game') {
        bot.sendMessage(chatId, "🎰 **GLACIER SHUFFLE: DOUBLE OR NOTHING**\n\nHow many $ICEG do you want to bet?", {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "💎 Bet 1,000 $ICEG", callback_data: 'bet_1000' }],
                    [{ text: "💎 Bet 5,000 $ICEG", callback_data: 'bet_5000' }],
                    [{ text: "💎 Bet 10,000 $ICEG", callback_data: 'bet_10000' }]
                ]
            }
        });
    }
    
    if (query.data.startsWith('bet_')) {
        const amount = parseInt(query.data.split('_')[1]);
        const Game = require('./game-engine');
        const result = Game.playGlacierShuffle(chatId, amount);
        
        const message = result.won 
            ? "❄️ **CONGRATULATIONS!** You doubled your tokens! ✅" 
            : "💀 **OUTCOLD!** The Empire reclaimed your tokens. ❌";
            
        bot.sendMessage(chatId, message);
    }
});

bot.on('callback_query', (query) => {
    if (query.data === 'pay_confirm') {
        bot.sendMessage(query.message.chat.id, "💎 **PAYMENT VERIFICATION**\n\nPlease paste your Transaction Hash (TxID) below. Our Sentinel will verify the funds.");
    }
});

bot.on('message', (msg) => {
    if (msg.text && msg.text.length > 50) { // Likely a TxID
        bot.sendMessage(6453658778, "🔔 **INCOMING PAYMENT ALERT:**\nUser: " + msg.chat.id + "\nHash: " + msg.text);
        bot.sendMessage(msg.chat.id, "⏳ **PENDING:** Your transaction is being audited by the IceGods Mainframe.");
    }
});
