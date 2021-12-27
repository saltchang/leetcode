# [206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list)

Given the `head` of a singly linked list, reverse the list, and return the _reversed_ list.

**Example 1**

```text
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

**Example 2**

```text
Input: head = [1,2]
Output: [2,1]
```

**Example 3**

```text
Input: head = []
Output: []
```

**Constraints**

- The number of nodes in the list is the range `[0, 5000]`.
- `-5000 <= Node.val <= 5000`

## :memo: Note

There are 3 key variables we use to reverse a linked list:

1. `head` (global)
2. `tail` (global)
3. `next` (local)

`head` points to the given linked list that we want to reverse.

`tail` points to the reversed linked list, and this will be the answer.

`next` is used as a buffer to break the head of linked list and store the next node of it.

The steps are:

1. Use `next` to break the head of the linked list.
2. Point the `tail` to the head of `tail`
3. Re-point the `head` to `next`, which means re-defined the head of the linked list.
4. Iterate it until `head` is point to null (all list node has been visited)
