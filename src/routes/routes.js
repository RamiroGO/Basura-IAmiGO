const express = require("express");
const router = express.Router();
const { join } = require('path');

// Ventana de Inicio de la página web
router.get("/", (_req, res) => {
	console.log('get_init_Not Log');
	// Dibuja la página Principal para acceder a un usuario ya existente
	res.render('./home/html/home.html', {title: "IAmiGO"});
});

router.get('/propuesta/cure', (req, res) => {
	// res.sendFile(path.join(__dirname, 'views/index.html'));
	res.render('cure-propuesta/01Presentador', {title: "About Page"});
});

router.get('/contact', (req, res) => {
	// res.sendFile(path.join(__dirname, 'views/index.html'));
	res.render('contact.html', {title: "Contact Page"});
});

// // Cargar los archivos de las views sea cual se pida.
// router.get("/:ext/:file", (req, res) => {
// 	const patch_file = join(__dirname, "../views/" + req.params.ext + "/", req.params.file);
// 	res.sendFile(patch_file);
// });

// Exportar Enrutador
module.exports = router;