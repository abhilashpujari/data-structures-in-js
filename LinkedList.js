class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /*  Returns the size of a linked list */
    sizeOf() {
        return this.size;
    }

    /* Adds the element at the end of the linklist */
    add(value) {
        let newNode = new Node(value);
        let currentNode = this.head;

        if (currentNode === null) {
            this.head = newNode;
        } else {
            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = newNode;
        }

        this.size++;
    }

    /* Removes the element from the linked list */
    remove(value) {
        let currentNode = this.head;

        if (currentNode !== null) {
            if (currentNode.data == value) {
                this.head = currentNode.next;
                this.size--;
            } else {
                let previousNode;

                while (currentNode && currentNode.data !== value) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }

                if (currentNode && previousNode) {
                    previousNode.next = currentNode.next;
                    this.size--;
                } else {
                    return `Given ${value} value not found !!!`;
                }
            }
        }
    }

    traverse() {
        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

    /* Returns the index of the element */
    indexOf(value) {
        let currentNode = this.head;
        let valueIndex = 0;

        if (currentNode !== null) {
            if (currentNode.data == value) {
                return `Index of ${value} is ${valueIndex}`;
            } else {
                while (currentNode && currentNode.data !== value) {
                    valueIndex++;
                    currentNode = currentNode.next;
                }

                if (currentNode) {
                    return `Index of ${value} is ${valueIndex}`;
                } else {
                    return `Given ${value} value not found !!!`;
                }
            }
        }
    }
}

const list1 = new LinkedList();

list1.add(22);
list1.add(23);
list1.add(24);
list1.add(25);
list1.remove(23)

console.log(list1.traverse());
console.log(list1.indexOf(23));
console.log(list1);
