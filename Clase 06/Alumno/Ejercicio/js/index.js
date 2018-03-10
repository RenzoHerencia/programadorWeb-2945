var studentsList = [
  'CARLOS',
  'GERONIMO',
  'NICOLAS',
  'LUCAS',
  'MARIA',
  'FEDERICO',
  'ANTONIO',
  'LORNA',
  'JULIAN',
  'DIEGO',
  'DANIELA',
  'JUAN',
  'MATEO',
  'BARBARA',
  'AGUSTIN',
  'MARIO',
  'MARIEL',
  'ANA',
  'FLORENCIA'
]

function transformText (text) {
  var textUpperCase
  if (typeof name === 'string') {
    textUpperCase = text.toUpperCase()
    return textUpperCase
  }
}

function searchStudents () {
  var index = -1
  var name = prompt('Ingrese nombre')
  var nameUpperCase = transformText(name)
  for (var i = 0; i < studentsList.length; i++) {
    if (studentsList.indexOf(nameUpperCase) !== -1) {
      index = i
    }
  }
}

searchStudents()
