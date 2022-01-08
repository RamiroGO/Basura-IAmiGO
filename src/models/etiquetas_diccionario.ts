import { type } from "os";

type Etiqueta
	= "Usuario"
	| "Comida"
	| "Color"
	| "Fruta"
	| "Mascota"
	| "Fallecimiento"
	| "Fallecidos"
	| "Sentidos"
	| "Percepción"
	| "Persona"
	| "Personaje Imaginario"
	| "Inventada"
	| "Operación"
	| "Matemáticas"
	| "Ingeniero"
	;

type Contexto
	= "Matemáticas"
	| "Biología"
	| "Ciencia"
	| "Historia"
	| "Calendario"
	| "Profesión"
	| "Sensación Visual"
	| "Ficción"
	| "Imaginación"
	| "Familia"
	| "Registrarse"
	| "Proyecto Cure"
	| "Información"
	| "Conseguir"
	| "Pensamientos"
	| "Conocimientos"
	| "Administrar"
	| "Ingresar"
	| "Pendientes"
	| "Proyecto Cursos"
	| "Laberinto"
	| "Editor de Fotos"
	| "Cubo"
	| "Venta"
	| "Ventas"
	;

type Soporte
	= "Color"
	| "Mentira"
	;

let ideas = {
	"La mentira": "No permite que puedas hablar de sueños ni proyecciones"
};
type Valores =
	"Rojo" | "Verde" | "Azul";
// hibermectina
// d zinc

// const Parametros: Soporte[];

type Tipo
	= "IsDato"
	| "IsAdjetivo"
	| "IsEnte"
	| "IsVerbo"
	| "IsConector";
type Copula = "Es" | "Tiene" | "Hace" | "Resultado" | "Postura";

type Fundamento
	= "Suma"
	| "Resta"
	| "Restar"
	| "Multiplicación"
	| "Multiplicar"
	| "División"
	| "Dividir"
	| "Integración"
	| "Integrar"
	| "Derivación"
	| "Derivar"
	| "Factorizacion"
	| "Factorizar"
	;
	
export { Copula, Etiqueta, Contexto , Fundamento};
