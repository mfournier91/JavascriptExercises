//given an nXn array, a determine the absolute value of the difference between its two diagonals
function main(n, a) {
    
    var diagonalOne = 0;
    var diagonalTwo = 0;
    for(var i = 0; i < a.length; i++){
        diagonalOne += a[i][i];
    }

    var k = 0;
    for(var j = a.length -1; j >= 0; j--){
        diagonalTwo += a[k][j];
        k++;
    }

    console.log(Math.abs(diagonalOne-diagonalTwo));

}
