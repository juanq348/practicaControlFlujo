for (let numero = 1; numero <= 15; numero++){
    if(numero % 3 === 0 && numero % 5 === 0){
        console.log(numero + " FizzBuzz");
    } else if (numero % 5 === 0){
        console.log(numero + " Buzz");
    } else if (numero % 3 === 0 ){
        console.log(numero + " Fizz");
    } else{
    console.log(numero);
    }
}