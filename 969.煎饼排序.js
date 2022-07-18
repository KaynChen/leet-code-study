/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
const reverseArr = (arr, index) => {
  let i = 0
  while (index > i) {
    let tmp = arr[index]
    arr[index--] = arr[i]
    arr[i++] = tmp
  }
}
var pancakeSort = function(arr) {
  let retArr = []
  // 拿到最大值的索引
  let maxIndex = arr.indexOf(Math.max(arr))
  while (arr.length > 1) {
    if (maxIndex !== arr.length - 1 ) {
      // 如果最大值不在最后一位，那么就将他翻转到第一位
      reverseArr(arr, maxIndex)
      retArr.push(maxIndex)
    } else if (maxIndex === 0) {
      // 如果在第一位，那么直接翻转最大长度
      arr.reverse()
      retArr.push(arr.length--)
    } else if (maxIndex === arr.length - 1) {
      // 如果在最后一位，那么就将该数字剔除
      arr.length--
    }
  }
  return retArr
};
// @lc code=end

