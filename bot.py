from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes
import os

TOKEN = "8271637966:AAG7w3unmqXvGC8hPOdm7cTZpLIduNEyaJY"

# Replace with your payment address or use it later in a command
RECEIVE_WALLET_SOL = "3rMsqvERQAEaGrkqt5wJFrg2715BDcXJMRf6bnBFGzP9"
RECEIVE_WALLET_ETH = "0xba43fd4a3a4c1cd93a2e6379411267e1159bbc10"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "👋 Welcome to ICEGODS Bot!\n\n"
        "Send /wallet to get the payment wallet address.\n"
        "Send /help to see what I can do."
    )

async def wallet(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        f"💸 Send your payments here:\n\n"
        f"• Solana: `{RECEIVE_WALLET_SOL}`\n"
        f"• Ethereum: `{RECEIVE_WALLET_ETH}`",
        parse_mode="Markdown"
    )

async def help_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "/start - Greet user\n"
        "/wallet - Show payment wallets\n"
        "/help - Show this message"
    )

if __name__ == '__main__':
    app = ApplicationBuilder().token(TOKEN).build()

    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("wallet", wallet))
    app.add_handler(CommandHandler("help", help_command))

    print("🚀 ICEGODS Bot is now running on Telegram...")
    app.run_polling()