var firstNameInput = document.getElementById('firstNameInput')

firstNameInput.onblur = function (event) {
  var firstNameInputNode = event.target

  var value = firstNameInputNode.value

  var parentFirstNameInputNode = firstNameInputNode.parentElement

  var textErrorNode = document.getElementById('textError')

  if (textErrorNode) {
    parentFirstNameInputNode.removeChild(textErrorNode)
  }

  if (value) {
    firstNameInputNode.classList.remove('is-invalid')
    firstNameInputNode.classList.add('is-valid')
    // console.log('El input esta lleno')
  } else {
    firstNameInputNode.classList.remove('is-valid')
    firstNameInputNode.classList.add('is-invalid')
    // console.log('Input vacio')

    textErrorNode = document.createElement('span')

    textErrorNode.id = 'textError'
    textErrorNode.innerHTML = 'El campo está vacio'

    parentFirstNameInputNode.appendChild(textErrorNode)
  }
  validateAllFields()
}

var lastNameInput = document.getElementById('lastNameInput')

lastNameInput.onblur = function (event) {
  var lastNameInputNode = event.target

  var value = lastNameInputNode.value

  var parentLastNameInputNode = lastNameInputNode.parentElement

  var textErrorNode = document.getElementById('textError')

  if (textErrorNode) {
    parentLastNameInputNode.removeChild(textErrorNode)
  }

  if (value) {
    lastNameInputNode.classList.remove('is-invalid')
    lastNameInputNode.classList.add('is-valid')
    // console.log('El input esta lleno')
  } else {
    lastNameInputNode.classList.remove('is-valid')
    lastNameInputNode.classList.add('is-invalid')
    // console.log('Input vacio')

    textErrorNode = document.createElement('span')

    textErrorNode.id = 'textError'
    textErrorNode.innerHTML = 'El campo está vacio'

    parentLastNameInputNode.appendChild(textErrorNode)
  }
  validateAllFields()
}

var emailInput = document.getElementById('emailInput')

emailInput.onblur = function (event) {
  var emailInputNode = event.target

  var value = emailInputNode.value

  var parentEmailInputNode = emailInputNode.parentElement

  var emailErrorNode = document.getElementById('emailError')

  if (emailErrorNode) {
    parentEmailInputNode.removeChild(emailErrorNode)
  }

  if (
    value &&
    typeof value === 'string' &&
    value.indexOf('@') !== -1 &&
    value.indexOf('.') !== -1
  ) {
    emailInputNode.classList.remove('is-invalid')
    emailInputNode.classList.add('is-valid')
    // console.log('Contraseña correcta')
  } else {
    emailInputNode.classList.remove('is-valid')
    emailInputNode.classList.add('is-invalid')

    emailErrorNode = document.createElement('span')

    emailErrorNode.id = 'emailError'
    emailErrorNode.innerHTML = 'Correo inválido'

    parentEmailInputNode.appendChild(emailErrorNode)

    // console.log('Contraseña incorrecta')
  }

  validateAllFields()
}

function validateAllFields () {
  var submitButtom = document.getElementById('submitButtom')

  var elementsWithIsInvalid = document.getElementsByClassName('is-invalid')

  if (elementsWithIsInvalid && elementsWithIsInvalid.length === 0) {
    submitButtom.disabled = false
  } else {
    submitButtom.disabled = true
  }
}
