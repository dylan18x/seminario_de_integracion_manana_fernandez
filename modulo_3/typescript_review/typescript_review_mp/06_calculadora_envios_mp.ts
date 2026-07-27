


type TipoLector = "local" | "nacional" | "internacional";

interface PrestamoLibro {
  descripcion: string;
  diasMora: number;
  valorLibro: number;
  categoriaLector: TipoLector;
}

const TARIFAS_MULTA: Record<TipoLector, number> = {
  local:           2.50,
  nacional:        5.00,
  internacional:  12.00,
};

const SEGURO_LIBRO_PCT = 0.005;

function calcularMulta(prestamo: PrestamoLibro): string {
  const tarifaDiaria = TARIFAS_MULTA[prestamo.categoriaLector];
  const costoMora = tarifaDiaria * prestamo.diasMora;
  const costoRecargo = prestamo.valorLibro * SEGURO_LIBRO_PCT;
  const total = costoMora + costoRecargo;

  return `
📚 Cotización de Multa de Biblioteca
   Descripción : ${prestamo.descripcion}
   Días Mora   : ${prestamo.diasMora} días
   Categoría   : ${prestamo.categoriaLector}
   Mora Base   : $${costoMora.toFixed(2)}
   Recargo     : $${costoRecargo.toFixed(2)}
   ─────────────────────────
   TOTAL MULTA : $${total.toFixed(2)}
  `.trim();
}

const prestamo1: PrestamoLibro = {
  descripcion: "Libro: Don Quijote de la Mancha",
  diasMora: 2.1,
  valorLibro: 1800,
  categoriaLector: "nacional",
};

const prestamo2: PrestamoLibro = {
  descripcion: "Enciclopedia de Historia Universal",
  diasMora: 0.4,
  valorLibro: 350,
  categoriaLector: "internacional",
};

console.log(calcularMulta(prestamo1));
console.log("---");
console.log(calcularMulta(prestamo2));


