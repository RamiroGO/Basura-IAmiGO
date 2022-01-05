"use strict";
exports.__esModule = true;
exports.neuro_fundamen = exports.neuro_etiqueta = exports.neuro_atributo = exports.neuro_concepto = void 0;
var neuro_etiqueta = /** @class */ (function () {
    function neuro_etiqueta(list_etiquetas) {
        this.list_etique = [];
        this.list_etique = list_etiquetas;
    }
    return neuro_etiqueta;
}());
exports.neuro_etiqueta = neuro_etiqueta;
var neuro_concepto = /** @class */ (function () {
    function neuro_concepto(nombre, etiqueta) {
        this.nombre = nombre;
        this.etique = etiqueta;
    }
    return neuro_concepto;
}());
exports.neuro_concepto = neuro_concepto;
var neuro_atributo = /** @class */ (function () {
    /**
     *
     * @param {Copula} Copula Es, Tiene, Hace, Resultado, Postura.
     * @param {Parametros} Parametros Nombre de la Etiqueta que se empleará como parámetro.
     * @param {Contextos} Contextos Etiquetas que hacen referencia al conjunto de los Fundamentos a emplear.
     */
    function neuro_atributo(Copula, Parametros, Contextos) {
        this.copula = Copula;
        this.params = Parametros;
        this.contex = Contextos;
    }
    return neuro_atributo;
}());
exports.neuro_atributo = neuro_atributo;
var neuro_fundamen = /** @class */ (function () {
    function neuro_fundamen(Etiquetas, Contextos, Relaciones) {
        this.etique = Etiquetas;
        this.contex = Contextos;
        this.relaci = Relaciones;
    }
    return neuro_fundamen;
}());
exports.neuro_fundamen = neuro_fundamen;
