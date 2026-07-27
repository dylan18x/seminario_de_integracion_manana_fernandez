
class LimitePrestamos {
  private _limite: number;

  constructor(limite: number) {
    this._limite = limite;
  }

  get limite(): number {
    return this._limite;
  }

  set limite(valor: number) {
    if (valor <= 0) throw new Error("El límite debe ser positivo");
    this._limite = valor;
  }

  get capacidadCalculada(): number {
    return Math.PI * this._limite ** 2;
  }
}

const lp = new LimitePrestamos(5);
console.log(lp.limite);
console.log(lp.capacidadCalculada.toFixed(2));

lp.limite = 10;
console.log(lp.capacidadCalculada.toFixed(2));
