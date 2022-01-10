const express = require('express');
let router = express.Router();

// Ventana de Inicio de la página web
router.get("/", (_req, res) => {
	try {
		// let users = await query_mysql.getListUsers();
		console.log("(._.)7");
		// Dibuja la página Principal para acceder a un usuario ya existente
		res.render('home.html', {
			"title": "IAmiGO"
		});
	} catch (error) {
		console.error(error);
		return res.status(500).send("Server Error");
	}
});

// Se requieren dos enrutadores para hacer un Acceso de Usuario 'SignUp'
// Rutas para visualizar el HTML de las Views.
router.get("/signup", (req, res) => {
	console.log("Route GET signup NotLog");

	let data_ = {
		"title": "IAmiGO"
	};
	// Construcción del response para visuLizar la página de acceso
	res.render("sign up.html", data_);
});
// Se requieren dos enrutadores para hacer un Acceso de Usuario 'SignUp'
// Rutas para visualizar el HTML de las Views.
router.get("/canvas", (req, res) => {
	let data_ = {
		"title": "IAmiGO - Canvas"
	};
	// Construcción del response para visuLizar la página de acceso
	res.render("../aplicaciones/canvas.html", data_);
});

/**
 * Obtener una lista de los nombres de los Diccionario.Conceptos
 */
router.get('/tags/list_names', (_req, res) => {
	// Obtener una lista de todos los nombres de los conceptos listados
	let listNames_dictionaryConcepto = ["hola"];
	
	// Enviar 
	res.send(listNames_dictionaryConcepto);
});

/**
 * Obtener una lista de los nombres de los 'intenciones'
 */
router.get('/intenciones/nombres', (req, res) => {

	// Obtener una lista de todos los nombres de los contexto listados
	let listNames_dictionaryIntenciones = ["Mehh", "jajaja"];
	
	// Enviar 
	res.send(listNames_dictionaryIntenciones);
});

router.get('/contact', (req, res) => {
	// res.sendFile(path.join(__dirname, 'views/index.html'));
	res.render('home.html', { title: "Contact Page" });
});

// Exportar Enrutador
module.exports = router;