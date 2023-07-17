function heroesConLetra  (listaNombres: string[], letra: string){
    
    letra = letra.toUpperCase(); // pasar todo a mayuscula
    let nuevoNombreLista: string[] = []; 
/*
    for ( let i = 0; i< listaNombres.length;i++){
        let nombre = listaNombres[i];

        if(nombre.startsWith(letra)){
            nuevoNombreLista.push(nombre);
        }
    }

    */
    for (let nombre of listaNombres){
        if ( nombre.startsWith(letra)){
            nuevoNombreLista.push(nombre);
        }
    }
    

    return nuevoNombreLista;
}

let heroes = ['Doom', 'Dr.Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let heroyletra = heroesConLetra( heroes, 'S');
console.log (heroyletra);

