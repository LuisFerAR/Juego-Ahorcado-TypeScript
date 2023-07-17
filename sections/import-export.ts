import {suma} from "../helpers/math-helpers";
import {resta} from "../helpers/math-helpers";
import {div} from "../helpers/math-helpers";
import {mul} from "../helpers/math-helpers";

let n1 = 10;
let n2 = 20;


let total1:number = suma(n1,n2);
let total2:number = resta(n1,n2);
let total3:number = div(n1,n2);
let total4:number = mul(n1,n2);

console.log('total suma : ', total1);
console.log('total resta : ', total2);
console.log('total multi : ', total3);
console.log('total div : ', total4);

