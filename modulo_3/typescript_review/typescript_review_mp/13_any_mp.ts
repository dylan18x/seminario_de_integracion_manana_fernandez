



let registroAntiguoBiblio: any = "texto";
registroAntiguoBiblio = 42;
registroAntiguoBiblio = true;
registroAntiguoBiblio.metodoFalso();




let datoFicha: unknown = "hola";
datoFicha = 42;


if (typeof datoFicha === "string") {
  console.log(datoFicha.toUpperCase());
}




function lanzarErrorBiblio(msg: string): never {
  throw new Error(msg);
}

function verificarExhaustividadPrestamo(valor: never): never {
  throw new Error(`Caso no manejado: ${String(valor)}`);
}