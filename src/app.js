let express = require('express');
let morgan = require('morgan');
let path = require('path');
let http = require('http');
let app = express();

/**
 * Importar Rutas
 */
const route_post_auth = require('./routes/authentications/post.js');
const route_get_home = require('./routes/routes.js');
const route_get_auth = require('./routes/authentications/get.js');
const route_get_aplicaciones = require('./routes/aplicaciones/get');
const route_get_propuestas_cure = require('./routes/propuestas/cure_routes.js');
const route_get_diccionario = require('./routes/diccionario/tags_routes.js');


// Configurar el Puerto, en caso de no establecerse ninguno,
//  establecer un valor por defecto 
// let PORT = path.normalize(process.env.PORT || 3000);
let PORT = process.env.PORT || 3000;
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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Routes
// Rutas de Statics Files
/// Entrega de archivos e imágenes disponibles para el servidor
app.use(express.static(path.join(__dirname, 'views/public/img')));
app.use(express.static(path.join(__dirname, 'views/public/js')));
app.use(express.static(path.join(__dirname, 'views/public/css')));
app.use(express.static(path.join(__dirname, 'views/')));

// Rutas de URL del Cliente y Comandos
app.use(route_post_auth);
app.use(route_get_auth);
app.use(route_get_aplicaciones);
app.use(route_get_propuestas_cure);
app.use(route_get_diccionario);
app.use(route_get_home);

// Listening the Server

let server = http.createServer(app);
server.listen(app.get('port'), () => {
  let msg_port = 'Express '.concat(typeof server.address().port === "number" ? 'PC-Server' : 'Server');
  console.log(server.address());
  console.log(msg_port.concat(' Listening on localhost:' + server.address().port));
});
