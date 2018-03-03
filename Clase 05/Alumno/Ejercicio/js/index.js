function User (firstName, lastName, age, address) {
  this.showFullName = firstName + ' ' + lastName

  var id = Math.random()

  this.isLegalAge = function () {
    if (age >= 18) {
      return true
    } else {
      return false
    }
    // return !!(age >= 18)
  }

  this.getId = function () {
    return id
  }
}

var newUser = new User('Pedro', 'Fernandez', 14, 'Carmelino 689')

console.log(
  newUser.showFullName,
  newUser.age,
  newUser.isLegalAge(),
  newUser.address
)

// function Movie (tittle, year, director, actors) {
//   this.getTittle = function () {
//     return tittle
//   }

//   this.setTittle = function (newTittle) {
//     tittle = newTittle
//   }
// }

// var newMovie = new User('Star Wars', , 'George Lucas', 'Carmelino 689')

// newStudent.setFirstName('Ana')

// console.log()
