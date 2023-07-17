export function calcularNombre (nombres: string[]){
    
    let largoNombres = ''; 

    for ( let i = 0;i<nombres.length;i++){
        let name = nombres[i];

        if ( name.length > largoNombres.length ){
            largoNombres = name;
        }
    }

    return largoNombres;
}

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Xavier']
let hero = calcularNombre( heroes);
console.log (hero);

