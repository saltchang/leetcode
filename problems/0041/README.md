# [41. First Missing Positive](https://leetcode.com/problems/first-missing-positive)

Given an unsorted integer array `nums`, return the smallest missing positive integer.

You must implement an algorithm that runs in `O(n)` time and uses constant extra space.

**Example 1**

```text
Input: nums = [1,2,0]
Output: 3
```

**Example 2**

```text
Input: nums = [3,4,-1,1]
Output: 2
```

**Example 3**

```text
Input: nums = [7,8,9,11,12]
Output: 1
```

**Constraints**

- `1 <= nums.length <= 5 * 105`
- `-231 <= nums[i] <= 231 - 1`

**Hint**

1. Think about how you would solve the problem in non-constant space. Can you apply that logic to the existing space?
2. We don't care about duplicates or non-positive integers
3. Remember that O(2n) = O(n)

## Topics

- Array
- Hash Table

## :memo: Note

Place all positive integers in their proper position: 1 should be the first(index == 0) and 2 should be the second(index == 1), etc.

Then find the number that not match their proper position and return its correct value (index + 1) which is the missing number.
