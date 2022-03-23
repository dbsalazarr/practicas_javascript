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
        nombre: "Bicicleta", 
        precio: 760,
        cupon: "", 
        moneda: "soles",
        descuento: 15
    },
    {
        nombre: "Teclado PRO X1 ONE", 
        precio: 60,
        cupon: "TCL002",
        moneda: "dolares",
        descuento: 25
    },
    {
        nombre: "PC Gamer Set Gamer", 
        precio: 3500,
        cupon: "PCG001",
        moneda: "dolares",
        descuento: 50

    },
    {
        nombre: "USB 1Tb ASUS", 
        precio: 240,
        cupon: "USB001",
        moneda: "soles",
        descuento: 0
    }
]

let selectProducts = document.createElement("select")
selectProducts.id = "optProducto"

productos.forEach( (producto) => {
    let valueOption = producto.nombre.toLowerCase().replace(" ", "-")
    let selectOption = document.createElement("option")
    selectOption.value = valueOption
    selectOption.text = producto.nombre
    selectProducts.appendChild( selectOption )
})


const frmDescuento = document.getElementById("frmDescuentos")
frmDescuento.insertBefore(selectProducts, frmDescuento.children[0])