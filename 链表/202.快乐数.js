/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

  getNext = x => {
    let value = 0
    // 可能为三位数 所以循环做加法
    while(x) {
      value += (x%10) * (x%10)
      x = Math.floor(x/10)
    }
    return value
  }

  let p = n, q = getNext(n)
  while (q !== p && q !== 1) {
    p = getNext(p)
    q = getNext(getNext(q))
  }
  return q == 1
};
// @lc code=end

