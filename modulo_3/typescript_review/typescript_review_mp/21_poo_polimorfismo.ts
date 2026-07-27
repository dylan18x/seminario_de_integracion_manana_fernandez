
class MaterialBiblioteca {
  nombre(): string { return "Material"; }
  calcularMora(): number { return 0; }
}

class LibroImpreso2 extends MaterialBiblioteca {
  constructor(private r: number) { super(); }
  override nombre(): string { return "Libro Impreso"; }
  override calcularMora(): number { return Math.PI * this.r ** 2; }
}

class Revista extends MaterialBiblioteca {
  constructor(private base: number, private altura: number) { super(); }
  override nombre(): string { return "Revista"; }
  override calcularMora(): number { return (this.base * this.altura) / 2; }
}

class Tesis extends MaterialBiblioteca {
  constructor(private lado: number) { super(); }
  override nombre(): string { return "Tesis Académica"; }
  override calcularMora(): number { return this.lado ** 2; }
}


const materiales: MaterialBiblioteca[] = [
  new LibroImpreso2(3),
  new Revista(6, 4),
  new Tesis(5),
];

for (const m of materiales) {
  
  console.log(`${m.nombre()}: mora = ${m.calcularMora().toFixed(2)}`);
}

