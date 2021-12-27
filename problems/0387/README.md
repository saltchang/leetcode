# [387. First Unique Character in a String](https://leetcode.com/problems/first-unique-character-in-a-string/)

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

**Example 1**

```text
Input: s = "leetcode"
Output: 0
```

**Example 2**

```text
Input: s = "loveleetcode"
Output: 2
```

**Example 3**

```text
Input: s = "aabb"
Output: -1
```

**Constraints**

```text
1 <= s.length <= 105
s consists of only lowercase English letters.
```

**Related Topics**

```text
1. Hash Table
2. String
3. Queue
4. Count
```

## :memo: Note

1. Go through the string and store each charater occurrences in a hash table.
2. Go through the string again and check for the occurence of the current character. Return the index if the count of s[i] is 1.
3. Return -1 if non of characters appeared only once.
