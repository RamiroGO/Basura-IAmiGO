const express = require("express");
const morgan = require('morgan');
const patch = require('path');

const app = express();

// Configurar el Puerto, en caso de no establecerse ninguno,
//  establecer un valor por defecto 
const PORT = process.env.PORT || 4000;

app.listen(PORT);

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
app.get("/", (req, res) => {
	res.render("01Presentador.html");
})

console.log(`Listen on Port ${PORT}`);
