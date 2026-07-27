
const cuotaMulta: number   = 15.50;
const idBiblioteca: number = 8080;
const moraDiaria: number   = -2.5;
const codigoHEX: number    = 0xff5733;


const correoLector: string   = "lector@biblioteca.com";
const clasificacion: string  = 'DEWEY-800';
const seccionLibros: string  = `/catalogo/v2/literatura`;


const carnetActivo: boolean  = true;
const requiereRenovar: boolean = false;
const esBibliotecario: boolean = false;


const tarifaBase = 1500;
const bonificacion = 150;
const costoTotal = tarifaBase - bonificacion;


const nombreLector = "  juan.perez@biblioteca.com  ";
console.log(nombreLector.trim().toLowerCase());
console.log(correoLector.includes("biblioteca"));
console.log(correoLector.split("@")[1]);
console.log(correoLector.split("@"));
let fichaLibro: string = "Cien Años de Soledad;GABO;1967;DISPONIBLE";
console.log(fichaLibro.split(";"));


const puedePrestar: boolean = carnetActivo && !requiereRenovar;
console.log(puedePrestar);