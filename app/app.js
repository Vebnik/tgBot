const { Telegraf } = require('telegraf')
const { StartApp } = require('../start/startApp')
const bot = new Telegraf(process.env.BOT_TOKEN)
const start = new StartApp(bot)


start.eventListen()
start.login()