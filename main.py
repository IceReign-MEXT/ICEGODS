import os
from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes
from utils.address_tracker import get_wallet_status

# Use environment variables or fallback defaults
BOT_TOKEN = os.getenv("BOT_TOKEN", "8271637966:AAG7w3unmqXvGC8hPOdm7cTZpLIduNEyaJY")
WALLET_ADDRESS = os.getenv("WALLET_ADDRESS", "3rMsqvERQAEaGrkqt5wJFrg2715BDcXJMRf6bnBFGzP9")

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("👋 Welcome to ICEGODS Bot.\n\nTracking wallets and monitoring status securely.")

async def wallet(update: Update, context: ContextTypes.DEFAULT_TYPE):
    status = get_wallet_status(WALLET_ADDRESS)
    await update.message.reply_text(f"📊 Wallet status: {status}")

if __name__ == "__main__":
    app = ApplicationBuilder().token(BOT_TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("wallet", wallet))
    app.run_polling()