// var studentsList = [
//   'CARLOS',
//   'GERONIMO',
//   'NICOLAS',
//   'LUCAS',
//   'MARIA',
//   'FEDERICO',
//   'ANTONIO',
//   'LORNA',
//   'JULIAN',
//   'DIEGO',
//   'DANIELA',
//   'JUAN',
//   'MATEO',
//   'BARBARA',
//   'AGUSTIN',
//   'MARIO',
//   'MARIEL',
//   'ANA',
//   'FLORENCIA'
// ]

// srtingfyStudentsList = JSON.stringify(studentsList)

// localStorage.setItem('students', srtingfyStudentsList)

function getFromLocalStorage () {
  var localStudents = localStorage.getItem('students')
  var parsedStudents

  if (localStudents) {
    parsedStudents = JSON.parse(localStudents)
  } else {
    parsedStudents = []
  }
  return parsedStudents
}

function addNewStudent (student) {
  var srtingfyStudentsList
  var parsedStudents = getFromLocalStorage()

  if (parsedStudents && Array.isArray(parsedStudents)) {
    parsedStudents.push(student)
    srtingfyStudentsList = JSON.stringify(parsedStudents)
    localStorage.setItem('students', srtingfyStudentsList)
  }
}

var name = prompt('Ingresa')
addNewStudent(name)
