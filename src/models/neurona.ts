import { Etiqueta, Copula, Contexto, Fundamento } from './etiquetas_diccionario'

export class neuro_etiquetas {
  // Propiedades de la Clase
  list_etique: Etiqueta[] = [];
  constructor(list_etiquetas: Etiqueta[]) {
    this.list_etique = list_etiquetas;
  }
}

export class neuro_concepto {
  // Propiedades de la Clase
  public _nombre: string;
  private _etique: neuro_etiquetas;
  private _atribu: neuro_atributo[];
  
  // Get Methods: 
  public get etiqueta(): Etiqueta[] {
    return this._etique.list_etique;
  }
  public get atributo(): neuro_atributo[] {
    return this._atribu;
  }

  constructor(nombre: string, etiqueta: neuro_etiquetas, atributos: neuro_atributo[]) {
    this._nombre = nombre;
    this._etique = etiqueta;
    this._atribu = atributos;
  }

}

export class neuro_atributo {
  // Propiedades de la Clase
  copula: Copula;
  params: Etiqueta;
  contex: Contexto;
  /**
   *
   * @param {Copula} Copula Es, Tiene, Hace, Resultado, Postura.
   * @param {Parametros} Parametros Nombre de la Etiqueta que se empleará como parámetro.
   * @param {Contextos} Contextos Etiquetas que hacen referencia al conjunto de los Fundamentos a emplear.
   */
  constructor(Copula: Copula, Parametros: Etiqueta, Contextos: Contexto) {
    this.copula = Copula;
    this.params = Parametros;
    this.contex = Contextos;
  }
}

export class neuro_fundamen {
  // Propiedades de la Clase
  public nombre: Fundamento;
  public contex: Contexto;
  public criter: neuro_etiquetas;
  private relaci: string;
  constructor(
    Nombre: Fundamento,
    Contextos: Contexto,
    Criterio: neuro_etiquetas,
    Relaciones: string
  ) {
    this.nombre = Nombre;
    this.contex = Contextos;
    this.criter = Criterio;
    this.relaci = Relaciones;
  }
}
export class neuro_intencion {
  // Propiedades de la Clase
  public nombre: Contexto;
  public criter: neuro_etiquetas;
  private relaci: string;
  constructor(
    Nombre: Contexto,
    Criterios: neuro_etiquetas,
    Relaciones: string
  ) {
    this.nombre = Nombre;
    this.criter = Criterios;
    this.relaci = Relaciones;
  }
}

export class neuro_venta {
  // Propiedades de la Clase
  public nombre: String;
  public valor_mercado: number;
  public indice_depreciacion: number;
  constructor(
    Nombre: String,
    Val_Mercado: number,
    indice_depreciacion: number
  ) {
    this.nombre = Nombre;
    this.valor_mercado = Val_Mercado;
    this.indice_depreciacion = indice_depreciacion;
  }
}