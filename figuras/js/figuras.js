/* 
    AREAS Y PERIMETROS
    - Cuadrado
    - Triangulo
    - Circulo
    - Trapecio
    - Elipse
*/
document.addEventListener('DOMContentLoaded', () => {
    console.log("El documento esta listo para ejecutar código JS")
})
 // VARIABLES
const PI = Math.PI
let resultado = ""


/* 
    FUNCIONES
*/
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

/*  
    TRIANGULO
*/

function perimetroTriangulo(){
    let lado1, lado2, lado3, perimetroTriangulo
    lado1 = leerEntrada("txtLado1")
    lado2 = leerEntrada("txtLado2")
    lado3 = leerEntrada("txtLado3")
    perimetroTriangulo = lado1 + lado2 + lado3
    resultado = `<p>El perimetro del triangulo es: ${perimetroTriangulo}</p>`
    mostrarResultado(resultado)
}

// Para calcular el área del triangulo se hizo uso de la formula de Herón
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

/* 
    CIRCULO
*/

function perimetroCirculo(){
    let radio, perimetro
    radio = leerEntrada("txtRadio")
    perimetro = 2*radio*PI
    resultado = `<p> El perímetro del circulo es: ${Math.round(perimetro)}</p>`
    mostrarResultado( resultado)
}
function areaCirculo(){
    let radio, area
    radio = leerEntrada("txtRadio")
    area = PI*radio**2
    resultado = `<p> El perímetro del circulo es: ${ Math.round(area)}</p>`
    mostrarResultado( resultado)
}

eventosButtons("btnPerCirculo", perimetroCirculo)
eventosButtons("btnAreaCirculo", areaCirculo)

/* 
    TRAPECIO
*/

function areaTrapecio(){
    let baseMayor, baseMenor, altura, areaTrapecio

    baseMenor = leerEntrada("txtBaseMenor")
    baseMayor = leerEntrada("txtBaseMayor")
    altura = leerEntrada("txtAltura")

    areaTrapecio = (baseMayor + baseMenor) / 2 * altura
    console.group("Trapecio")
    console.log("bMe " + baseMenor)
    console.log("bMa " + baseMayor)
    console.log("Alt " + altura)
    console.groupEnd()
    resultado = `<p> El área del trapecio es: ${areaTrapecio}</p>`
    mostrarResultado( resultado )

}
eventosButtons("btnAreaTrapecio", areaTrapecio)

/* 
    ELIPSE
*/

let ejeMenor, ejeMayor
ejeMenor = 12
ejeMayor = 23
function areaElipse(ejeMenro, ejeMayor){
    return PI*ejeMayor*ejeMenor
}

