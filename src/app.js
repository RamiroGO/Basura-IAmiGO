import express from "express";
import morgan from 'morgan';
import { join } from 'path';
import { renderFile } from "ejs";

const { pathname: root } = new URL('../src', import.meta.url);



var app = express();
// Configurar el Puerto, en caso de no establecerse ninguno,
//  establecer un valor por defecto 
var PORT = process.env.PORT || 3000;
// Settings
// Guardamos el valor del puerto en una variable contenida dentro de 'app'
app.set('port', PORT);
// Establecer la ruta de los archivos en la carpeta 'views'
app.set('views', join(root, "./views")); // Ubicar la carpeta de Views donde se encuentran los HTMLs
// Definir el uso de archivos con extensión HTML para renderizarlos como EJS
app.engine('html', renderFile);
// Definir el Motor de Plantillas para archivos html y ejs
app.set('view engine', 'html');
// Middlewares
app.use(morgan("dev"));
app.use(urlencoded({ extended: false }));
app.use(json());
// Routes
// Rutas de Statics Files
/// Entrega de archivos e imágenes disponibles para el servidor
app.use(express.static(join(root, 'views/public/img')));
app.use(express.static(join(root, 'views/public/js')));
app.use(express.static(join(root, 'views/public/css')));
app.use(express.static(join(root, 'views/')));

// Rutas de URL del Cliente y Comandos
import router1 from './routes/authentications/post.cjs';
import router2 from './routes/routes.cjs';
import router3 from './routes/diccionario/tags_routes.ts';
app.use(router1);
// app.use(require('./routes/authentications/get'));
// app.use(require('./routes/aplicaciones/get'));
// app.use(require('./routes/propuestas/cure_routes.js'));
app.use(router3);
app.use(router2);

// Listening the Server
app.listen(app.get('port'), function () {
    console.log('Server on Port', app.get('port'));
});
export default app;
