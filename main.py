import os
from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes
from utils.address_tracker import get_wallet_status

BOT_TOKEN = os.getenv("BOT_TOKEN")

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Welcome to ICEGODS bot. Monitoring wallets now.")

async def wallet(update: Update, context: ContextTypes.DEFAULT_TYPE):
    status = get_wallet_status(os.getenv("WALLET_ADDRESS"))
    await update.message.reply_text(f"Wallet status: {status}")

if __name__ == "__main__":
    app = ApplicationBuilder().token(BOT_TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("wallet", wallet))
    app.run_polling()