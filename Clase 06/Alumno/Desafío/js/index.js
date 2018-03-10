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
