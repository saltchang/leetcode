# [1. Two Sum](https://leetcode.com/problems/two-sum)

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

**Example 1**

```text
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2**

```text
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3**

```text
Input: nums = [3,3], target = 6
Output: [0,1]
```

**Constraints**

1. `2 <= nums.length <= 104`
2. `-109 <= nums[i] <= 109`
3. `-109 <= target <= 109`
4. **Only one valid answer exists.**

**Follow-up**: Can you come up with an algorithm that is less than O(n2) time complexity?

## :memo: Note

Create a Hash table to memory if every number in the array has a pair number be found. (number + pair number = target)

If pair number has been found, retun their index as the answer.
