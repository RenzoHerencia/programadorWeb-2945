var dayName = prompt('Ingrese el nombre del día')

switch (dayName) {
   case 'Lunes':
   case 'Martes':
   case 'Miercoles':
   case 'Jueves':
   case 'Viernes':
    console.log('Día de semana')
    break
  case 'Sabado':
  case 'Domingo':
    console.log('Fin de semana')
    break
  default:
    console.log('El día ingresado no es valido')
    break
    }