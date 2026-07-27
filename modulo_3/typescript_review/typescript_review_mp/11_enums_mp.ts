
enum CategoriaLibro {
  Literatura,
  Ciencia,
  Historia,
  Arte,
}

const categoriaActual: CategoriaLibro = CategoriaLibro.Literatura;
console.log(categoriaActual);
console.log(CategoriaLibro[0]);


enum CodigoPrestamo {
  Exitoso = 200,
  LibroNoEncontrado = 404,
  ErrorServidor = 500,
}


enum RolUsuario {
  Bibliotecario = "ADMIN",
  Asistente     = "EDITOR",
  Lector        = "READER",
}

const miRol: RolUsuario = RolUsuario.Asistente;
console.log(miRol);


type EstadoPrestamo = "pendiente" | "procesando" | "completado" | "error";
type PrioridadReserva = "baja" | "media" | "alta";

function procesarPrestamo(id: number, estado: EstadoPrestamo): void {
  console.log(`Préstamo #${id}: ${estado}`);
}

procesarPrestamo(1, "procesando");