/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  // 定义两个指针，遍历两个链表，将对应的值放在对应的指针后面
  let h1 = new ListNode(0, null)
  let h2 = new ListNode(0, null)
  let p1 = h1
  let p2 = h2
  let p = head
  let q
  while(p) {
    q = p.next
    p.next = null
    if (p.val < x) {
      p1.next = p
      p1 = p1.next
    } else {
      p2.next = p
      p2 = p2.next
    }
    p = q
  }
  p1.next = h2.next
  return h1.next
};
// @lc code=end

