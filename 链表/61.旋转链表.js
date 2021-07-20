/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
var rotateRight = function(head, k) {
  if (!head || !head.next) return head
  let p = head
  // 定义一个i记录链表的长度
  let n = 1
  // 遍历链表 找到链表长度和尾节点
  while(p.next) {
    n++
    p = p.next
  }
  p.next = head

  k %= n
  k = n - k
  //  0 1 2 3
  while(k--) p = p.next
  head = p.next
  p.next = null
  return head
};
// @lc code=end

