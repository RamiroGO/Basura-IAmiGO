// 'isLoggedIn' 	: Solo se debe implementar en las rutas que se desean proteger, no en las rutas de acceso.
// 'isNotLoggedIn' 	: Solo se debe implementar en las rutas para usuarios que no han accedido o no se han registrado.

import { isAuthenticated } from "./hi_user.js";

export function isLoggedIn(req, res, next) {
	if (isAuthenticated()) {
		console.log("YA ESTÁ LOGUEADO!!! P(^o^)/");
		return next();
	}

	else
		return res.redirect('/signin'); // Redirigir al usuario no logueado a la página SignIn para loguearse.
}
export function isNotLoggedIn(req, res, next) {
	if (!isAuthenticated()) {
		console.log("No está logueado... ( -_-*)");
		return next();
	}

	else
		return res.redirect('/profile'); // Redirigir en su página de profile.
}
