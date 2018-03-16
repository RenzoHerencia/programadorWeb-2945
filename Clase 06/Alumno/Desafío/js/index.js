var studentList = [
  { firstName: 'Adrián', lastName: 'Ferré' },
  { firstName: 'Mateo', lastName: 'Molina' },
  { firstName: 'Maria', lastName: 'Fernandez' }
]

function textToUpperCase (text) {
  if (typeof text === 'string') {
    return text.toUpperCase()
  }
}

function searchStudentByFirstNameAndLastName (text) {
  var index = -1
  var textUpperCase = textToUpperCase(text)

  for (var i = 0; i < studentList.length; i++) {
    var student = studentList[i]
    if (
      textToUpperCase(student.firstName).indexOf(textUpperCase) !== -1 ||
      textToUpperCase(student.lastName).indexOf(textUpperCase) !== -1
    ) {
      index = i
      break
    }
  }
  return index
}

function addNewStudent (studentFirstName, studentLastName) {
  var studentNameUpperCase = textToUpperCase(studentFirstName)
  var studentLastNameUpperCase = textToUpperCase(studentLastName)

  studentList.push({
    firstName: studentNameUpperCase,
    lastName: studentLastNameUpperCase
  })
}
// var name = prompt('Ingresa')
// searchStudentByFirstNameAndLastName(name)

// addNewStudent('juan', 'perez')
// console.log(studentList)

function deleteStudentName (studentName) {
  var index = searchStudentByFirstNameAndLastName(studentName)
  if (index !== -1) {
    studentList.splice(index, 1)
  }
}

var name = prompt('Ingresa')
deleteStudentName(name)
console.log(studentList)
