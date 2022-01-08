const express = require('express');
const router = express.Router();
const path = require('path');
const join = path.join;

router.get('/propuestas/cure/:ext/:doc', (req, res) => {
	// MIME type of your favicon.
	// .ico = 'image/x-icon' or 'image/vnd.microsoft.icon'
	// .png = 'image/png'
	// .jpg = 'image/jpeg'
	// .jpeg = 'image/jpeg'
	res.setHeader('Content-Type', 'text/css');
	res.sendFile(join(__dirname, '../../views/cure-propuesta/' + req.params.ext + '/' + req.params.doc));
});


router.get('/propuestas/cure/:doc', (req, res) => {
	// res.sendFile(path.join(__dirname, 'views/index.html'));
	res.render('cure-propuesta/html/' + req.params.doc, { title: "About Page" });
});

module.exports = router;