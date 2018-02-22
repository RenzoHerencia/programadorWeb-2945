var dayName = [ 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo' ]

for(var i = 0 ; i < dayName.length ; i++){
    var day = dayName[i]
    if (day === 'Sabado' || day === 'Domingo') {
        console.log(day +' Fin de semana')
    }else{
        console.log(day)
    }
}