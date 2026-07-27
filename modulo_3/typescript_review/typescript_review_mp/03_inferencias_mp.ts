


const codigoLibro1: number = 1001;
const isbnLibro: string = "978-0-13-110362-7";
const disponible: boolean = true;



const codigoLibro2 = 1001;
const isbnLibro2 = "978-0-13-110362-7";
const disponible2 = true;







let diasPrestamo: number;
diasPrestamo = 15;


let idLector: number | string = 502;
idLector = "LEC-502";


function consultarLibro(isbn: string, edicion: number): string {
  return `Consulta de ISBN ${isbn} — edición ${edicion}`;
}