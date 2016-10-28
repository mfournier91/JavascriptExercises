//Perform a bubble sort given an array of integers.

function main(a) {
    var n = a.length;

    var totalSwaps = 0;
    for (var i = 0; i < n; i++){
        var swapsThisRound = 0;
        var temp;
        for(var j = 0; j < n-1; j++ ){
            if (a[j] > a[j+1]){
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
                swapsThisRound++;
                totalSwaps++;
            }
        }
        if (swapsThisRound == 0){ //if no swaps in a given round array must be sorted
            break;
        }
    }

    console.log('Array is sorted in ' + totalSwaps + ' swaps.');
    console.log('First Element: ' + a[0]);
    console.log('Last Element: ' + a[n-1]);
    console.log(a);

}
