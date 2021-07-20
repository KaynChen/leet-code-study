/*
 * @lc app=leetcode.cn id=933 lang=javascript
 *
 * [933] 最近的请求次数
 */

// @lc code=start

var RecentCounter = function() {
  this.pingArray = []
};

/** 
 * @param {number} t
 * @return {number}
 */

/**
 * @param {*} t 
 * 
 * 截图思路：这是一个很典型的用队列来解决的问题，首先我先创建一个队列
 * 队列为只有push和shift方法的数组
 * 然后将数字一个个按顺序放入队列中
 * 当队列末尾的元素(3002)减去队列第一个元素(1)大于3000时
 * 将队列的第一个元素弹出
 * [t-3000, 3000]
 */
RecentCounter.prototype.ping = function(t) {
  this.pingArray.push(t)
  // 这个地方不能用if 必须得用while
  // 因为当你push一个t进去的时候，不一定只有一个数不满足要求。
  // 所以得循环判断从索引0开始的所有的数是否满足要求
  while (this.pingArray[0] < t - 3000) {
    this.pingArray.shift()
  }
  return this.pingArray.length
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

