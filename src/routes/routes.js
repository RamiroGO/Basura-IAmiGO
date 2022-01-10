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

router.get('/contact', (req, res) => {
	// res.sendFile(path.join(__dirname, 'views/index.html'));
	res.render('home.html', { title: "Contact Page" });
});

// Exportar Enrutador
module.exports = router;