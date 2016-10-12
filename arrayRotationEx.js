//Given n = array length, k = number of spaces to rotate, a = array
//Write a function that performs k left rotations on an array a of size n

function leftRotation(n, k, a) {
  var myNewArr = []
    for(var i=0; i < n; i++){
        myNewArr.push(a[(i + k) % (n)]);
    }
    console.log(myNewArr.join(" ")); //rotated array
}
