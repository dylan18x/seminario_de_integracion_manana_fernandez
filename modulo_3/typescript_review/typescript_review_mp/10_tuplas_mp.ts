
type UbicacionEstante = [number, number];
type FichaISBN = [number, number, number];
type RegistroPrestamo = [string, number];

const estante: UbicacionEstante = [10.5, -3.2];
const isbn: FichaISBN = [255, 128, 0];
const parPrestamo: RegistroPrestamo = ["moraDiaria", 36.6];


const [pasillo, nivel] = estante;
const [pais, editorial, correlativo] = isbn;
const [clave, valor] = parPrestamo;

console.log(`Estante: pasillo=${pasillo}, nivel=${nivel}`);
console.log(`ISBN: code(${pais},${editorial},${correlativo})`);


type HorarioAtencion = [apertura: number, cierre: number];
const horarioBiblioteca: HorarioAtencion = [9, 18];