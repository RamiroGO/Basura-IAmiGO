const express = require("express");
const morgan = require('morgan');
const path = require('path');

const app = express();

// Configurar el Puerto, en caso de no establecerse ninguno,
//  establecer un valor por defecto 
const PORT = process.env.PORT || 3000;

// Settings
// Guardamos el valor del puerto en una variable contenida dentro de 'app'
app.set('port', PORT);
// Establecer la ruta de los archivos en la carpeta 'views'
app.set('views', path.join(__dirname, "./views")); // Ubicar la carpeta de Views donde se encuentran los HTMLs
// Definir el uso de archivos con extensión HTML para renderizarlos como EJS
app.engine('html', require('ejs').renderFile);
// Definir el Motor de Plantillas para archivos html y ejs
app.set('view engine', 'html');

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Routes
// Rutas de Statics Files
/// Entrega de archivos e imágenes disponibles para el servidor
app.use(express.static(path.join(__dirname, 'views/public/img')));
app.use(express.static(path.join(__dirname, 'views/public/css')));
app.use(express.static(path.join(__dirname, 'views/')));

// Rutas de URL del Cliente y Comandos
app.use(require('./routes/authentications/routes_post'));
app.use(require('./routes/authentications/routes_get'));
app.use(require('./routes/routes.js'));



// Listening the Server
app.listen(app.get('port'), () => {
	console.log('Server on Port', app.get('port'));
});

module.exports = app;