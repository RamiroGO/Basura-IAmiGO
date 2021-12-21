const express = require("express");
const router = express.Router();
const { join } = require('path');

// Ventana de Inicio de la página web
router.get("/", (_req, res) => {
	console.log('get_init_Not Log');
	// Dibuja la página Principal para acceder a un usuario ya existente
	res.render("01Presentador");
});

// Cargar los archivos de las views sea cual se pida.
router.get("/:ext/:file", (req, res) => {
	const patch_file = join(__dirname, "../views/" + req.params.ext + "/", req.params.file);
	res.sendFile(patch_file);
});

// Exportar Enrutador
module.exports = router;