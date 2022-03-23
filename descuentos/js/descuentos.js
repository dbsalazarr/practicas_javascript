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

function calcularTotalPagar( precioOriginal, descuento){
    return precioOriginal*(100 - descuento)/100
}

document.getElementById("btnDescuento").addEventListener("click", () => {
    let precioProducto, descuento, totalPagar, lblResultado
    precioProducto = parseFloat( document.getElementById("txtPrecioProducto").value )
    descuento = parseFloat( document.getElementById("txtDescuento").value )
    totalPagar = calcularTotalPagar( precioProducto, descuento )
    lblResultado = document.getElementById("lblResultado")
    lblResultado.innerHTML = `<p> El precio con descuento es: ${totalPagar}</p>`
})

// RETO
/*
    APLICAR UN DESCUENTO APLICANDO CUPONES PARA LOS PRODUCTOS
*/
productos = [
    {
        nombre: "Bici", 
        precio: 760,
        cupon: "BC001"
    },
    {
        nombre: "Bici", 
        precio: 760,
        cupon: "BC001"
    },
    {
        nombre: "Bici", 
        precio: 760,
        cupon: "BC001"
    },
    {
        nombre: "Bici", 
        precio: 760,
        cupon: "BC001"
    }
]