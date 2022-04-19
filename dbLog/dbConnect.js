const sqlite = require('sqlite3').verbose()
const path = require('path')


function ConnectDb () {
	const db = new sqlite.Database(path.resolve('tgLogs'))

	this.createTable = async (tableName) => {
		await db.serialize(() => {
			db.run(`CREATE TABLE ${tableName} (userName TEXT, command TEXT, content TEXT, date DATETIME)`)
		})
	}

	this.writeDb = async (tableName, data) => {
		const stmt = db.prepare(`INSERT INTO ${tableName} VALUES (?, ?, ?, ?)`)

		stmt.run(...data)
		stmt.finalize()
	}

	this.closeDb = () => {
		db.close()
	}

	this.getDbData = (tableName) => {
		db.each(`SELECT * FROM ${tableName}`, (err, row) => {
			console.log(row.id + ": " + row.info)
		})
	}
}

module.exports = { ConnectDb }

// const dataBase = new ConnectDb()
// dataBase.writeDb('logs', ['bik', 'test', 'hhello', '2022-04-19 22:22:34'])
// dataBase.closeDb()