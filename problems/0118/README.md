# [118. Pascal's Triangle](https://leetcode.com/problems/pascals-triangle)

Given an integer `numRows`, return the first numRows of **Pascal's triangle**.

In **Pascal's triangle**, each number is the sum of the two numbers directly above it as shown:

**Example 1**

![pascals_triangle](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

```text
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
```

**Example 2**

```text
Input: numRows = 1
Output: [[1]]
```

**Constraints**

```text
1 <= numRows <= 30
```

**Related Topics**

```text
1. Array
2. Dynamic Programming
```

## :memo: Note
1. Add the first two vectors of Pascal's triangle if `numRows > 2`.
2. Use `for` loop to generate each row.
3. Get values in the last row (dynamic programming), calcuate new values based on the rule, and add to the current vector.
