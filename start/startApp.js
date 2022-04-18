const { colorLog } = require('../system/chalkLog')
const { commandListen, eventHandler } = require('../command/commandHendler')
const { command } = require('../command/commandList')

function StartApp (bot) {

	this.login = () => {
		bot.launch().then(start => colorLog.info(`App started ⏰ ${new Date().toJSON()}`))
	}

	this.eventListen = () => {
		bot.command(command, ctx => { commandListen(ctx) })

		bot.on('message', ctx => { eventHandler(ctx) })
	}
}

module.exports = { StartApp }