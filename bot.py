import os
from dotenv import load_dotenv
import telebot

# Load environment variables from .env file
load_dotenv()

BOT_TOKEN = os.getenv("BOT_TOKEN")
WALLET_ADDRESS = os.getenv("WALLET_ADDRESS")

bot = telebot.TeleBot(BOT_TOKEN)

@bot.message_handler(commands=["start"])
def send_welcome(message):
    bot.reply_to(message, "👋 Welcome to ICEGODS Bot!\nUse /pay to get the payment wallet.")

@bot.message_handler(commands=["pay"])
def send_wallet(message):
    bot.reply_to(message, f"💰 Send payment to this wallet address:\n`{WALLET_ADDRESS}`", parse_mode="Markdown")

print("ICEGODS Bot Running!")
bot.polling()