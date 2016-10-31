//Given the root of a binary search tree, perform a level-order traversal

function(root) {
var queue = [];
        queue.push(root);

        while(queue.length > 0){
            current = queue.shift();
            process.stdout.write(current.data+" ");
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            }
        }

}
