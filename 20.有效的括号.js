/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let myStack = []
  let obj = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] in obj) {
      myStack.push(s[i])
    } else {
      if(s[i] !== obj[myStack.pop()]) {
        return false
      }
    }
  }
  return !myStack.length
};
// @lc code=end

