
const MAX_LIBROS_PRESTAMO: number = 5;
const NOMBRE_BIBLIOTECA: string = "BibliotecaCentral";
const MANTENIMIENTO_SISTEMA: boolean = false;


let totalLibrosPrestados: number = 0;
let estadoBiblioteca: string = "cerrado";
let lectorRegistrado: boolean = false;

console.log(`Máx: ${MAX_LIBROS_PRESTAMO}, App: ${NOMBRE_BIBLIOTECA}, Mantenimiento: ${MANTENIMIENTO_SISTEMA}`);
console.log(`Prestados: ${totalLibrosPrestados}, Estado: ${estadoBiblioteca}, Lector: ${lectorRegistrado}`);

totalLibrosPrestados++;
estadoBiblioteca = "abierto";
lectorRegistrado = true;


console.log(`Prestados: ${totalLibrosPrestados}, Estado: ${estadoBiblioteca}, Lector: ${lectorRegistrado}`);