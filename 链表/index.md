# 链表基础知识 #

## 1.链表是什么 ##
https://www.processon.com/diagraming/610ce724f346fb06df0985a5


1. 链表中的每个节点至少包含两个部分：数据域与指针域
2. 链表中的每个节点，通过指针域的值，形成一个线性结构
3. 不适合快速的定位数据，适合动态的插入和删除数据的应用场景

```
  function ListNode (value, next = null) {

    this.value = value
    this.next = next

  }

  let head = new ListNode(0)
  head.next = new ListNode(1)
  head.next.next = new ListNode(2)
```
