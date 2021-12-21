const express = require("express");
const morgan = require('morgan');
const patch = require('path');

const connect_server = express();

// Configurar el Puerto, en caso de no establecerse ninguno,
//  establecer un valor por defecto 
const PORT = process.env.PORT || 4000;

connect_server.listen(PORT);

// Settings
connect_server.set('port', PORT);
connect_server.set('views', patch.join(__dirname, "./views/html")); // Ubicar la carpeta de Views donde se encuentran los HTMLs
connect_server.engine('html', require('ejs').renderFile);
connect_server.set('view engine', 'html');

// Middlewares
connect_server.use(morgan("dev"));
connect_server.use(express.urlencoded({ extended: false }));
connect_server.use(express.json());


// Routes
connect_server.get("/", (req, res) => {
	res.render("01Presentador.html");
})

console.log(`Listen on Port ${PORT}`);
