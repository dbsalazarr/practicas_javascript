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

// Cuadrado
function areaCuadrado( lado ){
    return lado**2
}
function perimetroCuadrado( lado ) {
    return lado*4  
} 

// Triangulo
let lado1, lado2, lado3, perimetroTriangulo, areaTriangulo, s
lado1 = 8
lado2 = 4
lado3 = 10
s = perimetroTriangulo/2
perimetroTriangulo = lado1 + lado2 + lado3 
areaTriangulo = Math.sqrt( s*(s - lado1)*(s - lado2)*(s-lado3) ) 
console.group("Triangulo")
console.log("El area del triangulo es: " + areaTriangulo)
console.log("El perimetro del triangulo es: " + perimetroTriangulo)
console.groupEnd()


// Circulo
let radio, perimetroCirculo, areaCirculo
const PI = Math.PI
areaCirculo = PI*radio**2
perimetroCirculo = 2*radio*PI

console.group("Circulo")
console.log("El area del circulo es: " + areaTriangulo)
console.log("El perimetro del circulo es: " + perimetroTriangulo)
console.groupEnd()

// Trapecio
let baseMayor, baseMenor, altura, areaTrapecio
baseMayor = 10
baseMenor = 5
altura = 2
areaTrapecio = (baseMenor + baseMenor)/2 * altura

console.group("Trapecio")
console.log("El area del trapecio es:" + areaTrapecio)
console.groupEnd()

// Elipse
let ejeMenor, ejeMayor, areaElipse
ejeMenor = 12
ejeMayor = 23
areaElipse = PI*ejeMayor*ejeMenor

console.group("Elipse")
console.log("El area de la elipse es:" + areaElipse)
console.groupEnd()


