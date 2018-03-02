function parsedNumber(number) {

  if (isNaN(number)) {
    console.log('Alguno no es número')
  } else {
    var parsedNumber = parseInt(number, 10)
  }
  return parsedNumber
}

function sumNumbers() {
  var number1 = prompt('Ingrese un numero para hacer la suma')
  var number2 = prompt('Ingrese otro numero')
  console.log('La suma es', parsedNumber(number1) + parsedNumber(number2))
}

function resNumbers() {
  var number1 = prompt('Ingrese un numero para hacer la resta')
  var number2 = prompt('Ingrese otro numero')
  console.log('La resta es', parsedNumber(number1) - parsedNumber(number2))
}

function mulNumbers() {
  var number1 = prompt('Ingrese un numero para hacer la multiplicación')
  var number2 = prompt('Ingrese otro numero')
  console.log('La multiplicación es', parsedNumber(number1) * parsedNumber(number2))
}

function divNumbers() {
  var number1 = prompt('Ingrese un numero para la división')
  var number2 = prompt('Ingrese otro numero')
  if (parsedNumber(number2) === 0){
    do {
       var number2 = prompt('Ingrese otro numero diferente a cero')       
    } while (parsedNumber(number2) === 0)
    console.log('La división es', parsedNumber(number1) / parsedNumber(number2))
  } else {
  console.log('La división es', parsedNumber(number1) / parsedNumber(number2))
  }  
}


function askOperation() {
  var operation = prompt('Ingrese una operación', 'resta')
  switch (operation) {
    case 'suma':
    case 'Suma':
      sumNumbers()
      break
    case 'resta':
    case 'Resta':
      resNumbers()
      break
    case 'multiplicacion':
    case 'multiplicación':
    case 'Multiplicación':
    case 'Multiplicacion':
    mulNumbers()
      break
    case 'division':
    case 'división':
    case 'División':
    case 'Division':
    divNumbers()
      break
    default:
     console.log('La operación no es válida')
     break
     }
}

askOperation()