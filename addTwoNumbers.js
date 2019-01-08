/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var head, tail;
  var carry = 0;
  while(l1 || l2 || carry > 0){
    var v1 = l1 ? l1.val : 0;
    var v2 = l2 ? l2.val : 0;
    var sum = (v1 + v2 + carry) % 10;
    carry = (v1 + v2 + carry) > 9 ? 1 : 0;
    if(!tail){
      head = new ListNode(sum);
      tail = head;
    } else {
      tail.next = new ListNode(sum);
      tail = tail.next;
    }
    if(l1 !== null) { l1 = l1.next; }
    if(l2 !== null) { l2 = l2.next; }
  }
        
  return head;
};
