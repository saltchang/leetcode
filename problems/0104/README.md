# [104. Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree)

Given the root of a binary tree, return its maximum depth.

A binary tree's _maximum_ depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

**Example 1**

```text
Input: root = [3,9,20,null,null,15,7]
Output: 3
```

**Example 2**

```text
Input: root = [1,null,2]
Output: 2
```

**Example 3**

```text
Input: root = []
Output: 0
```

**Example 4**

```text
Input: root = [0]
Output: 1
```

**Constraints**

```text
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
```

**Related Topics**

```text
1. Tree
2. Depth-First Search
3. Breadth-First Search
4. Binary Tree
```

## :memo: Note

1. Get left depth and right depth.
2. Compare left and right depth to get the maximum, return max depth+1.
3. Recursive method.
