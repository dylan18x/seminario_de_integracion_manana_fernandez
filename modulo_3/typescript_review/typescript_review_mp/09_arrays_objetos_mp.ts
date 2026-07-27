
type Libro = {
  id: number;
  titulo: string;
  precioMulta: number;
  disponible: boolean;
  ejemplares: number;
};

const catalogoLibros: Libro[] = [
  { id: 1, titulo: "Don Quijote",     precioMulta: 999,  disponible: true, ejemplares: 4 },
  { id: 2, titulo: "Cien Años Soledad", precioMulta: 25,   disponible: true, ejemplares: 2 },
  { id: 3, titulo: "El Principito",   precioMulta: 350,  disponible: false, ejemplares: 0 },
  { id: 4, titulo: "Odisea",          precioMulta: 1500, disponible: true, ejemplares: 3 },
  { id: 5, titulo: "Hamlet",          precioMulta: 200,  disponible: false, ejemplares: 0 },
];


const disponibles: Libro[] = catalogoLibros.filter((l) => l.disponible);
const titulos: string[] = catalogoLibros.map((l) => l.titulo);
const menorMulta: Libro | undefined = catalogoLibros.reduce((min, l) =>
  l.precioMulta < min.precioMulta ? l : min
);

console.log(titulos);
console.log(menorMulta?.titulo);
console.log(disponibles.length);
console.log(catalogoLibros[4].ejemplares)