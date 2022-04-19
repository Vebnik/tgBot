const { Markup } = require('telegraf')


const makeButton = async (data) => {
	if (!Array.isArray(data)) return 'Not Array'

	const arrButtons = []

	await data.forEach(el => arrButtons.push(Markup.button.url(`${el.text}`, `${el?.url}`)))

	return Markup.inlineKeyboard(arrButtons, {columns: 1})
}

const getUName = (ctx) => {
	return `${ctx.message.from.first_name} ${ctx.message.from.last_name}`
}

module.exports = { makeButton, getUName }
