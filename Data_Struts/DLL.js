class Node {
    constructor(val)
    {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let temp = new Node(val);
        if(this.length === 0)
        {
            this.head = temp;
            this.tail = temp;
            this.length++;
            return this;
        }
        else{
            this.tail.next = temp;
            temp.prev = this.tail;
            this.tail = temp;
            this.length++;
            return this;
        }
    }

    pop(){
        if(this.length === 0) return undefined;
        let current = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length--;
            return current;
        }
        
        this.tail = current.prev;
        this.tail.next = null;
        this.length--;
        return current;
    }

    shift(){
        if(this.length === 0) return undefined;
        let current = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
            this.length--;
            return current;
        }

        this.head = current.next;
        this.head.prev = null;
        current.next = null;
        this.length--;
        return current;
    }

    unshift(val){
        let current = new Node(val);
        if(this.length === 0){
            this.head = current;
            this.tail = current;
            this.length++;
            return this;
        }
        else{
            this.head.prev = current;
            current.next = this.head;
            this.head = current;
            this.length++;
            return this;
        }
    }

    get(index)
    {
        if(index < 0 || index >= this.length) return null;
        if(index <= (this.length / 2))
        {
            let count = 0;
            let current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }

            return current;
        }
        else{
            let count = this.length - 1;
            let current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }

            return current;
        }
    }
    set(index, newVal){
        let temp = this.get(index);
        if(temp === null) return false;
        temp.val = newVal;
        return true;
    }
    insert(index, nodeVal){
        if(index < 0 || index > this.length) return false;
  
        if(index === 0){
            this.unshift(nodeVal);
            return true;
        }

        if(index === this.length){
            this.push(nodeVal);
            return true;
        }

        let holderNode = this.get(index - 1);
        let temp = new Node(nodeVal);

        temp.next = holderNode.next;
        holderNode.next = temp;
        temp.prev = holderNode;
        this.length++;
        return true;

    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
        
    }
}