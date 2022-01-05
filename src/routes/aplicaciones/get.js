const express = require('express');
const router = express.Router();

// Solo se debe implementar en las rutas que se desean proteger, no en las rutas de acceso.
const { isLoggedIn, isNotLoggedIn } = require("../../lib/is_logged");

// Se requieren dos enrutadores para hacer un Acceso de Usuario 'SignUp'
// Rutas para visualizar el HTML de las Views.
router.get("/canvas", isNotLoggedIn, (req, res) => {
	let data_ = {
		"title": "IAmiGO - Canvas"
	};
	// Construcción del response para visuLizar la página de acceso
	res.render("../aplicaciones/canvas.html", data_);
});

module.exports = router;