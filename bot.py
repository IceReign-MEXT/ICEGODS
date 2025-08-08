import logging
from telegram import Update
from telegram.ext import ApplicationBuilder, CommandHandler, MessageHandler, ContextTypes, filters

# Replace this with your real bot token
BOT_TOKEN = "YOUR_BOT_TOKEN_HERE"
ADMIN_ID = 6453658778

# Set up logging
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)

user_data = {}

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Welcome! Please send me your wallet address (ETH or SOL).")
    user_data[update.message.chat_id] = {"step": "awaiting_wallet"}

async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    chat_id = update.message.chat_id
    text = update.message.text

    # Check if we're expecting a wallet address
    if chat_id in user_data and user_data[chat_id]["step"] == "awaiting_wallet":
        user_data[chat_id]["wallet"] = text
        user_data[chat_id]["step"] = "done"

        # Save to local file
        with open("users.txt", "a") as f:
            f.write(f"User ID: {chat_id} | Wallet: {text}\n")

        # Notify admin
        await context.bot.send_message(chat_id=ADMIN_ID,
            text=f"New user submitted a wallet:\nUser: {update.message.from_user.username}\nWallet: {text}"
        )

        # Confirm to user
        await update.message.reply_text("✅ Thank you. Your wallet address has been received.")

    else:
        await update.message.reply_text("Please use /start to begin.")

if __name__ == '__main__':
    app = ApplicationBuilder().token(BOT_TOKEN).build()
    app.add_handler(CommandHandler("start", start))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))
    app.run_polling()