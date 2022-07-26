# [LeetCode](https://leetcode.com/problemset/all)

![TypeScript](https://img.shields.io/badge/language-TypeScript-3178c6)&nbsp;
![Go](https://img.shields.io/badge/language-Go-007d9c)&nbsp;
![C++](https://img.shields.io/badge/language-C++-004283)&nbsp;
![Progress](https://img.shields.io/badge/progess-17%20%2F%202082-sucess)&nbsp;
[![License](https://img.shields.io/badge/license-MIT-a31f34)](./LICENSE)

## Problems

**[:star: Starred Problems](https://leetcode.com/list/xoqag3yj) are highly recommended.**

|   #    | Title                                                     | Solutions                      | Difficulty |        Note         | Starred |
|:------:|-----------------------------------------------------------|--------------------------------|:----------:|:-------------------:|:-------:|
| [0001] | Two Sum                                                   | [TS][0001_ts], [Go][0001_go]   |   [Easy]   | [:memo:][0001_note] | :star:  |
| [0003] | Longest Substring Without Repeating Characters            | [TS][0003_ts]                  |  [Medium]  | [:memo:][0003_note] | :star:  |
| [0014] | Longest Common Prefix                                     | [C++][0014_cpp]                |   [Easy]   | [:memo:][0014_note] |         |
| [0019] | Remove Nth Node From End of List                          | [C++][0019_cpp]                |  [Medium]  | [:memo:][0019_note] | :star:  |
| [0038] | Count and Say                                             | [C++][0038_cpp]                |  [Medium]  | [:memo:][0038_note] |         |
| [0041] | First Missing Positive                                    | [TS][0041_ts]                  |   [Hard]   | [:memo:][0041_note] |         |
| [0070] | Climbing Stairs                                           | [Go][0070_go]                  |   [Easy]   | [:memo:][0070_note] | :star:  |
| [0098] | Validate Binary Search Tree                               | [TS][0098_ts], [C++][0098_cpp] |  [Medium]  | [:memo:][0098_note] | :star:  |
| [0102] | Binary Tree Level Order Traversal                         | [C++][0102_cpp]                |  [Medium]  | [:memo:][0102_note] | :star:  |
| [0104] | Maximum Depth of Binary Tree                              | [TS][0104_ts], [C++][0104_cpp] |   [Easy]   | [:memo:][0104_note] | :star:  |
| [0105] | Construct Binary Tree from Preorder and Inorder Traversal | [TS][0105_ts]                  |  [Medium]  | [:memo:][0105_note] | :star:  |
| [0118] | Pascal's Triangle                                         | [C++][0118_cpp]                |   [Easy]   | [:memo:][0118_note] |         |
| [0125] | Valid Palindrome                                          | [C++][0125_cpp]                |   [Easy]   | [:memo:][0125_note] | :star:  |
| [0147] | Insertion Sort List                                       | [C++][0147_cpp]                |  [Medium]  | [:memo:][0147_note] |         |
| [0206] | Reverse Linked List                                       | [Go][0206_go]                  |   [Easy]   | [:memo:][0206_note] | :star:  |
| [0387] | First Unique Character in a String                        | [C++][0387_cpp]                |   [Easy]   | [:memo:][0387_note] |         |
| [1768] | Merge Strings Alternately.                                | [C++][1768_cpp]                |   [Easy]   | [:memo:][1768_note] |         |

[**:point_up: Back to Problems**](#problems)

## Run Test

### TypeScript

First, install the packages:

```bash
yarn
```

Test all problems:

```bash
yarn test --verbose false
```

Test a single problem:

```bash
yarn test --verbose false problems/0001
```

See [Jest CLI Options](https://jestjs.io/docs/cli#--verbose) for more information.

### Go

Test all problems:

```bash
go test ./problems/**/go -v
```

Test a single problem:

```bash
go test ./problems/0001/go -v
```

## Contributors

<a href="https://github.com/ccHSU13">
    <img
      src="https://avatars.githubusercontent.com/u/86006022"
      alt="ccHSU13"
      width="75px"
      style="border-radius:50%;"
    >
</a>
<a href="https://github.com/saltchang">
    <img
      src="https://avatars.githubusercontent.com/u/44324205"
      alt="saltchang"
      width="75px"
      style="border-radius:50%;"
    >
</a>

<!-- Cheat Sheet -->

[github emoji cheat sheet]: https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md

<!-- 0001 -->

[0001]: https://leetcode.com/problems/two-sum
[0001_note]: ./problems/0001/README.md#:memo:-note
[0001_ts]: ./problems/0001/ts/two_sum.ts
[0001_go]: ./problems/0001/go/two_sum.go

<!-- 0003 -->

[0003]: https://leetcode.com/problems/longest-substring-without-repeating-characters
[0003_note]: ./problems/0003/README.md#:memo:-note
[0003_ts]: ./problems/0003/ts/longest_substring_without_repeating_characters.ts

<!-- 0014 -->

[0014]: https://leetcode.com/problems/longest-common-prefix
[0014_note]: ./problems/0014/README.md#:memo:-note
[0014_cpp]: ./problems/0014/cpp/longest_common_prefix.cpp

<!-- 0019 -->

[0019]: https://leetcode.com/problems/remove-nth-node-from-end-of-list
[0019_note]: ./problems/0019/README.md#:memo:-note
[0019_cpp]: ./problems/0019/cpp/remove_nth_node_from_end_of_list.cpp

<!-- 0038 -->

[0038]: https://leetcode.com/problems/count-and-say
[0038_note]: ./problems/0038/README.md#:memo:-note
[0038_cpp]: ./problems/0038/cpp/count_and_say.cpp

<!-- 0041 -->

[0041]: https://leetcode.com/problems/first-missing-positive
[0041_note]: ./problems/0041/README.md#:memo:-note
[0041_ts]: ./problems/0041/ts/first_missing_positive.ts

<!-- 0070 -->

[0070]: https://leetcode.com/problems/climbing-stairs
[0070_note]: ./problems/0070/README.md#:memo:-note
[0070_go]: ./problems/0070/go/climbing_stairs.go

<!-- 0098 -->

[0098]: https://leetcode.com/problems/validate-binary-search-tree
[0098_note]: ./problems/0098/README.md#:memo:-note
[0098_ts]: ./problems/0098/ts/validate_binary_search_tree.ts
[0098_cpp]: ./problems/0098/cpp/validate_binary_search_tree.cpp

<!-- 0102 -->

[0102]: https://leetcode.com/problems/binary-tree-level-order-traversal
[0102_note]: ./problems/0102/README.md#:memo:-note
[0102_cpp]: ./problems/0102/cpp/binary_tree_level_order_traversal.cpp

<!-- 0104 -->

[0104]: https://leetcode.com/problems/maximum-depth-of-binary-tree
[0104_note]: ./problems/0104/README.md#:memo:-note
[0104_ts]: ./problems/0104/ts/maximum_depth_of_binary_tree.ts
[0104_cpp]: ./problems/0104/cpp/maximum_depth_of_binary_tree.cpp

<!-- 0105 -->

[0105]: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
[0105_note]: ./problems/0105/README.md#:memo:-note
[0105_ts]: ./problems/0105/ts/construct_binary_tree_from_preorder_and_inorder_traversal.ts

<!-- 0118 -->
[0118]: https://leetcode.com/problems/pascals-triangle
[0118_Note]: ./problems/0118/README.md#:memo:-note
[0118_cpp]: ./problems/0118/cpp/pascals_triangle.cpp

<!-- 0125 -->

[0125]: https://leetcode.com/problems/valid-palindrome
[0125_note]: ./problems/0125/README.md#:memo:-note
[0125_cpp]: ./problems/0125/cpp/valid_palindrome.cpp

<!-- 0147 -->
[0147]: https://leetcode.com/problems/insertion-sort-list
[0147_Note]: ./problems/0147/README.md#:memo:-note
[0147_cpp]: ./problems/0147/cpp/insertion_sort_list.cpp

<!-- 0206 -->

[0206]: https://leetcode.com/problems/reverse-linked-list
[0206_note]: ./problems/0206/README.md#:memo:-note
[0206_go]: ./problems/0206/go/reverse_linked_list.go

<!-- 0387 -->

[0387]: https://leetcode.com/problems/first-unique-character-in-a-string
[0387_note]: ./problems/0387/README.md#:memo:-note
[0387_cpp]: ./problems/0387/cpp/first_unique_character_in_a_string.cpp

<!-- 1768 -->

[1768]: https://leetcode.com/problems/merge-strings-alternately
[1768_note]: ./problems/1768/README.md#:memo:-note
[1768_cpp]: ./problems/1768/cpp/merge_strings_alternately.cpp



