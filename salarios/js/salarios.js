
/*
	"GENERAR",NAME AND SALARIO
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

let people = generatePeople( 200 )

let listSalarios = people.map( (person) => person.salary)

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
console.log( listSalarios )
console.log(" The median is: " + calcularMediana( listSalarios ) )


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

console.log( medianTopTenSalarys( listSalarios) )
