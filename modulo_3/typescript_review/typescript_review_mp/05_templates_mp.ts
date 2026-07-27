
const lector: string = "Ana";
const categoria: string = "estudiante";
const prestamosRealizados: number = 42;


const fichaBienvenida: string = `Bienvenida lectora, ${lector}. Criterio: ${categoria}. Préstamos: ${prestamosRealizados}.`;
console.log(fichaBienvenida);



const valorLibro: number = 1200;
const tasaRecargo: number = 0.19;
const resguardo: string  = `Depósito con recargo: $${(valorLibro * (1 + tasaRecargo)).toFixed(2)}`;
console.log(resguardo);



const fichaBiblioteca: string = `
=== Reporte de Biblioteca ===
Sala     : General-01
Estado   : abierta
Ocupación: 99.9%
`;
console.log(fichaBiblioteca);