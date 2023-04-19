function calculadoraImpuestos(monto, impuesto) {
  return monto * impuesto;
}

function cajero(monto, impuesto, metodoImpuestos) {
  return monto + metodoImpuestos(monto, impuesto);
}

function recibo(monto, impuesto) {
  console.log(`----- ----- -----\n
    Subtotal: $${monto}\n
    Impuestos: $${calculadoraImpuestos(monto, impuesto)}\n
    Total: $${cajero(monto, impuesto, calculadoraImpuestos)}\n
    ----- ----- -----`);
}

recibo(25, 0.16);
