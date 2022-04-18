const { colorLog } = require('../system/chalkLog')


function StartApp (bot) {

	this.login = () => {
		bot.launch().then(start => colorLog.info(`App started ⏰ ${new Date().toJSON()}`))
	}

	this.eventListen = () => {
		bot.on('sticker', ctx => { console.log(ctx) })

		bot.hears('hi', ctx => { console.log(ctx) })

		bot.command('start', ctx => { console.log(ctx) })
	}

}

module.exports = { StartApp }