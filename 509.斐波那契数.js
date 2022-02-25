/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // 递归实现
  // function fibImpl(a, b, n) {
  //   if (n === 0) {
  //     return a
  //   }
  //   return fibImpl(b, a + b, n - 1)
  // }
  // return fibImpl(0, 1, n)

  // 增加一个数组实现
  let arr = []
  for (let i = 0; i <= n; i++) {
    if (i < 2) {
      arr[i] = i
    } else {
      arr[i] = arr[i - 1] + arr[i - 2]
    }
  }
  return arr[n]
};
// @lc code=end

