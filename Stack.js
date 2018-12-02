class Stack {
    constructor() {
        this.items = [];
    }

    /* Push item in the stack  */
    push(value) {
        this.items.push(value);
    }

    /* Return the top most value from stack */
    peek() {
        if (this.items) {
            return this.items[this.items.length - 1];
        }
    }

    /* Remove the top element from the stack */
    pop() {
        if (this.items) {
            this.items.pop();
        }
    }
}

let stack1 = new Stack();
stack1.push(21);
stack1.push(22);
stack1.push(23);

stack1.pop();

stack1.push(24);

console.log(stack1.peek());

console.log(stack1);
