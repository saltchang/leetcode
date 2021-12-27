# [98. Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree)

Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).

A _valid BST_ is defined as follows:

- The left subtree of a node contains only nodes with keys **less than** the node's key.
- The right subtree of a node contains only nodes with keys **greater than** the node's key.
- Both the left and right subtrees must also be binary search trees.

**Example 1**

![tree_1](./img/tree1.jpeg)

```text
Input: root = [2,1,3]
Output: true
```

**Example 2**

![tree_2](./img/tree2.jpeg)

```text
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```

**Constraints**

```text
The number of nodes in the tree is in the range [1, 104].
-2<sup>31</sup> <= Node.val <= 2<sup>31</sup> - 1
```

**Related Topics**

```text
1. Tree
2. Depth-First Search
3. Binary Tree
4. Binary Search Tree
```

## :memo: Note
