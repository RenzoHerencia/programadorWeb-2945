$(document).ready(function () {
  $('#home').click(function () {
    $('#main').load('../partials/home.html')
  })

  $('#people').click(function () {
    $('#main').load('../partials/people.html')
  })
})

$(document).ready(function (event) {
  $(window).keydown(function (event) {
    var keyPress = event.which

    if (keyPress === 13) {
      var inputNode = $('#counter')

      var value = inputNode.val('0')
    }
  })
})
