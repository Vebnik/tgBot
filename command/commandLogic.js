const { makeButton, getUName } = require('../msgEmbeds/msgDecorator')


async function help (ctx) {
	const helpObj = [
		{text: 'This is help command 🆘', url: 'https://example.com'},
		{text: 'Use /helpMore for big info ℹ', url: 'https://example.com'}
	]

	ctx.reply(`Hello ${getUName(ctx)} 👋`, await makeButton(helpObj))
}

module.exports = { help }