const mysql = require('mysql');
// Para elaborar consultas async
const util = require('util');
const keys = require('./keys.js');

// En lugar de createConnetion se usa createPool para que las conexiones se ejecuten en secuencia.
// Desventaja: Este módulo te obliga a hacer uso del CallBack, por tanto, No se puede hacer uso del sync await.
// Solución: hacer uso del parámetro 'promisify' en el módulo de NodeJS llamado 'util'.
const connect_mysql = mysql.createPool(keys);

// Mensajes de error generalizados.
connect_mysql.getConnection((err, connection) => {
	if (err) {
		if (err.code === 'PROTOCOL CONNECTION_LOST') {
			console.error('DATABASE CONNECTION WAS CLOSED');
		}
		if (err.code === 'ER_CON_COUNT_ERROR') {
			console.error('DATABASE HAS TO MANY CONNECTIONS');
		}
		if (err.code === 'ECONNREFUSED') {
			console.log('DATABASE CONNECTION WAS REFUSED')
		}
		if (err.code === 'ER_BAD_DB_ERROR') {
			console.log('DB is not Connected:');
		}
	}
	else {
		console.log('DB is Connected');
		connection.release();
	}
	return;
});

// Convertir código de Call Back a código de Promesa.
connect_mysql.query = util.promisify(connect_mysql.query);

module.exports = connect_mysql;
