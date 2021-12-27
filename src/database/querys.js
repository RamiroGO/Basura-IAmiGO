const connect_mysql = require("./connect_mysql");

sql_query = {
	getListUsers: function () {
		return connect_mysql.query("SELECT * FROM `users`.`fullname`");
	}
}


module.exports = sql_query;