var examResult = [7, 5, 6, 4, 3, 2, 8]

function averageGrade() {
  var sumatory = 0
  for (var i = 0; i < examResult.length; i++) {
    sumatory = sumatory + examResult[i]
  }
  return sumatory / examResult.length
}

// var averageResult = averageGrade(examResults)

// console.log(averageResult)

var student = {
  firstName: 'Laura',
  lastName: 'Lopez',
  dni: 45678987,
  address: {
    street: 'Cucha cucha',
    number: 1234
  },
  examResult: [7, 5, 6, 4, 3, 2, 8]
}

function showStudentDetail(student) {
  for (var i = 0; i < student.length; i++) {

  }
}

console.log(student.firstName)
console.log(student.lastName)
console.log(student.dni)
console.log(student.address)
console.log(student.address.street)
console.log(student.address.street.number)
console.log(())


console.log(showData(lastName))
