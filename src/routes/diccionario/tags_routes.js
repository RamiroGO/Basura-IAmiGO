const express = require('express');
const diccionario = require('../../database/diccionario');
const neurona = require('../../models/neurona.js');

const router = express.Router();
/**
 * Obtener una lista de los nombres de los Diccionario.Conceptos
 */
router.get('/tags/list_names', (_req, res) => {
	// Obtener una lista de todos los nombres de los conceptos listados
	let listNames_dictionaryConcepto = [];
	diccionario.conceptos.forEach((_concepto) => {
		listNames_dictionaryConcepto.push(_concepto._nombre);
	});
	// Enviar 
	res.send(listNames_dictionaryConcepto);
});
/**
 * Enviamos los parámetros correspondientes al Tag que se está consultando
 */
router.get('/tags/:nameTag', (req, res) => {

	// Valores por Default
	let atributos_concepto;
	let encontrado = false;
	// Búsqueda del Tag pedido
	for (let indexTag = 0; !encontrado && indexTag != diccionario.conceptos.length; indexTag++)
		// Buscar por su nombre
		if (diccionario.conceptos[indexTag]._nombre == req.params.nameTag) {
			// Guardar sus parámetros
			atributos_concepto = diccionario.conceptos[indexTag].atributo;
			// Marcar como encontrado
			encontrado = true;

			// Preparar Header del dato a enviar
			res.setHeader('Content-Type', 'application/json');
			// Enviar parámetros encontrados
			res.json(atributos_concepto);
		}
	// Etiqueta no encontrada
	if (!encontrado)
		res.send("Mensage del Servidor: No Existe Tag");
});

/**
 * Obtener una lista de los nombres de los 'intenciones'
 */
router.get('/intenciones/nombres', (req, res) => {

	// Obtener una lista de todos los nombres de los contexto listados
	let listNames_dictionaryIntenciones = [];
	diccionario.intenciones.forEach((_intencion) => {
		listNames_dictionaryIntenciones.push(_intencion.nombre);
	});
	// Enviar 
	res.send(listNames_dictionaryIntenciones);
});
/**
 * Enviamos los parámetros correspondientes al 'Contexto' que se está consultando
 */
router.get('/intencion/:nombre', (req, res) => {

	// Valores por Default
	let atributos_concepto;
	let encontrado = false;
	// Búsqueda del Tag pedido
	for (let indexTag = 0; !encontrado && indexTag != diccionario.conceptos.length; indexTag++)
		// Buscar por su nombre
		if (diccionario.conceptos[indexTag]._nombre == req.params.nombre) {
			// Guardar sus parámetros
			atributos_concepto = diccionario.conceptos[indexTag].atributo;
			// Marcar como encontrado
			encontrado = true;

			// Preparar Header del dato a enviar
			res.setHeader('Content-Type', 'application/json');
			// Enviar parámetros encontrados
			res.json(atributos_concepto);
		}
	// Etiqueta no encontrada
	if (!encontrado)
		res.send("Mensage del Servidor: No Existe Tag");
});

router.get('/ventas', (req, res) => {
	// Enviar 
	res.send(diccionario.ventas);
});

module.exports = router;
