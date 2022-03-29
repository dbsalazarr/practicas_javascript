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
    },
    {
        nombre: "Tablet SAMSUNG", 
        precio: 320,    
        cupon: "TB90",
        moneda: "dolares",
        descuento: 20
    }
]
/*
    VARIABLES
*/
let resultado = ""
const selectProducts = document.createElement("select")
selectProducts.id = "optProducto"


productos.forEach( (producto) => {
    let valueOption = producto.nombre
    let selectOption = document.createElement("option")
    selectOption.value = valueOption
    selectOption.text = producto.nombre
    selectProducts.appendChild( selectOption )
})


const selectListProducts = document.getElementById("productList")
// Agregar un elemento al inicio
selectListProducts.appendChild(selectProducts)

/* 
    CREANDO Y AGREGANDO EL EVENTO CHANGE A SELECT PARA DETERMINAR LOS PRECIOS
*/
selectProducts.addEventListener('change', (event) => {
    let txtCupon = document.getElementById("txtCupon")
    // Filtrando elementos
    let productFilter = productos.filter( (item) => {
        return item.nombre == event.target.value
    })

    // Mostrando los valores en los campos
    const txtPrecio = document.getElementById("txtPrecioProducto")
    
    // Mostrando el precio y descuento para el producto seleccionado
    txtPrecio.value = productFilter[0].precio
    txtCupon.value = ""

})

document.getElementById("btnVerificarDescuento").addEventListener("click", () => {
    const txtCupon = document.getElementById("txtCupon").value
    let lblResultado = document.getElementById("lblResultado")
    let optionSelected =  selectProducts.options[selectProducts.selectedIndex].text
    let moneda = ""
    let descuento = 0
    let item = productos.filter( (product) => {
        return product.nombre == optionSelected
    })

    if (item[0].moneda == "soles")
        moneda = "S/."
    else if (item[0].moneda == "dolares")
        moneda = "$"
    else 
        moneda = ""
    if( item[0].cupon != "" && item[0].cupon == txtCupon){
        descuento = item[0].descuento
        resultado += `<p> Cupón valído, el descuento a aplicar es de: ${moneda} ${descuento}%</p>`
    }else{
        if( item[0].cupon != txtCupon && item[0].cupon != ""){
            resultado += `<p> Cupón no válido para este producto, descuento: ${descuento}%</p>`
        }
        if( item[0].cupon == ""){
            resultado += "<p>Este articulo no cuenta con un cupón de descuento </p>"
        }
    }
    resultado += `<p>El monto a pagar será de: ${moneda} ${calcularTotalPagar(item[0].precio, descuento)} </p>`
    lblResultado.innerHTML = resultado
    resultado = ""
})

/* 
    Imprimiendo la lista de cupones
*/
let tableCupons = "<table>"
let headerTable = ` <tr>  <th> Product </th> <th> Cupon </th> </tr>`
tableCupons += headerTable
productos.forEach( (item) => {
    tableCupons += `<tr> <td> ${item.nombre} </td> <td> ${item.cupon} </td> </tr>`
})
tableCupons += "</table>"

// Agregando tabla to HTML
document.getElementById("cuponList").innerHTML = tableCupons