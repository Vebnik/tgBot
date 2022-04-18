const { makeButton } = require('../msgEmbeds/msgDecorator')


const getUName = (ctx) => {
	return `${ctx.message.from.first_name} ${ctx.message.from.last_name}`
}

async function help (ctx) {
	const helpObj = [
		{text: 'This is help command 🆘', url: 'https://example.com'},
		{text: 'Use /helpMore for big info ℹ', url: 'https://example.com'}
	]

	ctx.reply(`Hello ${getUName(ctx)} 👋`, await makeButton(helpObj))
}

module.exports = { help }