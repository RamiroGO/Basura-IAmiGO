const connect_mysql = require("../database/connect_mysql.js");
const encrypt_pswJs = require('./encrypt_psw.js');
const hi_userJs = require("./hi_user.js");

class register_database {
	// Crear un objeto temporal con el username, password y contrseña con los nombres de los parámetros exigidos por la base de datos.
	Fields_Database = {};
	constructor(Obj_MySQL) {
		this.Fields_Database = Obj_MySQL;
	}

	// Guardar usuario
	saveUserMySQL(Callback) {
		// No se deben enviar campos vacios
		if (this.Fields_Database.name_user === "" || this.Fields_Database.passw === "" || this.Fields_Database.mail_user === "")
			return "Campo vacio";

		// Convertir el password en un hash
		encrypt_pswJs.encryptPassword(this.Fields_Database.passw)
			.then((hash_pass) => {
				// Guardar el nuevo Hash como pasword en la clase y en la base de datos.
				this.Fields_Database.passw = hash_pass;

				// Guardar el Usuario en la Base de Datos y recibir el id autogenerado por la base de datos.
				connect_mysql.query("INSERT INTO `users`.`fullname` SET ?", [this.Fields_Database], (err, result) => {
					// Llorelo
					if (err)
						return "(U_,U)";

					// Disfrútelo
					else {
						// Guardamos el Id que MySQL generó tras la inserción.
						this.Fields_Database.id = result.insertId;
						console.log("Guardado con Id: ", this.Fields_Database.id);
						return this.Fields_Database.id;
					}
				})
					.then(() => Callback());
			});


	}
	// Preguntar por la existencia de un usuario
	async IsSame(username, password) {
		// Busca el Usuario en la Base de Datos, a partir del username: Retornará una lista.
		const rows_users = connect_mysql.query(
			"SELECT * FROM `usuarios` WHERE `nombre` = ?",
			[username]
		);

		// Validación del Usuario
		if (rows_users.length > 0) {
			const user_row0 = rows_users[0];
			// Comparación de la contraseña ingresada con la Registrada a través de un método en 'helpers'.
			const validPassword = await encrypt_pswJs.matchPassword(
				password,
				user_row0.password
			);

			let mensaje = "";
			// Validación de Contraseña. 
			if (validPassword) {
				mensaje = "Welcome " + user_row0.username;
				console.log(mensaje);
			} else {
				mensaje = "Incorrect Password";
				console.log(mensaje);
			}
		} else {
			mensaje = "The Username does not exists";
			console.log(mensaje);
		}

		return mensaje;
	}
}
function Redirect_IsValidUser(req, views, res) {
	const
		username = req.body.name_user, password = req.body.pass_user;

	// Busca el Usuario en la Base de Datos, a partir del username: Retornará una lista.
	return connect_mysql.query(
		"SELECT * FROM `usuarios` WHERE `nombre` = ?",
		[username],
		async (err, candidates) => {
			if (err)
				console.log("Ok", err);
			else if (candidates.length == 0) {
				console.log('Usuario no encontrado');
				return false;
			}
			else if (candidates.length > 0) {
				// Validación del Usuario
				console.log("Validando Usuario...");
				let passw_candidate = candidates[0].passw;
				// Comparación de la contraseña ingresada con la Registrada a través de un método en 'encrypt_psw'.
				await encrypt_pswJs.matchPassword(password, passw_candidate)
					.then((_is_valid) => {
						console.log("Validación exitosa: ", _is_valid);
						if (_is_valid) {
							// Parámetros de un usuario:
							user_log = {
								nombre: candidates[0].nombre,
								contra: candidates[0].passw,
								id: candidates[0].id
							};

							// Añadir al nuevo usuario a la lista.
							hi_userJs.SignIn(user_log);

							res.redirect(views["succesfull"]);
						}
						else if (_is_valid == false) {
							res.redirect(views["failed"]);
						}
					});
			}
		}
	);
}

module.exports = {
	register_database,
	IsSame,
	Redirect_IsValidUser
}