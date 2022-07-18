/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

// abcd cbad
// a c
// ca ca
var buddyStrings = function(A, B) {
  // 长度不等的话就直接返回false
  if (A.length !== B.length) return false
  // 如果字符串相等并且有重复的字符的时候，我们交换重复的字符的位置，也是符合提议的
  if (A === B) {
    return A.length > new Set(A).size
  }

  // 将不相等的字符取出按照不同的相加方式得到最终的字符串
  let a = ''
  let b = ''
  for(let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      a = A[i] + a
      b += B[i]
    }
  }
  return a.length === 2 && a === b
};
// @lc code=end

