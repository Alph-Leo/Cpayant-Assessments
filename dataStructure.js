class Stack {
    constructor() {
        this.items = [];
    }

    pushIntoTheStack(value) {
        this.items.push(value);
    }

    popOutOfStack() {
        if(this.isEmptyStack()) {
            throw new Error('Stack is empty');
        }
        return this.items.pop();
    }

    isEmptyStack() {
        return this.items.length === 0;
    }

    peekIntoTheStack() {
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