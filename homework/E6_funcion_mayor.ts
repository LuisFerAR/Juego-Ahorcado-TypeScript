function max( a: number, b:number, c: number){

    if( a > b ){

        //ternario 
        return ( a > c ) ? a : c;

        /*if ( a > c ){
            return a;
        } else {
            return c;
        }*/

    }

    if ( b > c ){
        return b;
    } else {

        return ( a > c ) ? a : c;

         /*
        if ( a > c ){
            return a
        } else {
          return c;  
        }
        */

    }
}

let maxValue = max( 55, 2, 60 );
console.log( maxValue );

