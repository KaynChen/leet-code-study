# 链表基础知识 #

## 1.链表是什么 ##

https://www.processon.com/diagraming/610ce724f346fb06df0985a5

1. 链表中的每个节点至少包含两个部分：数据域与指针域
2. 链表中的每个节点，通过指针域的值，形成一个线性结构
3. 不适合快速的定位数据，适合动态的插入和删除数据的应用场景

## 2.链表如何实现 ##

单节点的树

```js
  function ListNode (value, next = null) {

    this.value = value
    this.next = next

  }

  let head = new ListNode(0)
  head.next = new ListNode(1)
  head.next.next = new ListNode(2)
```

## 3. 链表的应用场景 ##

1. 操作系统内的动态内存分配
https://www.processon.com/diagraming/610d5d6f1e08536191cbc559
2. react hooks链表使用
https://segmentfault.com/a/1190000039076330
3. 原型链

## 4. 链表和数组，结构性能对比 ##

数组是内存连续的存储空间，支持数据的随机访问，你想查看第几个能立马的就能算出对应的位置存储的值，不利于动态扩容，查找方便。
链表是非连续的数据结构，如果要进行扩容是比较容易的，查找不方便，只能一个接一个去进行访问。

## 5. leetcode ##

141.环形链表

142.环形链表2

206.反转链表

92.反转链表2

25.K个一组翻转链表

82.删除排序链表中的重复元素

138.复制带随机指针的链表
