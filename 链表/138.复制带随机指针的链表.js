/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  // 将每一个节点遍历一遍 然后复制一个对应的界面
  // 1   2   3  4
  //  ↘↗↘↗↘↗↘
  //   1   2   3  4
    if (!head) return null
    let p = head, q, newHead
    while (p) {
      q = new Node(p.val, p.next, p.random)
      p.next = q
      p = q.next
    }
    p = head.next
    // 将所有原来的random指向random的下一个节点
    while(p) {
      if(p.random) {
        p.random = p.random.next
      }
      p = p.next
      if (p) p = p.next
    }
    // 将节点指向正确的节点
    // 1 → 2 → 3 → 4
    //   1 → 2 → 3 → 4
    newHead = head.next
    p = head
    while(p) {
      q = p.next
      p.next = q.next
      if (p.next) q.next = p.next.next
      p = p.next
    }
    return newHead
};
// @lc code=end

