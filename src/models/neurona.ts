type Tipo = "IsDato" | "IsAdjetivo" | "IsEnte" | "IsVerbo" | "IsConector";
type Copula = "Es" | "Tiene" | "Hace" | "Resultado" | "Postura";

class neuro_etiqueta {
  list_etique: string[] = [];
  constructor(list_etiquetas: string[]) {
    this.list_etique = list_etiquetas;
  }
}
class neuro_concepto {
  public nombre: string;
	
  public etique: neuro_etiqueta;
	
  constructor(nombre: string, etiqueta: neuro_etiqueta) {
    this.nombre = nombre;
    this.etique = etiqueta;
	}
	
}

class neuro_atributo {
  copula: Copula;
  params: neuro_etiqueta;
  contex: neuro_etiqueta;
  /**
   *
   * @param {Copula} Copula Es, Tiene, Hace, Resultado, Postura.
   * @param {Parametros} Parametros Nombre de la Etiqueta que se empleará como parámetro.
   * @param {Contextos} Contextos Etiquetas que hacen referencia al conjunto de los Fundamentos a emplear.
   */
  constructor(Copula: Copula, Parametros: neuro_etiqueta, Contextos: neuro_etiqueta) {
    this.copula = Copula;
    this.params = Parametros;
    this.contex = Contextos;
  }
}

class neuro_fundamen {
  public etique: any;
  private contex: any;
  private relaci: any;
  constructor(
    Etiquetas: neuro_etiqueta,
    Contextos: neuro_etiqueta,
    Relaciones: string
  ) {
    this.etique = Etiquetas;
    this.contex = Contextos;
    this.relaci = Relaciones;
  }
}

export {
  neuro_concepto,
  neuro_atributo,
  neuro_etiqueta,
  neuro_fundamen,
};
