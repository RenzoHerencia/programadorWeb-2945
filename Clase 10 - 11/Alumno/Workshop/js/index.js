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

  if (value && typeof value == 'number') {
    showValidInput(dniInputNode)
  } else {
    showInvalidInput(dniInputNode)
  }
  validateAllFields()
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
