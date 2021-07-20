/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {

  // 第一次进来的时候传进来的是 2 节点
  // n  head   tail   p
  // 3  2      3      4 -> 3 -> 2    
  // 2  3      4      4 -> 3
  // 1  4             
  // 当n === 1 的时候直接返回 4 赋值 给 n===2时的 p
  // 然后将3(head)节点的下一个节点设置为4(tail)的下一个节点5(tail.next)，即将3(head)和5对接上
  // 然后将4(tail)节点的下一个节点设置为3(head)节点，完成一次翻转(递归), 并且返回4(p)节点
  // 然后将2(head)节点的下一个节点设置为3(tail)节点的下一个节点，即 将2(head)和5对接上
  // 然后将3(tail)节点的下一个节点设置为2(head)节点, 完成一次翻转(递归), 并且返回4(p)节点

  function reverseN (head, n) {
    if (n === 1) return head
    let tail = head.next
    let p = reverseN(head.next, n - 1)
    head.next = tail.next
    tail.next = head
    return p
  }

  const ret = new ListNode(0, head)
  let p = ret
  let cnt = right - left + 1
  while (--left) p = p.next
  // 按照题目的例子 此时的p指向的是 1 这个节点
  // 然后把 2 这个节点作为起始节点传入到 reverseN 函数中
  // 翻转次数为 cnt 次
  // 将翻转后的结果 4 给赋值给 1 节点的下一个节点
  p.next = reverseN(p.next, cnt)
  // 然后再会返回自己定义的初始节点的下一个节点 即 1 节点
  return ret.next
};
// @lc code=end

