/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// [1, 7, 3, 3, 4]
// [5, 3, 3, 7, 2]

// [7]

var intersect = function(nums1, nums2) {
  let res = nums1;
  res = res.filter(e => {
    let index = nums2.indexOf(e);
    return index !== -1 ? nums2[index] = 100 : false;  //①
  });
  return res;
};
// @lc code=end

