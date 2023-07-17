export let dia: number = 1;

if (dia <= 0){
    throw new Error('Dia de la semana no conciende')
}
else {
    switch(dia){

        case 1:
            console.log('Es lunes');
            break;
        case 2:
            console.log('Es martes');
            break; 
        case 3:
            console.log('Es miercoles');
            break;
        default:
            console.log('No es lunes, martes o miercoles')
    }
}