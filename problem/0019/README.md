# [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list)

Given the `head` of a linked list, remove the n<sup>th</sup> node from the end of the list and return its head.

**Example 1**

![remove_ex1](https://user-images.githubusercontent.com/86006022/143690900-c0f82f91-bd8b-480c-8054-cb29d97337ea.jpeg)

```text
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

**Example 2**

```text
Input: head = [1], n = 1
Output: []
```
**Example 3**

```text
Input: head = [1,2], n = 1
Output: [1]
```


**Constraints**

```text
The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
```

**Related Topics**

```text
1. Linked List
2. Two Pointers
```

## :memo: Note
1. Go through the linked list to get the length of it.
2. Corner case: the target is `head` -> return `head->next`
3. Get the `length-n-1`<sup>th</sup> node and set the next next node of it as its next.

