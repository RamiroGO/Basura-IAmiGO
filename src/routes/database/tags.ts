const express = require('express');
const router = express.Router();
const { user_log } = require("../../lib/hi_user");
const { register_database, Redirect_IsValidUser } = require('../../lib/register_database');
const { dicci_conceptos } = require("../../database/diccionario");
// Para elaborar consultas async
const util = require('util');

/**
 * Obtener una lista de los nombres de los Tags
 */
router.get('/tags/list_names', (req, res) => {
	// Obtener una lista de solo los nombres de los tags listados
	let name_dictionaryTags = [];
	dicci_conceptos.forEach(_tag => {
		name_dictionaryTags.push(_tag.nombre);
	});
	// Enviar 
	res.send(name_dictionaryTags);
});
/**
 * Enviamos los parámetros correspondientes al Tag que se está consultando
 */
router.get('/tags/:nameTag', (req, res) => {
	// Valores por Default
	let sel_tag_params = { "": "" };
	// Búsqueda del Tag pedido
	for (let indexTag = 0, encontrado = false; !encontrado && indexTag != neuro_concepto.length; indexTag++)
		// Buscar por su nombre
		if (neuro_concepto[indexTag].nombre == req.params.nameTag) {
			// Guardar sus parámetros
			sel_tag_params = neuro_concepto[indexTag].params;
			encontrado = true;
		}
	// Enviar parámetros encontrados
	res.send(sel_tag_params);
});

module.exports = router;
