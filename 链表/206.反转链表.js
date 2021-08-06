/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head || !head.next) return head

  // let pre = null, cur = head
  // while (cur) {
  //   const next = cur.next
  //   cur.next = pre
  //   pre = cur
  //   cur = next
  // }
  // return pre

  // 递归具有记忆性
  // 5指向4 4指向5后面的null
  // 4指向3 3指向4后面的null
  let tail = head.next
  let p = reverseList(head.next)
  head.next = tail.next
  tail.next = head
  return p
};
// @lc code=end

