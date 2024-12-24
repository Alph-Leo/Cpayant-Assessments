class Queue {   // Queue class with a constructor that initializes an empty array items.
    constructor() {
        this.items = [];
    }
    addToTheQueue(value) {  // enqueue method to add an element to the end of the queue.
        this.items.push(value);
    }

    removeFromTheQueue() {  // dequeue method to remove and return the first element of the queue. Throws an error if the queue is empty.
        if (this.isEmptyQueue()) {
            throw new Error('Queue is empty');
        }
        return this.items.shift();
    }

    isEmptyQueue() { // isEmpty method to check if the queue has no elements.
        return this.items.length === 0;
    }

    peekInsideTheQueue() {  // peek method to return the first element without removing it. Throws an error if the queue is empty.
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