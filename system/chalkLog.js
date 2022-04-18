const ch = require('chalk')


const colorLog = {
	info: (str) => console.log(ch.blue(str)),
	err: (str) => console.log(ch.red(str)),
	log: (str) => console.log(ch.yellow(str))
}


module.exports = { colorLog }