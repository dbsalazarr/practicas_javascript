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
let lblResultado = document.getElementById("lblResultado")

// Cuadrado

function eventosButtons( idButtons, calculateFunction ){

    document.getElementById( idButtons ).addEventListener("click", calculateFunction)
}

eventosButtons("btnAreaCuadrado", areaCuadrado )
eventosButtons("btnPerimetroCuadrado", perimetroCuadrado)


// document.getElementById("btnAreaCuadrado").addEventListener("click", () => {
//     let lado = parseInt(document.querySelector("#txtLadoCuadrado").value)
//     let area = areaCuadrado( lado )
//     lblResultado.innerHTML = `<p> El area del cuadrado es: ${area} </p>`
// })

function areaCuadrado( ){
    let lado = parseInt( document.querySelector("#txtLadoCuadrado").value )
    let area = lado**2
    lblResultado.innerHTML = `<p> El perimetro del cuadrado es: ${area} </p>`
}

function perimetroCuadrado() {
    let lado = parseInt( document.querySelector("#txtLadoCuadrado").value)
    let perimetro = lado*4
    lblResultado.innerHTML = `<p> El perímetro del cuadrado es: ${perimetro}</p>`
} 

// Triangulo

function perimetroTriangulo( lado1, lado2, lado3){
    return lado1 + lado2 + lado3 
}
function areaTriangulo(s, lado1, lado2, lado3){
    s = (lado1 + lado2 + lado3)/2
    return Math.sqrt( s*(s - lado1)*(s - lado2)*(s-lado3) ) 
}


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

