// let promedioSalarios = 0
// for( salario of salarios){
//     promedioSalarios += salario
// }
// promedioSalarios = promedioSalarios/salarios.length

// console.log("El promedio de los salarios es:" + promedioSalarios)

// promedioSalarios = 0
// for (let i = 0; i < salarios.length; i++){
//     promedioSalarios += salarios[i]
// }
// promedioSalarios =promedioSalarios/salarios.length
// console.log("El promedio de los salarios es:" + promedioSalarios)

// Media de números
const salarios = [100, 200, 300, 500]

function calcularMediaAritmetica( listNumbers ){
    /* let mediaAritmetica = 0
    listNumbers.forEach( (number) => {
        mediaAritmetica += number
    })
    return mediaAritmetica / listNumbers.length */

    // Aplicando el método reduce
    let mediaAritmetica = listNumbers.reduce( (initialValue, nextValue) => {
        return initialValue + nextValue
    }, 0) // el 0 indica el valor de inicio
    
    return mediaAritmetica = mediaAritmetica / listNumbers.length
}

console.log( calcularMediaAritmetica( salarios ) )

// Mediana de una lista de numeros
const inversiones = [400, 500, 200, 300, 600, 450, 10, 80, 9]

function calcularMediana( list ){

    // Ordenando la lista
    list.sort( (a, b) => a - b)
    let mediumTerm 
    if( isEven( list.length )){
        // es par
        let nextElement 
        mediumTerm = (list.length / 2) - 1
        nextElement = mediumTerm + 1
        return (list[mediumTerm] + list[nextElement]) / 2
    }else {
        // es impar
        mediumTerm = (list.length/2 + 0.5) - 1
        return list[mediumTerm]
    }
}

function isEven( number ){
    return number % 2 == 0 ? true : false
}

// Reto
/* 
    1) Ordenar la lista mediante un for
    2) Ordenar mediante el método sort
*/

console.log("La mediana es: "+ calcularMediana(inversiones) )



/* 
    CALCULANDO LA MODA
*/
const lista1 = [1, 2, 3, 1, 3, 3, 4, 3, 2, 2, 1]

function calculateMode( list ){
    const modeObject = {}

    // Agregando elementos al objeto, contando los elementos repetidos en la lista
    lista1.map( (element) => {
        // Si existe el modeObject
        if (modeObject[element] ) {
            modeObject[element] += 1
        }else{    
            modeObject[element] = 1
        }
    })
    // CONVIRTIENDO UN OBJETO A UN ARRAY
    const entries = Object.entries( modeObject)

    // ORDENANDO EL ARREGLO BIDIMENSIONAL DE MENOR A MAYOR
    entries.sort( (value, nextValue) => {
        return value[1] - nextValue[1]
    } )

    return entries[ entries.length - 1][0]
}
console.log("The mode in the list of numbers is: " + calculateMode(lista1) )


/* 
SOLUCIÓN ALTERNA - ENCONTRADA EN LOS COMENTARIOS
const NUMBERS = [2, 2, 1, 1, 3];

function mode(arr){
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop()
}

console.log( mode(NUMBERS) )

 */

 /*
    Nuevo Promedio
    GEOMETRIC AVERAGE
 */
function geometricAverage( list ){
    let product
    product = list.reduce( (value, nextValue) => value*nextValue)
    return Math.pow( product, 1/list.length)
}
// console.log( geometricAverage( [2, 8] ) ) // result is 4


// OBTENIENDO EL PROMEDIO PONDERADO DEL SIGUIENTE ARRAY DE OBJETOS
const notes = [
    {
        course: "Educación Emocional",
        note: 10,
        credit: 2
    },
    {
        course: "Programación",
        note: 8,
        credit: 5
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5
    }
];

// producto the grade with the credit

let productGrades = notes.map( (item) => {
    return item.note * item.credit
}) 

let sumGrades = productGrades.reduce( (value, nextValue) => value + nextValue)
let sumCredits = 0
notes.forEach( (item) => {
    console.log(item.credit)
    sumCredits += item.credit
})

console.log(sumCredits)
weightedAverage = sumGrades/sumCredits

console.log( "The weight average is: " + weightedAverage)
