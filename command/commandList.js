
const command = [
	'start',
	'help'
]

async function isCommand(ctx) {
	let commandTrue

	await command.forEach(el => {
		if (ctx.message.text.includes(el)) { commandTrue = el }
	})

	return commandTrue
}


module.exports = { command, isCommand }