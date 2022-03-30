
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

// New ejercicios
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