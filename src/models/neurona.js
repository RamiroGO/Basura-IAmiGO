module.exports =
{
  neuro_etiquetas: class neuro_etiquetas {
    // Propiedades de la Clase
    list_etique = [];
    constructor(list_etiquetas) {
      this.list_etique = list_etiquetas;
    }
  },

  neuro_concepto: class neuro_concepto {
    // Propiedades de la Clase
    _nombre;
    _etique;
    _atribu;

    // Get Methods: 
    get etiqueta() {
      return this._etique.list_etique;
    }

  },

  neuro_atributo: class neuro_atributo {
    // Propiedades de la Clase
    Copula;
    Etiqueta;
    Contexto;
    /**
     *
     * @param {Copula} Copula Es, Tiene, Hace, Resultado, Postura.
     * @param {Parametros} Parametros Nombre de la Etiqueta que se empleará como parámetro.
     * @param {Contextos} Contextos Etiquetas que hacen referencia al conjunto de los Fundamentos a emplear.
     */
    constructor(Copula, Parametros, Contextos) {
      this.copula = Copula;
      this.params = Parametros;
      this.contex = Contextos;
    }
  },

  neuro_fundamen: class neuro_fundamen {
    // Propiedades de la Clase
    nombre;
    contex;
    criter;
    relaci;
    constructor(
      Nombre,
      Contextos,
      Criterio,
      Relaciones
    ) {
      this.nombre = Nombre;
      this.contex = Contextos;
      this.criter = Criterio;
      this.relaci = Relaciones;
    }
  },
  neuro_intencion: class neuro_intencion {
    // Propiedades de la Clase
    nombre;
    criter;
    relaci;
    constructor(
      Nombre,
      Criterios,
      Relaciones
    ) {
      this.nombre = Nombre;
      this.criter = Criterios;
      this.relaci = Relaciones;
    }
  },

  neuro_venta: class neuro_venta {
    // Propiedades de la Clase
    nombre;
    valor_mercado;
    indice_depreciacion;
    constructor(
      Nombre,
      Val_Mercado,
      indice_depreciacion
    ) {
      this.nombre = Nombre;
      this.valor_mercado = Val_Mercado;
      this.indice_depreciacion = indice_depreciacion;
    }
  }
}