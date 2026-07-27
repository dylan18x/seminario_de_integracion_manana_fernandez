
class FichaLector {
  readonly id: string;
  public titular: string;
  private multasAcumuladas: number;
  protected categoria: string;

  constructor(id: string, titular: string, multaInicial: number) {
    this.id = id;
    this.titular = titular;
    this.multasAcumuladas = multaInicial;
    this.categoria = "GENERAL";
  }


  obtenerMultas(): number {
    return this.multasAcumuladas;
  }

  registrarMulta(monto: number): void {
    if (monto <= 0) throw new Error("Monto inválido");
    this.multasAcumuladas += monto;
  }
}

const lector = new FichaLector("LEC-001", "Ana García", 1000);
console.log(lector.titular);
console.log(lector.id);
console.log(lector.obtenerMultas());
lector.registrarMulta(500);
console.log(lector.obtenerMultas());