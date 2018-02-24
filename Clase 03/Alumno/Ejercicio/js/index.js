// function showMessage(dayNameintern) {
//   switch (dayNameintern) {
//     case 'Lunes':
//     case 'Martes':
//     case 'Miercoles':
//     case 'Jueves':
//     case 'Viernes':
//       console.log('Es día hábil')
//       break
//     case 'Sabado':
//     case 'Domingo':
//       console.log('Es día de fin de semana')
//       break
//     default:
//       console.log('El día ingresado no es valido')
//       break
//   }
// }

// var dayName1 = prompt('Ingrese el nombre del día')

// showMessage(dayName1)

// var dayName2 = prompt('Ingrese el nombre del día')

// showMessage(dayName2)

// var dayName3 = prompt('Ingrese el nombre del día')

// showMessage(dayName3)

// function showCompleteName() {
//   var name = prompt('Ingrese su nombre')
//   var lastName = prompt('Ingrese su apellido')
//   console.log('Hola', name, lastName)
// }

// showCompleteName()


// var number1 = prompt('Ingrese un numero')

// var number2 = prompt('Ingrese otro numero')

function parsedNumber(number) {

  if (isNaN(number)) {
    console.log('Alguno no es número')
  } else {
    var parsedNumber = parseInt(number, 10)
  }
  return parsedNumber
}

function sumNumbers() {
  var number1 = prompt('Ingrese un numero')
  var number2 = prompt('Ingrese otro numero')
  console.log('La suma es', parsedNumber(number1) + parsedNumber(number2))
}

function resNumbers() {
  var number1 = prompt('Ingrese un numero')
  var number2 = prompt('Ingrese otro numero')
  console.log('La resta es', parsedNumber(number1) - parsedNumber(number2))
}

function mulNumbers() {
  var number1 = prompt('Ingrese un numero')
  var number2 = prompt('Ingrese otro numero')
  console.log('La multiplicación es', parsedNumber(number1) * parsedNumber(number2))
}

function divNumbers() {
  var number1 = prompt('Ingrese un numero')
  var number2 = prompt('Ingrese otro numero')
  if (parsedNumber(number2) === 0) {
    console.log('No se puede dividir por cero')
  }
  else {
    console.log('La división es', parsedNumber(number1) / parsedNumber(number2))
  }
}

