type PrioridadPrestamo = "baja" | "media" | "alta" | "critica";

interface SolicitudPrestamo {
  id: number;
  titulo: string;
  prioridad: PrioridadPrestamo;
  resuelto: boolean;
}

function etiquetarPrestamo(s: SolicitudPrestamo): string {
  const prefijos: Record<PrioridadPrestamo, string> = {
    baja:    "⚪",
    media:   "🟡",
    alta:    "🟠",
    critica: "🔴",
  };
  const estado = s.resuelto ? "✅" : "⏳";
  return `${estado} ${prefijos[s.prioridad]} [#${s.id}] ${s.titulo}`;
}

const solicitudes: SolicitudPrestamo[] = [
  { id: 1, titulo: "Libro extraviado",   prioridad: "baja",    resuelto: true  },
  { id: 2, titulo: "Mora de devuelución", prioridad: "critica", resuelto: false },
  { id: 3, titulo: "Reserva atrasada",   prioridad: "media",   resuelto: false },
];

for (const s of solicitudes) {
  console.log(etiquetarPrestamo(s));
}

