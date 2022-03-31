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