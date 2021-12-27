const express = require("express");
const router = express.Router();
const { join } = require('path');

const connect_database = require("../database/connect_mysql");
const query_mysql = require('../database/querys.js');

// Ventana de Inicio de la página web
router.get("/", async (_req, res) => {
	let users = await query_mysql.getListUsers();
	console.log(users);
	// Dibuja la página Principal para acceder a un usuario ya existente
	res.render('./home.html', {
		"title": "IAmiGO",
		"elements":users
	});
});

router.get('/propuesta/cure', (req, res) => {
	// res.sendFile(path.join(__dirname, 'views/index.html'));
	res.render('cure-propuesta/01Presentador', { title: "About Page" });
});

router.get('/contact', (req, res) => {
	// res.sendFile(path.join(__dirname, 'views/index.html'));
	res.render('contact.html', { title: "Contact Page" });
});

router.get('/favicon.ico', (req, res) => {
	// MIME type of your favicon.
	// .ico = 'image/x-icon' or 'image/vnd.microsoft.icon'
	// .png = 'image/png'
	// .jpg = 'image/jpeg'
	// .jpeg = 'image/jpeg'
	res.setHeader('Content-Type', 'image/png');
	res.sendFile(join(__dirname, '../views/public/img/cerebro-del-árbol-33121546.png'));
});

// // Cargar los archivos de las views sea cual se pida.
// router.get("/:ext/:file", (req, res) => {
// 	const patch_file = join(__dirname, "../views/" + req.params.ext + "/", req.params.file);
// 	res.sendFile(patch_file);
// });

// Exportar Enrutador
module.exports = router;