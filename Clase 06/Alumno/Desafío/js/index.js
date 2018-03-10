// function Movie (tittle, year, director, actors) {
//   var id = Math.random()
//   this.tittle = tittle
//   this.year = year
//   this.director = director
//   this.actors = actors.split(',')

//   this.getTittle = function () {
//     return tittle
//   }

//   this.setTittle = function (newTittle) {
//     tittle = newTittle
//   }

//   this.getYear = function () {
//     return year
//   }

//   this.setYear = function (newYear) {
//     year = NewYear
//   }

//   this.getDirector = function () {
//     return director
//   }

//   this.setDirector = function (newDirector) {
//     director = NewDirector
//   }

//   this.getActors = function () {
//     return actors.split(',')
//   }

//   this.setActors = function (newActors) {
//     actors.push = newActors
//   }
// }

// var newMovie1 = new Movie(
//   'Star Wars: Episodio IV - Una nueva esperanza',
//   '1977',
//   'George Lucas',
//   'Mark Hamill,Harrison Ford,Carrie Fisher'
// )

// newMovie1.setTittle('Matrix')

// newMovie1.setActors('Keanu Reeves,Carrie-Ann Moss,Laurence Fishburne')

// console.log(
//   newMovie1.tittle,
//   newMovie1.year,
//   newMovie1.director,
//   newMovie1.actors,
//   newMovie1.getTittle(),
//   newMovie1.getActors()
// )

var objectList = [
  { firstName: 'ADRIAN', lastName: 'FERRE' },
  { firstName: 'MATEO', lastName: 'MOLINA' },
  { firstName: 'MARIA', lastName: 'FERNANDEZ' }
]

function textToUpperCase (text) {
  if (typeof text === 'string') {
    return text.toUpperCase()
  }
}

function searchStudentByFirstNameAndLastName (text) {
  var index = -1
  var textUpperCase = textToUpperCase(text)

  for (var i = 0; i < objectList.length; i++) {
    var student = objectList[i]
    if (
      student.firstName.indexOf(textUpperCase) !== -1 ||
      student.lastName.indexOf(textUpperCase) !== -1
    ) {
      index = i
      flag = true
      break
    }
  }
  return console.log(index)
}

function addNewStudent (studentFirstName, studentLastName) {
  function Student (firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  var studentFirstName
  var studentLastName

  var studentFirstNameUpperCase = textToUpperCase(studentFirstName)

  objectList.firstName.push(studentFirstNameUpperCase)

  var studentLastNameUpperCase = textToUpperCase(studentLastName)

  objectList.lastName.push(studentFirstNameUpperCase)
}

addNewStudent('juan', 'perez')
console.log(objectList)
