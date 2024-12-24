class Stack {
    constructor() {
        this.items = []; //constructor initialized to an empty array items to store the stack's elements.
    }

    pushIntoTheStack(value) {
        this.items.push(value);
    }

    popOutOfStack() {  // pop method to remove and return the top element of the stack.
        if(this.isEmptyStack()) {
            throw new Error('Stack is empty');
        }
        return this.items.pop();
    }

    isEmptyStack() {  // isEmpty method to check if the stack has no elements.
        return this.items.length === 0;
    }

    peekIntoTheStack() {  // peek method to return the top element without removing it. Throws an error if the stack is empty.
        if(this.isEmptyStack()) {
            throw new Error('Stack can not be empty');
        }
        return this.items[this.items.length - 1]
    }
}

const stackTest = new Stack();
stackTest.pushIntoTheStack(10);
stackTest.pushIntoTheStack(20);

console.log(stackTest.peekIntoTheStack());
console.log(stackTest.popOutOfStack());
console.log(stackTest.isEmptyStack());