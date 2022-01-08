// 'isLoggedIn' 	: Solo se debe implementar en las rutas que se desean proteger, no en las rutas de acceso.
// 'isNotLoggedIn' 	: Solo se debe implementar en las rutas para usuarios que no han accedido o no se han registrado.
const hi_user = require('./hi_user');

module.exports =
{
	isLoggedIn: function (req, res, next) {
		if (isAuthenticated()) {
			console.log("YA ESTÁ LOGUEADO!!! P(^o^)/");
			return next();
		}

		else
			return res.redirect('/signin'); // Redirigir al usuario no logueado a la página SignIn para loguearse.
	},
	isNotLoggedIn: function (req, res, next) {
		if (!isAuthenticated()) {
			console.log("No está logueado... ( -_-*)");
			return next();
		}

		else
			return res.redirect('/profile'); // Redirigir en su página de profile.
	}
}