/**
 * Priority queue
 *
 */

class PriorityQueue {
  constructor() {
    this.collection = [];
    this.showQueue = () => console.log("current-queue", this.collection);
  }

  enqueue(item) {
    let indexOfNextItem = 0;

    for (let i = 0; i < this.collection.length; i++) {
      const currentItem = this.collection[i];
      const nextItem = this.collection[indexOfNextItem];
      if (currentItem[1] >= item[1] && currentItem[1] <= nextItem[1]) {
        indexOfNextItem = i + 1;
      }
    }

    console.log("item:", item, "indexOfNextItem:", indexOfNextItem,);
    this.collection.splice(indexOfNextItem, 0, item);
    this.showQueue();
  }

  dequeue() {
    const dequeued = this.collection.shift();
    console.log("dequeued", dequeued);
    this.showQueue();
  }
}

const pq = new PriorityQueue();
const enQ = pq.enqueue.bind(pq)
const deQ = pq.dequeue.bind(pq)
enQ(["car", 0]);
enQ(["bike", 0]);
enQ(["cycle", 0]);
enQ(["police", 1]);
enQ(["scooter", 0]);
enQ(["ambulance", 5]);
enQ(["army", 2]);
enQ(["cbi", 1]);
enQ(["scooty", 0]);
deQ();
