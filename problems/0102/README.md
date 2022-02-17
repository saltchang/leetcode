# [102. Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal)

Given the `root` of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

**Example 1**

```text
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
```

**Example 2**

```text
Input: root = [1]
Output: [[1]]
```

**Example 3**

```text
Input: root = []
Output: []
```

**Constraints**

```text
The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000
```

**Related Topics**

```text
1. Tree
2. Breadth-First Search
3. Binary Tree
```

## :memo: Note
1. Use a `queue` to store nodes of the tree
2. Get the size of the `queue` and run a while loop to push values to a `vector`, add children of `front`, and pop `front`
3. Push the `vector` to the final vector result
