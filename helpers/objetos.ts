export let person = {
    name: 'Fer',
    age: 27,
    isAtive: true,
    hobbies: ['soccer', 'baseball']     
}   

console.log(person.name.toUpperCase());//PASAR A MAYUSCULA
console.log(person.name.toLowerCase());

let person2 = {
    name: 'Fer',
    age: 27,
    isAtive: true,
    hobbies: ['soccer', 'baseball'],   
    toString(){
        let objectString = this.name + " "+ this.age + " "+this.hobbies[1];
        console.log(objectString);
    }  
}   

person2.toString();

let person3 = {
    name: 'Fer',
    age: 27,
    isAtive: true,
    hobbies: ['soccer', 'baseball'],   
    toString( printAll: boolean){ //PARA LLAMAR TODO CON BOOLEANO
        
        if(printAll === true){
            let objectString = this.name + " "+ this.age + " "+this.hobbies[1];
            console.log(objectString);
        }
        else {
            console.log('activar modo true')
        }
    }  
}   

person3.toString(false);
