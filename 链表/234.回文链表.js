/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
//   x y z
// 1 2 3 2 1
var isPalindrome = function(head) {
  if (!head || !head.next) return false
  let p = head
  while(p.next) {}
};
// @lc code=end

