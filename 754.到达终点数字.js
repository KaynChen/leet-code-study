/*
 * @lc app=leetcode.cn id=754 lang=javascript
 *
 * [754] 到达终点数字
 */

// @lc code=start
/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
  target = Math.abs(target)
  let step = 0
  let dis = 0

  while(dis < target || (dis - target & 1)) dis+= ++step
  return step
};
// @lc code=end

