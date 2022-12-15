/*
 * @lc app=leetcode.cn id=1945 lang=javascript
 *
 * [1945] 字符串转化后的各位数字之和
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
  let sb = ''
  for (let i = 0; i < s.length;++i) {
    const ch = s[i]
    sb += '' + ch.charCodeAt() - 'a'.charCodeAt() + 1
  }
  let digits = sb.toString()
  for (let i = 1; i <= k && digits.length > 1;++i) {
    let sum = 0
    for (let j = 0; j < digits.length;++j) {
      const ch = digits[j];
      sum += ch.charCodeAt() - '0'.charCodeAt()
    }
    digits = '' + sum;
  }
  return 0 + digits
};
// @lc code=end

