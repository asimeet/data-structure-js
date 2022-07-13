class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(element) {
    console.log("Adding element", element);
    const newNode = new Node(element);

    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = this.tail = newNode;
    }

    this.length++;

    this.show();
  }

  print() {
    let currentNode = this.head;
    while (currentNode && currentNode.next) {
      console.log(currentNode.element);
      currentNode = currentNode.next;
    }
  }

  show() {
    console.log(
      "Length:",
      this.length,
      "Head:",
      JSON.stringify(this.head, null, 2)
    );
  }

  remove() {
    console.log("Removing element at tail");

    this.length--;
    if (this.head == this.tail) {
      this.head = this.tail = null;
      this.length = 0;
    }

    let currentNode = this.head;
    while (currentNode && currentNode.next) {
      if (currentNode.next == this.tail) {
        this.tail = currentNode;
        this.tail.next = null;
      }
      currentNode = currentNode.next;
    }

    this.show();
  }

  find(element) {
    let foundAtLevel;

    let counter = 1;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.element == element) {
        foundAtLevel = counter;
        break;
      }
      currentNode = currentNode.next ? currentNode.next : {};
      counter++;
    }

    console.log(
      `${foundAtLevel ? "found at level: " + foundAtLevel : "not found"}`
    );
  }
}

const ll = new LinkedList();

ll.add(1);
ll.add(2);
ll.add(3);
ll.remove();
ll.remove();
ll.remove();
ll.remove();
ll.add(4);
ll.add(5);
ll.add(6);
ll.add(1);
ll.add(2);
ll.add(3);
ll.remove();
ll.find(5);
