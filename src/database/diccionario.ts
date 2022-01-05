import { neuro_etiqueta, neuro_atributo, neuro_concepto, neuro_fundamen } from "../models/neurona";

const
	etiquetas: neuro_etiqueta[] = [
	new neuro_etiqueta(["Usuario"]),
	new neuro_etiqueta(["Comida"]),
	new neuro_etiqueta(["Color"]),
	],
	atributos: neuro_atributo[] = [
		new neuro_atributo("Tiene", etiquetas[2], new neuro_etiqueta(["Sentidos", "Percepción"]))
	],
	conceptos : neuro_concepto[]= [
		new neuro_concepto(
			"Ramiro", etiquetas[0]),
		new neuro_concepto(
			"Irma", etiquetas[0]),
		new neuro_concepto("Julian", etiquetas[0]),
		new neuro_concepto("Manzana", etiquetas[1])
	],
	fundament: neuro_fundamen[] = [
		new neuro_fundamen(new neuro_etiqueta([""]),new neuro_etiqueta([""]), ""),
		new neuro_fundamen(new neuro_etiqueta([""]),new neuro_etiqueta([""]), ""),
		new neuro_fundamen(new neuro_etiqueta([""]),new neuro_etiqueta([""]), "")
	];

export { atributos, conceptos, fundament };
