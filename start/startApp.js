const { colorLog } = require('../system/chalkLog')
const { commandListen } = require('../command/commandLogic')
const { command } = require('../command/commandList')

function StartApp (bot) {

	this.login = () => {
		bot.launch().then(start => colorLog.info(`App started ⏰ ${new Date().toJSON()}`))
	}

	this.eventListen = () => {
		bot.on('sticker', ctx => { console.log(ctx) })

		bot.hears('hi', ctx => { console.log(ctx) })

		bot.command(command, ctx => { commandListen(ctx) })
	}
}

module.exports = { StartApp }