const express = require('express');
const router = express.Router();
import { conceptos, intenciones, ventas } from "../../database/diccionario";
import { Response } from "express";
import { neuro_atributo } from '../../models/neurona';

/**
 * Obtener una lista de los nombres de los Conceptos
 */
router.get('/tags/list_names', (_req: any, res: { send: (arg0: any[]) => void; }) => {
	// Obtener una lista de todos los nombres de los conceptos listados
	let listNames_dictionaryConcepto: any[] = [];
	conceptos.forEach((_concepto) => {
		listNames_dictionaryConcepto.push(_concepto._nombre);
	});
	// Enviar 
	res.send(listNames_dictionaryConcepto);
});
/**
 * Enviamos los parámetros correspondientes al Tag que se está consultando
 */
router.get('/tags/:nameTag', (req: { params: { nameTag: string; }; }, res: { setHeader: (arg0: string, arg1: string) => void; json: (arg0: neuro_atributo[]) => void; send: (arg0: string) => void; }) => {

	// Valores por Default
	let atributos_concepto;
	let encontrado = false;
	// Búsqueda del Tag pedido
	for (let indexTag = 0; !encontrado && indexTag != conceptos.length; indexTag++)
		// Buscar por su nombre
		if (conceptos[indexTag]._nombre == req.params.nameTag) {
			// Guardar sus parámetros
			atributos_concepto = conceptos[indexTag].atributo;
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
router.get('/intenciones', (req: any,res: { send: (arg0: any[]) => void; }) => {

// Obtener una lista de todos los nombres de los contexto listados
	let listNames_dictionaryIntenciones: any[] = [];
	intenciones.forEach((_intencion) => {
		listNames_dictionaryIntenciones.push(_intencion.nombre);
	});
	// Enviar 
	res.send(listNames_dictionaryIntenciones);
});
/**
 * Enviamos los parámetros correspondientes al 'Contexto' que se está consultando
 */
router.get('/intencion/:paramsIntencion', (req: { params: { paramsIntencion: string; }; }, res: { setHeader: (arg0: string, arg1: string) => void; json: (arg0: neuro_atributo[]) => void; send: (arg0: string) => void; }) => {

	// Valores por Default
	let atributos_concepto;
	let encontrado = false;
	// Búsqueda del Tag pedido
	for (let indexTag = 0; !encontrado && indexTag != conceptos.length; indexTag++)
		// Buscar por su nombre
		if (conceptos[indexTag]._nombre == req.params.paramsIntencion) {
			// Guardar sus parámetros
			atributos_concepto = conceptos[indexTag].atributo;
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

router.get('/ventas', (req: any,res: { send: (arg0: any[]) => void; }) => {

// Obtener una lista de todos los nombres de los contexto listados
	// let send_ventas: any[] = [];
	// ventas.forEach((_producto) => {
	// 	send_ventas.push(_producto.nombre);
	// });
	// Enviar 
	res.send(ventas);
});

module.exports = router;
