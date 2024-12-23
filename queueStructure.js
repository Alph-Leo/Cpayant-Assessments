class Queue {
    constructor() {
        this.items = [];
    }
    addToTheQueue(value) {
        this.items.push(value);
    }

    removeFromTheQueue() {
        if (this.isEmptyQueue()) {
            throw new Error('Queue is empty');
        }
        return this.items.shift();
    }

    isEmptyQueue() {
        return this.items.length === 0;
    }

    peekInsideTheQueue() {
        if (this.isEmptyQueue()) {
            throw new Error('Queue is empty');
        }
        return this.items[0];
    }

}

const queue = new Queue();
queue.addToTheQueue(60);
queue.addToTheQueue(30);
queue.addToTheQueue(50);

// console.log(queue.peekInsideTheQueue());

console.log(queue.removeFromTheQueue(60));
console.log(queue.peekInsideTheQueue());
console.log(queue.isEmptyQueue());