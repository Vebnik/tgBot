const { ConnectDb } = require('./dbConnect')
const { colorLog } = require('../system/chalkLog')
const dataBase = new ConnectDb()

module.exports = function (ctx, cum) {

	const dateTime = new Date().toJSON().replace(/[TZ]/gi, ' ').split('.')[0]
	const dataLog = [ctx.from.username, cum || 'Empty', ctx.message.text, dateTime]

	dataBase.writeDb('logs', dataLog).catch(err => colorLog.err(err))
}