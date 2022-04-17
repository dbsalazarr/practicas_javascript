/* 
    DOCUMENT
*/
document.addEventListener('DOMContentLoaded', () => {
    console.log("Documento listo para ejecutar Js")
    let btnResetForm, btnGeneratePeople
    btnResetForm = document.getElementById("btnReset")
    btnGeneratePeople = document.getElementById("btnGeneratePeople")
})

/*
	"GENERAR" NAME AND SALARIO FOR EACH PERSON
*/
function person( name, salary ){
	this.name = name
	this.salary = salary
}

function generatePeople( numberOfPersons ){
	listPeople = []
	for(let i = 0; i < numberOfPersons; i++){
		let newPerson, name, salary
		name = listNames[ Math.floor( Math.random() * listNames.length ) ]
		salary = getRandomIntInclusive(930, 5000)
		newPerson = new person(name, salary)
		listPeople.push(newPerson)
	}
	return listPeople
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function getSalarysOfPeople( list ) {
    return list.map( (person) => person.salary)
}

// CALCULANDO LA MEDIA

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

// CALCULATE THE MEDIAN OF THE TOP TEN 10

function medianTopTenSalarys( list ){

    // sort list
    list.sort( (value, nextValue) => value - nextValue)
    let total, start, rest, top10, medianTopTen
    total = list.length
    start = Math.floor( total * .9)
    rest = total - start
    top10 = list.splice(start, rest) 

    medianTopTen = calcularMediana( top10 )
    return medianTopTen
}


/*
    SHOW PEOPLE GENERATED
*/
function showPeople( list ){
    // Ordenando la lista
    list.sort( (value, nextValue) => { return value.salary - nextValue.salary })
    let table = "<table>"
    table += `<tr> <th> Nº </th> <th> Name </th> <th> Salary </th> </tr>`
    // Generando la tabla
    let i = 1
    list.forEach( (item) => {
        table += `<tr> <td> ${i} </td> <td> ${item.name} </td> <td> S/. ${item.salary} </td> </tr>`
        i++
    })
    table += "</table>"

    document.getElementById("tablePeople").innerHTML = table;
}

/* 
    LEER VALOR
*/
function readData( selectorElement ){
    return document.querySelector( selectorElement).value
}

function resetInput( selectorElement ){
    document.querySelector( selectorElement).value = ""
}

function showResult( message ){
    const lblResult = document.getElementById("lblResultado")
    lblResult.innerHTML = message
}

/* 
    EVENTOS
*/

document.getElementById("btnGeneratePeople").addEventListener("click", () => {
    let numberPersons, peopleList, result, listSalary
    numberPersons = readData("#txtNumberPersons")
    peopleList = generatePeople( numberPersons)
    showPeople( peopleList ) 
    result = ""
    listSalary = getSalarysOfPeople( peopleList )
    result += `<p>The median for all Salarys is:  ${ calcularMediana(listSalary)}</p> <br> `
    result += `<p> The median of top ten of Salary of persons is: ${medianTopTenSalarys(listSalary) } </p>`

    showResult( result )
    resetInput("#txtNumberPersons")
})