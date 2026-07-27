class TiempoPrestamo {
  diasPrestamo: number;
  horasPrestamo: number;

  constructor(dias: number, horas: number) {
    this.diasPrestamo = dias;
    this.horasPrestamo = horas;
  }

  aDiasDesdeHoras(): number {
    return (this.horasPrestamo - 32) / 1.8;
  }

  aHoras(): number {
    return this.diasPrestamo * 9 / 5 + 32;
  }

  aSemanas(): number {
    return this.diasPrestamo + 273.15;
  }

  describir(): string {
    return (
      `${this.diasPrestamo}°C = ` +
      `${this.aHoras()}°F = ` +
      `${this.aSemanas()}K ` +
      `${this.aDiasDesdeHoras()}ºC`
    );
  }
}

const hervor = new TiempoPrestamo(100, 20);
const congelacion = new TiempoPrestamo(0, 60);

console.log(hervor.describir());
console.log(congelacion.describir());