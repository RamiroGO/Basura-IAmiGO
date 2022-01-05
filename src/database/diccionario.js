"use strict";
exports.__esModule = true;
exports.fundament = exports.conceptos = exports.atributos = void 0;
var neurona_1 = require("../models/neurona");
var etiquetas = [
    new neurona_1.neuro_etiqueta(["Usuario"]),
    new neurona_1.neuro_etiqueta(["Comida"]),
    new neurona_1.neuro_etiqueta(["Color"]),
], atributos = [
    new neurona_1.neuro_atributo("Tiene", etiquetas[2], new neurona_1.neuro_etiqueta(["Sentidos", "Percepción"]))
], conceptos = [
    new neurona_1.neuro_concepto("Ramiro", etiquetas[0]),
    new neurona_1.neuro_concepto("Irma", etiquetas[0]),
    new neurona_1.neuro_concepto("Julian", etiquetas[0]),
    new neurona_1.neuro_concepto("Manzana", etiquetas[1])
], fundament = [
    new neurona_1.neuro_fundamen(new neurona_1.neuro_etiqueta([""]), new neurona_1.neuro_etiqueta([""]), ""),
    new neurona_1.neuro_fundamen(new neurona_1.neuro_etiqueta([""]), new neurona_1.neuro_etiqueta([""]), ""),
    new neurona_1.neuro_fundamen(new neurona_1.neuro_etiqueta([""]), new neurona_1.neuro_etiqueta([""]), "")
];
exports.atributos = atributos;
exports.conceptos = conceptos;
exports.fundament = fundament;
