/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // 1.暴力破解 时间 O(n^2) 空间O(1)
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 0; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === target && i !== j) {
  //       return [i, j]
  //     }
  //   }
  // }
  
  // 2.创建一个对象进行托管 时间O(n),空间O(n)
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in obj) {
      return [obj[nums[i]], i]
    } else {
      obj[target - nums[i]] = i
    }
  }
};
// @lc code=end

