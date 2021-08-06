/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
  /**
   * 1 -> 2 -> 3 -> 5 -> 6
   *           ↑         ↓
   *           9 <- 8 <- 7
   * 
   * 当慢指针走到起始位置3的时候，快指针走到了6
   * 然后快慢指针相遇位置为8
   * 然后从起始位置再起一个指针和8开始同时走，相遇则为环的起始位置
   */
  if (!head || !head.next) return null
  let p = q = head
  while(q && q.next) {
    p = p.next
    q = q.next.next
    if (p === q) {
      q = head
      while(q !== p) {
        q = q.next
        p = p.next
      }
      return p
    }
  }
  return null
};
// @lc code=end

