/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  // 暴力存值 遍历一个节点就存set里面一个，需要开辟一个新的存储空间

  // 通过快慢指针
  if(!head || !head.next) return false
  let p = head, q = head.next
  while(q !== p && q && q.next) {
    p = p.next
    q = q.next.next
  }
  return p === q
};
// @lc code=end

