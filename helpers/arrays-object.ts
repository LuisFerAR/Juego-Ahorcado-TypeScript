
export interface Person {
    age:number;
    name:string;
    isActive:boolean;
};


let fer: Person = {
    age:20,
    isActive:true,
    name:'fer'
   
};

let lui: Person = {
    age: 20,
    name: 'lui',
    isActive: false
};

let aran:Person  = {
    age: 20,
    name: 'aran',
    isActive: false
};

let people:Person[] = [fer, lui, aran];
//console.log(people);

for(let i=0;i<people.length;i++){
    let person = people[i];
    console.log(person.name +' '+ person.age);

};

