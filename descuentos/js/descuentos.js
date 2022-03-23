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
        descuento: 0
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
        descuento: 15
    }
]

let selectProducts = document.createElement("select")
selectProducts.id = "optProducto"

productos.forEach( (producto) => {
    let valueOption = producto.nombre
    let selectOption = document.createElement("option")
    selectOption.value = valueOption
    selectOption.text = producto.nombre
    selectProducts.appendChild( selectOption )
})


const frmDescuento = document.getElementById("frmDescuentos")
// Agregar un elemento al inicio
frmDescuento.insertBefore(selectProducts, frmDescuento.children[0])

/* 
    CREANDO Y AGREGANDO EL EVENTO CHANGE A SELECT PARA DETERMINAR LOS PRECIOS
*/
selectProducts.addEventListener('change', (event) => {
    // Filtrando elementos
    let productFilter = productos.filter( (item) => {
        return item.nombre == event.target.value
    })
    console.log(productFilter)

    // Mostrando los valores en los campos
    const txtPrecio = document.getElementById("txtPrecioProducto")
    
    txtPrecio.value = productFilter[0].precio
    txtDescuento.value = productFilter[0].descuento

    // Mostrando el precio con su respectivo descuento
})

document.getElementById("btnVerificarDescuento").addEventListener("click", () => {
    const txtCupon = document.getElementById("txtCupon").value

})