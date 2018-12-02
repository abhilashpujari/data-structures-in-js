class Queue {
    constructor() {
        this.items = [];
    }

    add(value) {
        this.items.push(value);
    }

    remove() {
        if (this.items) {
            this.items.splice(0, 1);
        }
    }

    size() {
        return this.items.length;
    }
}

let queue1 = new Queue();
queue1.add(1);
queue1.add(2);
queue1.add(3);

queue1.remove();
console.log(queue1);
console.log(queue1.size());