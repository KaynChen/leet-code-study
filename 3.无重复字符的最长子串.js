/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// abccbahsc
// abba
var lengthOfLongestSubstring = function(s) {
  let myMap = new Map()
  let left = 0, len = 0
  for(let right = 0; right < s.length; right++) { 
    if (myMap.has(s[right]) && myMap.get(s[right]) >= left) {
      left = myMap.get(s[right]) + 1
    }
    len = Math.max(len, right - left + 1)
    myMap.set(s[right], right)
  }
  return len
};
// @lc code=end

