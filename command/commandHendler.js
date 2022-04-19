const { isCommand } = require('./commandList')
const { colorLog } = require('../system/chalkLog')
const { help } = require('./commandLogic')
const { ConnectDb } = require('../dbLog/dbConnect')
const dataBase = new ConnectDb()

function commandListen(ctx) {

	isCommand(ctx).then(comm => {
		switch (comm) {

			case 'help':
				help(ctx).catch(err => colorLog.err(err))
			return true

			case 'start':
				ctx.reply('You use start')
			return true

		}
	})
}

function eventHandler(ctx) {
	const msgContent = ctx.message.text
	colorLog.log(msgContent)
}

module.exports = { commandListen, eventHandler }