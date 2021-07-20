/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  function reverseN(head, n) {
    if (n === 1) return head;
    let tail = head.next;
    let p = reverseN(head.next, n - 1);
    head.next = tail.next;
    tail.next = head;
    return p;
  }

  function reverseK(head, k) {
    let p = head;
    // 定义一个cnt用于保存K
    let cnt = k
    // 用于判断长度是否满足K，即整个循环是否走到了最后
    // 如果走到了最后 那么就不进行翻转 
    // 此时外面的p.next = q
    while (--k && p) p = p.next;
    if (p === null) return head;


    return reverseN(head, cnt);
  }

  // p    q
  // null 0 1 2 3 4
  // p      q
  // null 1 0 2 3 4

  // 定义一个空的哨兵节点
  let ret = new ListNode(9527, head);
  let pNode = ret;
  let qNode = ret.next;
  //            p q
  // null 1 0 3 2 4
  while ((pNode.next = reverseK(qNode, k)) !== qNode) {
    //         pq
    // null 1  0  2 3 4
    pNode = qNode;
    //         p  q
    // null 1  0  2 3 4
    qNode = qNode.next;
  }
  return ret.next
};
// @lc code=end
