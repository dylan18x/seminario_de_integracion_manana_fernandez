
class Libro {
  titulo: string;
  precioMulta: number;
  disponible: boolean;

  constructor(titulo: string, precioMulta: number, disponible: boolean) {
    this.titulo = titulo;
    this.precioMulta = precioMulta;
    this.disponible = disponible;
  }


  describir(): string {
    const estado = this.disponible ? "disponible" : "prestado";
    return `${this.titulo} — $${this.precioMulta} (${estado})`;
  }
}

const libro1 = new Libro("Rayuela - Julio Cortázar", 120, true);
const libro2 = new Libro("Ficciones - Jorge Luis Borges", 450, false);

console.log(libro1.describir());
console.log(libro2.describir());