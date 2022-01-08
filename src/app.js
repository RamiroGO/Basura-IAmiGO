import express, { urlencoded } from "express";
import morgan from 'morgan';
import * as path from 'path';
import * as ejs from "ejs";

const { pathname: root } = new URL('../src', import.meta.url);

var app = express();
// Configurar el Puerto, en caso de no establecerse ninguno,
//  establecer un valor por defecto 
var PORT = process.env.PORT || 3000;
// Settings
// Guardamos el valor del puerto en una variable contenida dentro de 'app'
app.set('port', PORT);
// Establecer la ruta de los archivos en la carpeta 'views'
app.set('views', root.slice(1) + "/views"); // Ubicar la carpeta de Views donde se encuentran los HTMLs
// Definir el uso de archivos con extensión HTML para renderizarlos como EJS
app.engine('html', ejs.renderFile);
// Definir el Motor de Plantillas para archivos html y ejs
app.set('view engine', 'html');
// Middlewares
app.use(morgan("dev"));
app.use(urlencoded({ extended: false }));
app.use(express.json());
// Routes
// Rutas de Statics Files
/// Entrega de archivos e imágenes disponibles para el servidor
app.use(express.static(root.slice(1) + '/views/public/img/'));
app.use(express.static(root.slice(1) + '/views/public/js/'));
app.use(express.static(root.slice(1) + '/views/public/css/'));

// Rutas de URL del Cliente y Comandos //
import router1 from './routes/routes.js';
import router2 from './routes/authentications/get.js';
import router3 from './routes/diccionario/tags_routes.js';
import router4 from './routes/authentications/post.js';
import router5 from './routes/aplicaciones/get.js';
import router6 from './routes/propuestas/cure_routes.js';

app.use(router1);
app.use(router2);
app.use(router3);
app.use(router4);
app.use(router5);
app.use(router6);
////////////////////////////////////////////

// Listening the Server
app.listen(app.get('port'), function () {
    console.log('Server on Port', app.get('port'));
});
export default app;
