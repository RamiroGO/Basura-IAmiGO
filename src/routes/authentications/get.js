import { Router } from 'express';
const router = Router();

// Solo se debe implementar en las rutas que se desean proteger, no en las rutas de acceso.
import { isLoggedIn, isNotLoggedIn } from "../../lib/is_logged.js";

// Se requieren dos enrutadores para hacer un Acceso de Usuario 'SignUp'
// Rutas para visualizar el HTML de las Views.
router.get("/signup", isNotLoggedIn, (req, res) => {
	console.log("Route GET signup NotLog");
	
	let data_ = {
		"title": "IAmiGO"
	};
	// Construcción del response para visuLizar la página de acceso
	res.render("sign up.html", data_);
});

// Ruta para visualizar el formulario SignIn
router.get("/signin", isNotLoggedIn, (req, res) => {
	console.log("Route GET signin NotLog");
	// Construcción del response para visuLizar la página de acceso

	let data_ = {
		"title": "IAmiGO"
	};
	// Dibuja la página Principal para acceder a un usuario ya existente
	res.render('sign in.html', data_);
});

router.get("/profile", isLoggedIn, (req, res) => {
	// Esta ruta get / profile se dañó, hay que mandarla a otra ruta get para que funcione.
	console.log("Route GET profile Is_Log");
	// el 'res' debe mandar la orden de redirect al formulario HTML, para modificar el 'action' del formulario.
	res.render("profile");
});

router.get('/logout', isLoggedIn, (req, res) => {
	// Módulo de passport para cerrar session
	req.logOut();
	res.redirect('/acceso');
});

export default router;
