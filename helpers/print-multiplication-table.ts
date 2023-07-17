export function multiplicarTabla(base:number, limite:number = 10){
   
    if(limite <= 0){
        throw new Error('El limite deb ser mayor a 0'); 
    }

    for(let i = 0;i<limite;i++){
    
        console.log(base, "X", i, "=", base*i);
    }
   
}