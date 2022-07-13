/**
 *  Stack
 *  Array has attributes of stack already i.e. pop and push
 *  Doing the same in js class
 */

class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
    this.print();
  }

  pop() {
    // const firstItem = this.storage[this.count];
    // delete this.storage[this.count]
    // this.count --;
    // this.print()
    // console.log('popped', firstItem);

    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    const firstItem = this.storage[this.count];
    delete this.storage[this.count];
    this.print()
    console.log("popped", firstItem);
  }

  print() {
    const { log } = console;
    log(this.storage);
  }
}

const stack = new Stack();

stack.push("one");

stack.pop();

stack.push("two");

stack.push("three");

stack.pop();

stack.pop();
