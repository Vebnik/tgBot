const ch = require('chalk')


const colorLog = {
	info: (str) => console.log(ch.blue(str)),
	err: (str) => console.log(ch.red(str))
}


module.exports = { colorLog }