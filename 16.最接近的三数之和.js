/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

[1, 3, 4, 7, 9]

var threeSumClosest = function(nums, target) {
  // 先将数组排序
  nums = nums.sort()
  
  let min = Infinity

  const len = nums.length

  for (let i = 0; i < len; i++) {
    let left = i + 1
    let right = len - 1
    while(left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      min = Math.min(Math.abs(sum - target), Math.abs(min - target))
      if (sum < target) {
        left++
      } else if (sum > target) {
        right--
      } else {
        return sum
      }
    }
  }
  return sum
};
// @lc code=end

