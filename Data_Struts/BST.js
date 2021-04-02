class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val){
        let temp = new Node(val);
        if(this.root === null){
            this.root = temp;
            return this;
        }
        else{
            let current = this.root;
            while(true) {
                if(val === current.value) return undefined;
                if(val < current.value){
                    if(current.left === null){
                        current.left = temp;
                        return this;
                    }
                    else{
                        current = current.left;
                    }
                }

                else{
                    if(val > current.value) {
                        if(current.right === null) {
                            current.right = temp;
                            return this;
                        }

                        else{
                            current = current.right;
                        }
                    }
                }
            }
        }

    }
    find(value){
        if(this.root === null) return false;
        let current = this.root;
        while(current !== null)
        {
            if(value === current.value) return true;
            else if(value < current.value) current = current.left;
            else current = current.right;
        }
        return false;
    }
    BFS(){
        let data = [],
            queue = [],
            node = this.root;
        queue.push(this.root);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder(){
        let data = [];
        let current = this.root;
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right)
        }

        traverse(current);
        return data;
    }
}

