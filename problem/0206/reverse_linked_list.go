package solution

import (
	"github.com/saltchang/leetcode/structs"
)

type ListNode = structs.ListNode

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

func reverseList(head *ListNode) *ListNode {
	var tail *ListNode

	for head != nil {
		next := head.Next // Store the next
		head.Next = tail  // Break list, point to the tail
		tail = head       // Re-point the tail
		head = next       // Re-point the head
	}

	return tail
}
