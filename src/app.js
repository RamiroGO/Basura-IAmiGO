const express = require("express");
const morgan = require('morgan');
const patch = require('path');

const app = express();

// Configurar el Puerto, en caso de no establecerse ninguno,
//  establecer un valor por defecto 
const PORT = process.env.PORT || 4000;

// Settings
app.set('port', PORT);
app.set('views', patch.join(__dirname, "./views/html")); // Ubicar la carpeta de Views donde se encuentran los HTMLs
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Routes
app.use(require('./routes/routes'));

app.listen(PORT);

module.exports = app;