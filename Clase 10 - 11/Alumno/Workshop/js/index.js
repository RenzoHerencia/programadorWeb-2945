var firstNameInput = document.getElementById('firstName')

firstNameInput.onblur = showErrorOnEmptyInput

function showErrorOnEmptyInput (event) {
  var inputNode = event && event.target

  var value = inputNode && inputNode.value
  if (value) {
    showValidInput(inputNode)
  } else {
    showInvalidInput(inputNode)
  }
  validateAllFields()
}

function showValidInput (inputNode) {
  if (inputNode && inputNode.classList) {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
}

function showInvalidInput (inputNode) {
  if (inputNode && inputNode.classList) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  }
}

// var emailInput = document.getElementById('email')

// emailInput.onblur = function (event) {
//   var emailInputNode = event && event.target

//   var value = emailInputNode && emailInputNode.value

//   if (
//     value &&
//     typeof value === 'string' &&
//     value.indexOf('@') !== -1 &&
//     value.indexOf('.') !== -1
//   ) {
//     showValidInput(emailInputNode)
//   } else {
//     showInvalidInput(emailInputNode)
//   }

//   validateAllFields()
// }

var dniInput = document.getElementById('dni')

dniInput.onblur = function (event) {
  var dniInputNode = event && event.target

  var value = dniInputNode && dniInputNode.value

  if (!value || !number || number < 0 || index !== -1) {
    showValidInput(dniInputNode)
  } else {
    showInvalidInput(dniInputNode)
  }
  validateAllFields()
}

// document.getElementById('dni').onblur = function (event) {
//   var dniNode = event.target

//   var value = dniNode.value

//   var parsedDni = parseInt(value, 10)

//   if (
//     parsedDni &&
//     !isNaN(parsedDni) &&
//     parsedDni >= 0 &&
//     searchIndexByDni(parsedDni) === -1
//   ) {
//     dniNode.classList.remove('is-invalid')
//     dniNode.classList.add('is-valid')
//   } else {
//     dniNode.classList.remove('is-valid')
//     dniNode.classList.add('is-invalid')
//   }
// }

var dniInput = document.getElementById('dni')
dniInput.onblur = function (event) {
  validateDniInput(event)
}
dniInput.onmouseleave = function (event) {
  validateDniInput(event)
}

function validateDniInput (event) {
  var textInputNode = event.target
  var value = textInputNode.value
  var parentTextInputNode = textInputNode.parentElement
  dniErrorInputNode = document.getElementById('dniErrorNode')
  if (dniErrorInputNode) {
    parentTextInputNode.removeChild(dniErrorInputNode)
  }

  var number = parseNumber(value)
  var index = searchStudentByDni(number)
  if (!value || !number || number < 0 || index !== -1) {
    textInputNode.classList.remove('is-valid')
    textInputNode.classList.add('is-invalid')

    var errorText = 'ERROR: '
    if (!value) {
      errorText = errorText + ' Campo DNI vacio.'
    }
    if (!number || number < 0) {
      errorText = errorText + ' No es un numero valido.'
    }
    if (index !== -1) {
      errorText = errorText + ' DNI ya existe.'
    }

    var dniErrorNode = document.createElement('span')
    dniErrorNode.id = 'dniErrorNode'
    dniErrorNode.innerHTML = errorText
    parentTextInputNode.appendChild(dniErrorNode)
  } else {
    textInputNode.classList.remove('is-invalid')
    textInputNode.classList.add('is-valid')
  }
  validateAddStudentFields()
}

function validateAllFields () {
  var submitButton = document.getElementById('addStudentButton')
  var validFields = document.getElementsByClassName('is-valid')
  if (validFields && validFields.length === 2) {
    submitButton.disabled = false
  } else {
    submitButton.disabled = true
  }
}
