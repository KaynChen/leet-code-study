/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 */

// @lc code=start
/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.queue = new Array(k+1) // k长度的数组
  this.front = 0 // 头指针
  this.rear = 0 // 尾指针
  this.max = k // 记录当前最大容量
};

/** 
 * @param {number} value
 * @return {boolean}
 */
// 区域函数
MyCircularQueue.prototype.quyu = function(value) {
  return (value + 1) % (this.max + 1)
}

MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) return false
  this.queue[this.rear] = value
  this.rear = this.quyu(this.rear)
  return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) return false
  this.front = this.quyu(this.front)
  return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) return -1
  return this.queue[this.front]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) return -1
  return this.queue[(this.rear + this.max) % (this.max + 1)]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return ((this.rear - this.front + this.max + 1) % (this.max + 1)) === 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return ((this.rear - this.front + this.max + 1) % (this.max + 1)) === this.max
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end

