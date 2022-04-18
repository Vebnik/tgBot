const { command } = require('./commandList')

async function isCommand(ctx) {
	let commandTrue

	await command.forEach(el => {
		if (ctx.message.text.includes(el)) { commandTrue = el }
	})

	return commandTrue
}


function commandListen(ctx) {
	isCommand(ctx).then(comm => {
		switch (comm) {

			case 'help':
				ctx.reply('You use help')
			return true

			case 'start':
				ctx.reply('You use start')
			return true

		}
	})
}


module.exports = { commandListen }