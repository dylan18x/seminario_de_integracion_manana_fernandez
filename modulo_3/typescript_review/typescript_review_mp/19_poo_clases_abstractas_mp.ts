
abstract class RecursoBiblioteca {
  abstract calcularCostoMora(): number;
  abstract calcularDiasPrestamo(): number;


  describir(): string {
    return (
      `Mora: $${this.calcularCostoMora().toFixed(2)} | ` +
      `Días: ${this.calcularDiasPrestamo().toFixed(2)}`
    );
  }
}

class LibroFisico extends RecursoBiblioteca {
  constructor(private radioPaginas: number) {
    super();
  }

  override calcularCostoMora(): number {
    return Math.PI * this.radioPaginas ** 2;
  }

  override calcularDiasPrestamo(): number {
    return 2 * Math.PI * this.radioPaginas;
  }
}

class Audiolibro extends RecursoBiblioteca {
  constructor(private duracionHoras: number, private MbTamano: number) {
    super();
  }

  override calcularCostoMora(): number {
    return this.duracionHoras * this.MbTamano;
  }

  override calcularDiasPrestamo(): number {
    return 2 * (this.duracionHoras + this.MbTamano);
  }
}



const libroImpreso = new LibroFisico(5);
const audioLibroDigital = new Audiolibro(4, 6);

console.log(libroImpreso.describir());
console.log(audioLibroDigital.describir());