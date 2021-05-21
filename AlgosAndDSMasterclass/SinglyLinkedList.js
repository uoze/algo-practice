/*
Linked Lists are good for insertions and deletions as there is no re-indexing done;
as opposed to arrays, where insertions and deletions are expensive, especially if done at the beginning
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    //tail is already given, so just change the current tail node's 'next' to the new node, then move the tail title to the new node
    //if head doesn't exist, change both head and tail to new node
    //increment length
    let curNode = this.head;
    const newNode = new Node(value);

    if (!curNode) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    const popped = this.tail;
    if (!this.head) return undefined;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      let curNode = this.head;
      while (curNode !== this.tail) {
        if (curNode.next === this.tail) {
          this.tail = curNode;
          curNode.next = null;
        } else {
          curNode = curNode.next;
        }
      }
    }
    this.length--;
    return popped;
  }

  shift() {
    //if head === tail, set both to null
    //else set current head to a temp value, move the head title to the next, then change the temp value's next to null
    //decrement length
    const shifted = this.head;
    if (!this.head) return undefined;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      shifted.next = null;
    }
    this.length--;
    return shifted;
  }

  unshift(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //retrieves a node by position (like index, input 0 gives the 1st node)
  get(num) {
    if (num < 0 || num >= this.length) return null;
    let curNode = this.head;
    for (let i = 0; i < num; i++) {
      curNode = curNode.next;
    }
    return curNode;
  }

  //changes the value of a node at a given position
  //edge case of null
  set(num, value) {
    const node = this.get(num);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  //adds a new node at position specified
  insert(num, value) {
    //get num-1, if null just add it to head/tail?
    if (num === 0) {
      this.unshift(value);
      return true;
    }
    if (num === this.length) {
      this.push(value);
      return true;
    }
    if (num < 0 || num > this.length) return undefined;

    const prevNode = this.get(num - 1);
    const curNode = this.get(num);
    const newNode = new Node(value);

    prevNode.next = newNode;
    newNode.next = curNode;
    this.length++;

    return true;
  }

  //remove a node from a spot
  remove(num) {
    //get prevnode and nextnode
    if (num === 0) {
      return !!this.shift();
    }
    //this.length - 1 here because unlike insert(), can't remove the empty space after tail index
    if (num === this.length - 1) {
      return !!this.pop();
    }
    if (num < 0 || num >= this.length) return undefined;

    const prevNode = this.get(num - 1);
    const curNode = this.get(num);
    const nextNode = this.get(num + 1);

    prevNode.next = nextNode;
    curNode.next = null;

    this.length--;

    return true;
  }

  //reverse an array in-place
  reverse() {
    let curNode = this.head;
    // let nextNode = curNode.next;
    let prevNode = null;

    while (curNode !== null) {
      //nextnode has to be in here for it to constantly update
      let nextNode = curNode.next;

      curNode.next = prevNode;
      prevNode = curNode;
      curNode = nextNode;
    }

    const temp = this.head;
    this.head = this.tail;
    this.tail = temp;
  }
}

let list = new SinglyLinkedList();
list.unshift(5);
list.unshift(6);
list.unshift(7);
list.unshift(8);
list.unshift(9);
list.unshift(10);
console.log(list);

list.reverse();
console.log(list);
