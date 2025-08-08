import os
from dotenv import load_dotenv
import telebot

# Load environment variables from .env
load_dotenv()

BOT_TOKEN = os.getenv("BOT_TOKEN")
WALLET_ADDRESS = os.getenv("WALLET_ADDRESS")

if not BOT_TOKEN or not WALLET_ADDRESS:
    print("❌ BOT_TOKEN or WALLET_ADDRESS not loaded. Check your .env file.")
    exit()

bot = telebot.TeleBot(BOT_TOKEN)

@bot.message_handler(commands=['start'])
def send_welcome(message):
    bot.send_message(message.chat.id, "👋 Welcome to ICEGODS Bot!\nUse /pay to get the payment wallet.")

@bot.message_handler(commands=['pay'])
def send_wallet(message):
    bot.send_message(message.chat.id, f"💰 Send payment to this wallet:\n`{WALLET_ADDRESS}`", parse_mode="Markdown")

print("✅ ICEGODS Bot Running!")
bot.infinity_polling()