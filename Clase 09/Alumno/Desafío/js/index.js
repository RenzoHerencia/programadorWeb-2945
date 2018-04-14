var passwordInput = document.getElementById('passwordInput')

passwordInput.onblur = function (event) {
  var passwordInputNode = event.target

  var value = passwordInputNode.value

  var parentPasswordInputNode = passwordInputNode.parentElement

  var passwordErrorNode = document.getElementById('passwordError')

  if (passwordErrorNode) {
    parentPasswordInputNode.removeChild(passwordErrorNode)
  }

  if (value && typeof value === 'string' && value.length >= 6) {
    passwordInputNode.classList.remove('is-invalid')
    passwordInputNode.classList.add('is-valid')
    // console.log('Contraseña correcta')
  } else {
    passwordInputNode.classList.remove('is-valid')
    passwordInputNode.classList.add('is-invalid')

    passwordErrorNode = document.createElement('span')

    passwordErrorNode.id = 'passwordError'
    passwordErrorNode.innerHTML = 'Contraseña con error'

    parentPasswordInputNode.appendChild(passwordErrorNode)

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
