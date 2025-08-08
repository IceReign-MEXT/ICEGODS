import telebot
import os
from dotenv import load_dotenv

# Load token from .env
load_dotenv()
BOT_TOKEN = os.getenv("BOT_TOKEN")

bot = telebot.TeleBot(BOT_TOKEN)

# Replace with your real wallet addresses
sol_wallet = "3rMsqvERQAEaGrkqt5wJFrg2715BDcXJMRf6bnBFGzP9"
eth_wallet = "0xba43fd4a3a4c1cd93a2e6379411267e1159bbc10"

@bot.message_handler(commands=['start'])
def send_welcome(message):
    bot.reply_to(message, f"👋 Welcome to ICEGODS, {message.from_user.first_name}!\n\nSend /pay to get payment instructions.")

@bot.message_handler(commands=['pay'])
def send_payment_info(message):
    reply = (
        "💸 Send your payment to one of the addresses below:\n\n"
        f"🔵 *Solana*: `{sol_wallet}`\n"
        f"🟠 *Ethereum*: `{eth_wallet}`\n\n"
        "After sending, reply here with your transaction hash."
    )
    bot.send_message(message.chat.id, reply, parse_mode="Markdown")

# Optional: Handle text messages (e.g., user sends transaction hash)
@bot.message_handler(func=lambda m: True)
def handle_message(message):
    bot.reply_to(message, "✅ Thanks! We'll verify your payment soon.")

print("ICEGODS Bot Running!")
bot.infinity_polling()