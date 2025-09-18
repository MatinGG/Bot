import TelegramBot from "node-telegram-bot-api";
import dotenv from 'dotenv'
dotenv.config()
const TOKEN = process.env.BOT_TOKEN;
const bot = new TelegramBot(TOKEN,{
    baseApiUrl:"https://tapi.bale.ai",
    polling: true,
})
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, "تو هم همین طور");
});