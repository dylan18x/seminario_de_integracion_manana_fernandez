
class UsuarioBiblio {
  constructor(public nombre: string) {}

  presentar(): string {
    return `${this.nombre} es un usuario registrado.`;
  }
}

class LectorEstudiante extends UsuarioBiblio {
  constructor(nombre: string, public carrera: string) {
    super(nombre);
  }


  override presentar(): string {
    return `${this.nombre} es estudiante de ${this.carrera}.`;
  }

  solicitar(libro: string): string {
    return `${this.nombre} solicita el libro ${libro}.`;
  }
}

const u = new UsuarioBiblio("Lector General");
const e = new LectorEstudiante("Carlos", "Ingeniería");

console.log(u.presentar());
console.log(e.presentar());
console.log(e.solicitar("Clean Code"));
console.log(e.carrera);