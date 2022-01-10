const neuro_etiquetas = require('../models/neurona.js').neuro_etiquetas;
const neuro_atributo = require('../models/neurona.js').neuro_atributo;
const neuro_concepto = require('../models/neurona.js').neuro_concepto;
const neuro_fundamen = require('../models/neurona.js').neuro_fundamen;
const neuro_venta = require('../models/neurona.js').neuro_venta;
const neuro_intencion = require('../models/neurona.js').neuro_intencion;

const
	etiquetas_tipicas = [ //: neuro_etiquetas[] = [
		new neuro_etiquetas(["Persona", "Usuario", "Ingeniero"]),
		new neuro_etiquetas(["Persona", "Inventada"]),
		new neuro_etiquetas(["Sentidos", "Percepción"]),
		new neuro_etiquetas(["Mascota", "Fallecidos"]),
		new neuro_etiquetas(["Comida", "Fruta"]),
		new neuro_etiquetas(["Operación"]),
	],
	atributos_tipics =
		[
			[new neuro_atributo("Es", "Ingeniero", "Profesión")],
			[new neuro_atributo("Es", "Mascota", "Familia")],
			[new neuro_atributo("Es", "Comida", "Biología")],
			[new neuro_atributo("Es", "Personaje Imaginario", "Ficción")],
			[new neuro_atributo("Es", "Fruta", "Biología")],
		],
	atributos = [ //: neuro_atributo[] = [
		new neuro_atributo("Tiene", "Color", "Sensación Visual")
	],
	conceptos = [ //: neuro_concepto[] = [
		new neuro_concepto("Ramiro", etiquetas_tipicas[0], atributos_tipics[0]),
		new neuro_concepto("Lilia", etiquetas_tipicas[0], atributos_tipics[0]),
		new neuro_concepto("Irma", etiquetas_tipicas[0], atributos_tipics[0]),
		new neuro_concepto("Julian", etiquetas_tipicas[1], atributos_tipics[3]),
		new neuro_concepto("Nico", etiquetas_tipicas[3], atributos_tipics[1]),
		new neuro_concepto("Manzana", etiquetas_tipicas[4], atributos_tipics[4])
	],
	fundament = [ //: neuro_fundamen[] = [
		new neuro_fundamen("Suma", "Matemáticas", etiquetas_tipicas[5], ""),
		new neuro_fundamen("Restar", "Matemáticas", etiquetas_tipicas[5], ""),
		new neuro_fundamen("Multiplicar", "Matemáticas", etiquetas_tipicas[5], ""),
		new neuro_fundamen("Dividir", "Matemáticas", etiquetas_tipicas[5], ""),
		new neuro_fundamen("Integrar", "Matemáticas", etiquetas_tipicas[5], ""),
		new neuro_fundamen("Derivar", "Matemáticas", etiquetas_tipicas[5], ""),
		new neuro_fundamen("Factorizar", "Matemáticas", etiquetas_tipicas[5], "")
	],
	intenciones = [ //: neuro_intencion[] = [
		new neuro_intencion("Proyecto Cure", etiquetas_tipicas[5], ""),
		new neuro_intencion("Proyecto Cursos", etiquetas_tipicas[5], ""),
		new neuro_intencion("Editor de Fotos", etiquetas_tipicas[5], ""),
		new neuro_intencion("Laberinto", etiquetas_tipicas[5], ""),
		new neuro_intencion("Cubo", etiquetas_tipicas[5], ""),
		new neuro_intencion("Ingresar", etiquetas_tipicas[5], ""),
		new neuro_intencion("Registrarse", etiquetas_tipicas[5], ""),
		new neuro_intencion("Pendientes", etiquetas_tipicas[5], ""),
		new neuro_intencion("Información", etiquetas_tipicas[5], "")
	],
	ventas = [ //: neuro_venta[] = [
		new neuro_venta("Comedor", 350000, 40),
		new neuro_venta("Juego de Sala", 350000, 40),
		new neuro_venta("Sala+Comedor", 600000, 40),
		new neuro_venta("Abanico Pato", 260000, 40),
		new neuro_venta("Abanico Enfriador", 550000, 40)
	];

/**
 * Pato: 260 => 170:155
Enfriador 550 => 450:400
 */
module.exports = { atributos, conceptos, fundament, intenciones, ventas };
