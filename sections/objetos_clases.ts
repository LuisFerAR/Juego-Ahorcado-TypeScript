
class Car {
    
    static className = 'Carro';

    public readonly brand: string;
    doors: number;
    fuelTank: number;
    isRunning: boolean;
    type: string;

   private readonly  createAt: number;

    constructor( brand: string, type: string) {
        this.brand = brand;
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type;

        this.createAt = 123456789;
    }

    turnOn(){

        if ( this.isRunning){
            console.log('El carro ya estaba encendido... se malogro el motor ');
            return;
        }

        if ( this.fuelTank <= 0){
            console.log('El carro no tiene gasolina');
            return;
        }

        this.isRunning = true;
        console.log('El carro esta encendido');
    }


}

let myMazda = new Car('Mazda','Sedan');


console.log(myMazda);
myMazda.turnOn();
console.log(myMazda);

console.log(Car.className);