class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  // add to be the new tail
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    };

    newNode.prev = this.tail;
    // const newNode = new Node(value, next)
    // point the tail to the new node created
    this.tail.next = newNode;
    // new last item 
    this.tail = newNode;
    this.length++;
    return this;
  }

  // add to be the new head
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null
    }
    // const newNode = new Node(value, next )
    newNode.next = this.head;
    // new node is the new head
    this.head.prev = newNode
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    // if value is 0, make value the new head
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    // if index >= total length, make value the tail
    if (index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null,
      prev: null
    }

    // LEADER = newNode before inserted value 
    const leader = this.traverseToIndex(index - 1);
    // follower = node after inserted value 
    const follower = leader.next;
    leader.next = newNode;
    // make sure the previous node of the new inserted node is the leader
    newNode.prev = leader;
    newNode.next = follower;
    // previous of follower is set to the new node
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }

  // this function is similar to getAt()
  traverseToIndex(index) {
    let counter = 0;
    let node = this.head;
    while (counter !== index) {
      node = node.next;
      counter++;
    }
    return node;
  }

  remove(index) {

    if (index === 0) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    const leader = this.traverseToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

}


const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16);
myLinkedList.prepend(1);
// 1 => 10 => 5
// 1 => 99 => 10 => 5
myLinkedList.insert(1, 99);
myLinkedList.remove(3);
console.log(myLinkedList.printList());
console.log(myLinkedList)
