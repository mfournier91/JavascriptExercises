//Given a number input n, determine the maximum number of consecutive ones there would be if you translated n to binary.
function main(n) {

    function determineArrayLength(n){ // (the max power of two thats less than n) + 1 gives us the number of digits needed to write n in binary
        exponent = 0;
        twoPower = 1;
        while(twoPower <= n){
            twoPower *= 2;
            exponent++;
        }
        return exponent;
    }

    var arrayLength = determineArrayLength(n)
    var myArray = []

    function makeArray() {

        for (var i = 0; i < arrayLength; i++){
            myArray.push(0);
        }
    }
    makeArray(); //make an array the size of array length filled with 0s

    var remainder = n;
    var onePos = []
    var maxExp;
    while(remainder > 0){
        maxExp = (determineArrayLength(remainder) - 1) //the function we wrote can be used to find the ones because we are finding the maximum exponent that two can be raised to and still be less than the remainder
        onePos.push(maxExp);
        remainder = remainder - Math.pow(2, maxExp); //then we subtract the value 2^maxExp
    }

    function changeToOnes(){
        for(var i = 0; i < onePos.length; i++){
            myArray[onePos[i]] = 1; //the onePos array has a list of indices of myArray that need to be changed
        }

    }
    changeToOnes();
    myArray.reverse()  //Not necessary but this changes the array to look how the actual binary value would

    function countConsecutiveOnes(myArray) {
        var maxCount = 0;
        var localMax = 0;
        for(var i = 0; i < myArray.length; i++){
            if(myArray[i] == 1){
                localMax++;
                if (localMax > maxCount){
                    maxCount = localMax
                }
            }
            else {
                localMax = 0;
            }
        }
        return maxCount;
    }
    var consecutiveOnes = countConsecutiveOnes(myArray)
    console.log(consecutiveOnes)

}
