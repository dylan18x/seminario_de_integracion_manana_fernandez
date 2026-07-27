
interface ExportableFicha {
  serializar(): string;
}

interface ValidablePrestamo {
  esValido(): boolean;
}

class RegistroPrestamo implements ExportableFicha, ValidablePrestamo {
  constructor(
    public id: string,
    public libros: string[],
    public totalMulta: number
  ) {}

  serializar(): string {
    return JSON.stringify({ id: this.id, libros: this.libros, totalMulta: this.totalMulta });
  }

  esValido(): boolean {
    return this.libros.length > 0 && this.totalMulta >= 0;
  }
}

const prestamoActivo = new RegistroPrestamo("PREST-001", ["Don Quijote", "Ficciones"], 150);
console.log(prestamoActivo.esValido());
console.log(prestamoActivo.serializar());