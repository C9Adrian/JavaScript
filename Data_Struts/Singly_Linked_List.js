class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglelyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val){
        let temp = new Node(val);
        if(this.length === 0)
        {
            this.head = temp;
            this.tail = temp;
            this.length++;
        }
        else
        {
            this.tail.next = temp;
            this.tail = temp;
            this.length++;
        }
        return this;
    }

    pop(){
        if(this.length === 0)
        {
            return undefined;
        }

        let current = this.head;
        let newTail = current;
        while(current.next)
        {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0)
        {
            this.head =null;
            this.tail =null;
        }

        return current;
    }

    shift()
    {
        if(this.length === 0){
            return undefined;
        }
        let current = this.head;
        this.head = this.head.next;
        current.next = null;
        this.length--;
        if(this.length === 0)
        {
            this.tail = null;
        }
        return current;
    }
    unshift(val){
        let temp = new Node(val);
        if(this.length === 0)
        {
            this.head = temp;
            this.tail = temp;
            this.length++;
            return this;
        }

        else{
            temp.next = this.head;
            this.head = temp;
            this.length++;
            return this;
        }
    }
    get(index){
        if(index >= this.length || index < 0)
        {
            return null;
        }

        let current = this.head;
        for(let i = 0; i < index; i++)
        {
            current = current.next;
        }

        return current;
    }
    set(index, newVal)
    {
        let temp = this.get(index);
        if(temp === null) return false;

        temp.val = newVal;
        return true;
    }

    insert(index, newVal)
    {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) 
        {
            this.push(newVal);
            return true;
        }
        if(index === 0)
        {
            this.unshift(newVal);
            return true;
        }

        let temp = this.get(index - 1);
        let newNode = new Node(newVal);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true; 

    }
    
    remove(index) 
    {
        if(index < 0) return undefined;
        else if(index === this.length - 1)
        {
            return this.pop();
        }
        else if(index === 0){
            return this.shift();
        }
        else{
            let temp = this.get(index - 1);
            let removed = temp.next;
            temp.next = removed.next;
            this.length--;
            return removed;
        }
    }
}