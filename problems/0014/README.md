# [14. Longest Common Prefix](https://leetcode.com/problems/longest-common-prefix)

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

**Example 1**

```text
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

**Example 2**

```text
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

**Constraints**

```text
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
```

**Related Topics**

```text
1. String
```

## :memo: Note

1. Set initial longest `prefix` as `strs[0]`.
2. Go through `strs` and compare `prefix` with `strs[i]`. Substring `prefix` if `prfix[j] != strs[i][j]`.
3. Break the loop if `prefix` is empty.
