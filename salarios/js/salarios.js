

let listNames = [
"Hugo",
"Martín",
"Lucas",
"Mateo",
"Leo",
"Daniel",
"Alejandro",
"Pablo",
"Manuel",
"Álvaro",
"Adrián",
"David",
"Mario",
"Enzo",
"Diego",
"Marcos",
"Izan",
"Javier",
"Marco",
"Álex",
"Bruno",
"Oliver",
"Miguel",
"Thiago",
"Antonio",
"Marc",
"Carlos",
"Ángel",
"Juan",
"Gonzalo",
"Gael",
"Sergio",
"Nicolás",
"Dylan",
"Gabriel",
"Jorge",
"José",
"Adam",
"Liam",
"Eric",
"Samuel",
"Darío",
"Héctor",
"Luca",
"Iker",
"Amir",
"Rodrigo",
"Saúl",
"Víctor",
"Francisco",
"Iván",
"Jesús",
"Jaime",
"Aarón",
"Rubén",
"Ian",
"Guillermo",
"Erik",
"Mohamed",
"Julen",
"Luis",
"Pau",
"Unai",
"Rafael",
"Joel",
"Alberto",
"Pedro",
"Raúl",
"Aitor",
"Santiago",
"Rayan",
"Pol",
"Nil",
"Noah",
"Jan",
"Asier",
"Fernando",
"Alonso",
"Matías",
"Biel",
"Andrés",
"Axel",
"Ismael",
"Martí",
"Arnau",
"Imran",
"Luka",
"Ignacio",
"Aleix",
"Alan",
"Elías",
"Omar",
"Isaac",
"Youssef",
"Jon",
"Teo",
"Mauro",
"Óscar",
"Cristian",
"Leonardo",
"Lucía",
"Sofía",
"Martina",
"María",
"Julia",
"Paula",
"Valeria",
"Emma",
"Daniela",
"Carla",
"Alba",
"Noa",
"Alma",
"Sara",
"Carmen",
"Vega",
"Lara",
"Mia",
"Valentina",
"Olivia",
"Claudia",
"Jimena",
"Lola",
"Chlóe",
"Aitana",
"Abril",
"Ana",
"Laia",
"Triana",
"Candela",
"Alejandra",
"Elena",
"Vera",
"Manuela",
"Adriana",
"Inés",
"Marta",
"Carlota",
"Irene",
"Victoria",
"Blanca",
"Marina",
"Laura",
"Rocío",
"Alicia",
"Clara",
"Nora",
"Lía",
"Ariadna",
"Zoe",
"Amira",
"Gala",
"Celia",
"Leire",
"Eva",
"Ángela",
"Andrea",
"África",
"Luna",
"Ainhoa",
"Ainara",
"India",
"Nerea",
"Ona",
"Elsa",
"Isabel",
"Leyre",
"Gabriela",
"Aina",
"Cayetana",
"Iria",
"Jana",
"Mar",
"Cloe",
"Lina",
"Julieta",
"Adara",
"Naia",
"Iris",
"Nour",
"Mara",
"Helena",
"Yasmín",
"Natalia",
"Arlet",
"Diana",
"Aroa",
"Amaia",
"Cristina",
"Nahia",
"Isabella",
"Malak",
"Elia",
"Carolina",
"Berta",
"Fátima",
"Nuria",
"Azahara",
"Macarena",
"Aurora"]
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

let people = generatePeople( 101 )

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