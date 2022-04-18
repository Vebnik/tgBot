const { Markup } = require('telegraf')


const makeButton = async (data) => {
	if (!Array.isArray(data)) return 'Not Array'

	const arrButtons = []

	await data.forEach(el => arrButtons.push(Markup.button.url(`${el.text}`, `${el?.url}`)))

	return Markup.inlineKeyboard(arrButtons, {columns: 1})
}

module.exports = { makeButton }
