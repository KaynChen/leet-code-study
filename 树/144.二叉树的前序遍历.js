/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var preorderTraversal = function(root, arr = []) {
//   if (root) {
//     // 先处理自己 再处理左右
//     arr.push(root.val)
//     preorderTraversal(root.left, arr)
//     preorderTraversal(root.right, arr)
//   }
//   return arr
// };
var preorderTraversal = function(root) {
  let res = []
  let stack = []
  let cur = root
  while(cur || stack.length) {
    while(cur) {
      res.push(cur)
    }
  }
};
// @lc code=end

