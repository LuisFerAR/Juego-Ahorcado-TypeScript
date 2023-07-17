export let people: string[] = ['luis', 'fernando','aranda'];
export let money:number[] =[1500, 2400, 3200];

for(let i = 0;i < people.length && money.length;i++){
    
    console.log(people[i], "tiene salario de: ", money[i]);
} 