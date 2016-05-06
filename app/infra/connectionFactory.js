var mysql = require('mysql');

function createDBConnection(){
	return mysql.createConnection({
			host : 'localhost',
			user : 'daniel',
			password : 'leinad',
			database : 'casadocodigo_nodejs'
	})
}

//wrapper
module.exports = function () {
	return createDBConnection;
}