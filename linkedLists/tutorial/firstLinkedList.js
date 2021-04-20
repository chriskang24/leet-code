class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  // add to be the new tail
  append(value) {
    const newNode = {
      value: value,
      next: null
    };

    // const newNode = new Node(value, next)
    // point the tail to the new node created
    this.tail.next = newNode;
    // new last item 
    this.tail = newNode;
    this.length++;
  }

  // add to be the new head
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
    }
    // const newNode = new Node(value, next )
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
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

    const newNode = new Node(value)
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
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

    return this.printList()
  }

}


const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.prepend(1);
// 1 => 10 => 5
// 1 => 99 => 10 => 5
myLinkedList.insert(1, 99);
myLinkedList.remove(3);
console.log(myLinkedList)

// getAt(index) {
//   let counter = 0;
//   let node = this.head;
//   while (node) {
//     if (counter === index) {
//       return node;
//     }
//     counter++;
//     node = node.next
//   }
//   return null;
// }

// insert(index, value) {
//   if (!this.head) {
//     this.head = new Node(value)
//     return;
//   }

//   if (index === 0) {
//     this.head = new Node(value, this.head);
//     this.length++
//     return;
//   }

//   const previous = this.getAt(index - 1) || this.getLast();
//   const node = new Node(value, previous.next)
//   previous.next = node;
//   this.length++

// }


// getLast() {
//   if (!this.head) {
//     return null;
//   }

//   let node = this.head;
//   while (node) {
//     if (!node.next) {
//       return node;
//     }
//     node = node.next;
//   }
// }
