document.addEventListener('DOMContentLoaded', () => {
    console.log("El documento esta listo para ejecutar código JS")
})

/* 
    AREAS Y PERIMETROS
    - Cuadrado
    - Triangulo
    - Circulo
    - Trapecio
    - Elipse
*/
let resultado = ""

// Cuadrado

function eventosButtons( idButtons, calculateFunction ){

    document.getElementById( idButtons ).addEventListener("click", calculateFunction)
}

function leerEntrada( idEntrada ){
    return parseInt( document.getElementById( idEntrada ).value )
}

function mostrarResultado( mensaje ) {
    lblResultado.innerHTML = mensaje
}
// document.getElementById("btnAreaCuadrado").addEventListener("click", () => {
//     let lado = parseInt(document.querySelector("#txtLadoCuadrado").value)
//     let area = areaCuadrado( lado )
//     lblResultado.innerHTML = `<p> El area del cuadrado es: ${area} </p>`
// })

function areaCuadrado( ){
    let lado = leerEntrada("txtLadoCuadrado")
    let area = lado**2
    resultado = `<p> El perimetro del cuadrado es: ${area} </p>`
    mostrarResultado( resultado )
}

function perimetroCuadrado() {
    let lado = leerEntrada("txtLadoCuadrado")
    let perimetro = lado*4
    resultado = `<p> El perímetro del cuadrado es: ${perimetro}</p>`
    mostrarResultado( resultado )
} 

eventosButtons("btnAreaCuadrado", areaCuadrado )
eventosButtons("btnPerimetroCuadrado", perimetroCuadrado)

// TRIANGULO

function perimetroTriangulo(){
    let lado1, lado2, lado3, perimetroTriangulo
    lado1 = leerEntrada("txtLado1")
    lado2 = leerEntrada("txtLado2")
    lado3 = leerEntrada("txtLado3")
    perimetroTriangulo = lado1 + lado2 + lado3
    resultado = `<p>El perimetro del triangulo es: ${perimetroTriangulo}</p>`
    mostrarResultado(resultado)
}
function areaTriangulo(){
    /* 
        Donde:
        s: es el semiperimetro del triangulo ( perimetro / 2)
    */
    let lado1, lado2, lado3, s, superficieTriangulo
    lado1 = leerEntrada("txtLado1")
    lado2 = leerEntrada("txtLado2")
    lado3 = leerEntrada("txtLado3")
    s = (lado1 + lado2 + lado3)/2
    superficieTriangulo = Math.sqrt( s*(s - lado1)*(s - lado2)*(s-lado3) ) 
    resultado = `<p> El área del triangulo es: ${superficieTriangulo}</p>`
    mostrarResultado( resultado )
}

eventosButtons("btnPerTriangulo", perimetroTriangulo)
eventosButtons("btnAreaTriangulo", areaTriangulo)

// Circulo
const PI = Math.PI
function areaCirculo(radio){
    return PI*radio**2
}
function perimetroCirculo(){
    return 2*radio*PI
}

// Trapecio
let baseMayor, baseMenor, altura
baseMayor = 10
baseMenor = 5
altura = 2
function areaTrapecio(baseMenor, baseMayor, altura){

    return (baseMenor + baseMenor)/2 * altura
}

// Elipse
let ejeMenor, ejeMayor
ejeMenor = 12
ejeMayor = 23
function areaElipse(ejeMenro, ejeMayor){
    return PI*ejeMayor*ejeMenor
}

