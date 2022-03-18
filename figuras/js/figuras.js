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
function areaCuadrado( lado ){
    return lado**2
}

document.getElementById("btnPerimetroCuadrado").addEventListener("click", () => {
    let lado = parseInt( document.querySelector("#txtLadoCuadrado").value )
    let per = perimetroCuadrado( lado )
    lblResultado.innerHTML = `<p> El perimetro del cuadrado es: ${per} </p>`
    
})

function perimetroCuadrado( lado ) {
    return lado*4  
} 

// Triangulo
let lado1, lado2, lado3, s
lado1 = 8
lado2 = 4
lado3 = 10
s = (lado1 + lado2 + lado3)/2
function perimetroTriangulo( lado1, lado2, lado3){
    return lado1 + lado2 + lado3 
}
function areaTriangulo(s, lado1, lado2, lado3){
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

