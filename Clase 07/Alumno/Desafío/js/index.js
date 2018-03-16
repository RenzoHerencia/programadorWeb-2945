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

// localStorage.setItem('studentList', srtingfyStudentsList)

function SearchandDeleteStudent (studentName) {
  var localStudentsList = localStorage.getItem('studentList')

  var parsedStudentsList

  if (localStudentsList) {
    parsedStudentsList = JSON.parse(localStudentsList)
  } else {
    parsedStudentsList = []
  }

  function searchStudent (studentName) {
    var index = -1

    for (var i = 0; i < parsedStudentsList.length; i++) {
      var student = parsedStudentsList[i]
      if (student.indexOf(studentName) !== -1) {
        index = i
        break
      }
    }
    return index
  }

  function deleteStudent (studentName) {
    var index = searchStudent(studentName)
    if (index !== -1) {
      parsedStudentsList.splice(index, 1)
    }
    return parsedStudentsList
  }

  var upperCaseName = studentName.toUpperCase()

  deleteStudent(upperCaseName)

  var strStudentList = JSON.stringify(parsedStudentsList)

  localStorage.setItem('studentList', strStudentList)
}

var name = prompt('Ingresa')
SearchandDeleteStudent(name)
