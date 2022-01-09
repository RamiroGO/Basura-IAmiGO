let express = require('express');
let morgan = require('morgan');
let path = require('path');
let http = require('http');
let app = express();

// Configurar el Puerto, en caso de no establecerse ninguno,
//  establecer un valor por defecto 
// let PORT = path.normalize(process.env.PORT || 3000);
let PORT = process.env.PORT || 3000;
// Settings
// Guardamos el valor del puerto en una variable contenida dentro de 'app'
app.set('port', PORT);
// Establecer la ruta de los archivos en la carpeta 'views'
app.set('views', path.join(__dirname, "./views/")); // Ubicar la carpeta de Views donde se encuentran los HTMLs
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
app.use(express.static(path.join(__dirname, 'views/public/js')));
app.use(express.static(path.join(__dirname, 'views/public/css')));

// Rutas de URL del Cliente y Comandos
app.use(require('./routes/routes.js'));

// Listening the Server
// app.listen(app.get('port'), function () {
//     console.log('Server on Port', app.get('port'));
// });
let server = http.createServer(app);
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'))
})

// var server = app.listen(app.get('port'), function () {
//   debug('Express server listening on port ' + server.address().port)
// })

// Exportar módulo usando 'CommonJS'
module.exports = server;
