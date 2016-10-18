// write a recursive function that takes a number as input and returns its factorial as output

function factorial(input){
       if (input <= 1){
           return 1;
       } else {
           return input * factorial(input - 1)
       }
    }
