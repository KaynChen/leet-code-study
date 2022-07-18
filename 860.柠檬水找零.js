/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let five = 0, ten = 0
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      five++
    }
    if (bills[i] === 10) {
      if (five > 0) {
        five--
        ten++
      } else {
        return false
      }
    }
    if (bills[i] === 20) {
      if (five >= 3) {
        five -= 3
      } else if (five > 0 && ten > 0) {
        five --
        ten--
      } else {
        return false
      }
    }
  }
  return true
};
// @lc code=end

