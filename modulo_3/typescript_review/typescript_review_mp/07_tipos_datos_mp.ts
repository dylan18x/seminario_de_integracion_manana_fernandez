


const enteroLibros: number = 42;
const costoMora: number = 3.14;
const saldoNegativo: number = -100;
const hexadecimal: number = 0xff;
const binario: number = 0b1010;
const octal: number = 0o17;
const totalEjemplares: number = 1_000_000;

console.log(hexadecimal);
console.log(binario);
console.log(totalEjemplares);


console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.isFinite(1 / 0));
console.log(Number.isNaN(0 / 0));



const simple: string = "Hola Biblioteca TypeScript";
const doble: string = 'También funciona';
const template: string = `Hola ${"lector"}`;

const nombreLector: string = "Ana";
const edadLector: number = 28;


const saludo: string = `Hola, ${nombreLector}. Tienes ${edadLector} años.`;
const mayoriaEdad: string = `Eres ${edadLector >= 18 ? "mayor" : "menor"} de edad para préstamos.`;


const mensajeBiblio: string = `
  Sección 1: Novelas
  Sección 2: Ciencias
  Sección 3: Historia
`.trim();


console.log("  biblioteca  ".trim());
console.log("libro".toUpperCase());
console.log("2024-06-15".split("-"));
console.log("error: moroso".includes("error"));
console.log("catalogo.ts".endsWith(".ts"));
console.log("catalogo.ts".startsWith(".ts"));




const carnetActivo: boolean = true;
const lectorEliminado: boolean = false;


const esMayor = 25 >= 18;
const tieneEjemplares = 0 > 0;



if (!tieneEjemplares) {
  console.log("Sin ejemplares disponibles");
}




let sinAsignar: undefined = undefined;
let sinLector: null = null;


function buscarLector(id: number): string | null {
  if (id === 1) return "Ana";
  return null;
}

const lector = buscarLector(5);


const nombreFinal = lector ?? "Invitado";
console.log(nombreFinal);


const longitudNombre = lector?.length;
console.log(longitudNombre);