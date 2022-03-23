let precioOriginal = 76
let descuento = 15
let porcentajePagar = 100 - descuento
let totalPagar = precioOriginal*(100 - descuento)/100

console.log(totalPagar)

// IMPRIMIENDO CON LOS RESULTADOS COMO UN OBJETO CON CONSOLE.LOG
console.log({
    precioOriginal,
    descuento,
    porcentajePagar,
    totalPagar
})