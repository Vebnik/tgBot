const { isCommand } = require('./commandList')
const { colorLog } = require('../system/chalkLog')
const { help } = require('./commandLogic')
const logs = require('../dbLog/makeLogs')

function commandListen(ctx) {
	isCommand(ctx).then(comm => {
		logs(ctx, comm)

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
	logs(ctx)
	const msgContent = ctx.message.text
	colorLog.log(msgContent)
}

module.exports = { commandListen, eventHandler }