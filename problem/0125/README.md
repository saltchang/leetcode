# [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,

it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

**Example 1**

```text
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

**Example 2**

```text
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

**Example 3**

```text
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```

**Constraints**

```text
1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
```

**Related Topics**

```text
1. Two Poiters
2. String
```

## :memo: Note

![leetcode_0125](https://user-images.githubusercontent.com/86006022/143612387-57e1edfc-8f89-4ea1-a274-ca61131e15cc.gif)

1. Pointer1 starts from the begin of the string, pointer2 starts from the end.
2. If the character is non-alphanumeric, move forward to bypass it.
3. Check if pointer1 and pointer2 are next to each other or overlapped.
4. Check if `*pointer1 == *pointer2`.
