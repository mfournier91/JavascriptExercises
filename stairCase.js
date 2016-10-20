//given n make a stair case that aligns to the right with a total of n steps
// n = 3 would yield
/*
        #
       ##
      ###

*/

function main(n) {
    for(var stair = 1; stair <= n; stair++){
        console.log((" ".repeat(n - stair)) + ("#".repeat(stair)));
    }

}
