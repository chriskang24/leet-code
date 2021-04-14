/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//  Given the head of a singly linked list, reverse the list, and return the reversed list.

const reverseList = function(head) {

    let [prev, current] = [null, head]

    while (current) {
      // array destructuring changes the pointers simulataneously
      [current.next, prev, current] = [prev, current, current.next]
    }

    return prev;
};

// const reverseList = function(head) {

//   let prev = null;
//   let next = null;
//   let current = head;

//   while (current) {
//     next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
//   }

//   return prev;
// }

