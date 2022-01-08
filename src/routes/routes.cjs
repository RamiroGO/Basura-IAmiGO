const express = require("express");
const router = express.Router();

// Ventana de Inicio de la página web
router.get("/", async (_req, res) => {
	// let users = await query_mysql.getListUsers();
	// console.log(users);
	// Dibuja la página Principal para acceder a un usuario ya existente
	res.render('./home.html', {
		"title": "IAmiGO"
		// , "elements":users
	});
});

router.get('/contact', (req, res) => {
	// res.sendFile(path.join(__dirname, 'views/index.html'));
	res.render('contact.html', { title: "Contact Page" });
});

// Exportar Enrutador
module.exports = router;