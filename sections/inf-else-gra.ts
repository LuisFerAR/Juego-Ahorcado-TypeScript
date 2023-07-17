export let nota: number = 87;
let cali: string;

    if(nota >= 90){
        cali = 'A'; 
    }else if(nota >= 80){
        cali = 'B'; 
    }else if(nota >= 70){
        cali = 'C';
    }else if(nota >= 60){
        cali = 'D';
    }else {
        cali = 'F'; 
    }

 console.log('La nota es:', cali);
 