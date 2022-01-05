// const { join } = require('path');

// const connect_database = require("../database/connect_mysql");
// const query_mysql = require('../database/querys.js');


// router.get('/favicon.ico', (req, res) => {
// 	// MIME type of your favicon.
// 	// .ico = 'image/x-icon' or 'image/vnd.microsoft.icon'
// 	// .png = 'image/png'
// 	// .jpg = 'image/jpeg'
// 	// .jpeg = 'image/jpeg'
// 	res.setHeader('Content-Type', 'image/png');
// 	res.sendFile(join(__dirname, '../views/public/img/cerebro-del-árbol-33121546.png'));
// });
// router.get('/client_tags.js', (req, res) => {
// 	// MIME type of your favicon.
// 	// .ico = 'image/x-icon' or 'image/vnd.microsoft.icon'
// 	// .png = 'image/png'
// 	// .jpg = 'image/jpeg'
// 	// .jpeg = 'image/jpeg'
// 	res.setHeader('Content-Type','text/js');
// 	res.sendFile(join(__dirname, '../views/public/js/client_tags.js'));
// });
// router.get('/general.css', (req, res) => {
// 	// MIME type of your favicon.
// 	// .ico = 'image/x-icon' or 'image/vnd.microsoft.icon'
// 	// .png = 'image/png'
// 	// .jpg = 'image/jpeg'
// 	// .jpeg = 'image/jpeg'
// 	res.setHeader('Content-Type','text/css');
// 	res.sendFile(join(__dirname, '../views/public/css/general.css'));
// });

// // Cargar los archivos de las views sea cual se pida.
// router.get("/:ext/:file", (req, res) => {
// 	const patch_file = join(__dirname, "../views/" + req.params.ext + "/", req.params.file);
// 	res.sendFile(patch_file);
// });