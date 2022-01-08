import * as express from 'express';
const router = express.Router();

// Solo se debe implementar en las rutas que se desean proteger, no en las rutas de acceso.
import * as is_loggedJs from "../../lib/is_logged.js";

// Se requieren dos enrutadores para hacer un Acceso de Usuario 'SignUp'
// Rutas para visualizar el HTML de las Views.
router.get("/canvas", is_loggedJs.isNotLoggedIn, (req, res) => {
	let data_ = {
		"title": "IAmiGO - Canvas"
	};
	// Construcción del response para visuLizar la página de acceso
	res.render("../aplicaciones/canvas.html", data_);
});

export default router;