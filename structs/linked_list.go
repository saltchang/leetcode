package structs

type ListNode struct {
	Val  int
	Next *ListNode
}

// ListToArrInt converts a LinkedList to an []int
func ListToArrInt(head *ListNode) []int {
	arr := []int{}
	for head != nil {

		arr = append(arr, head.Val)
		head = head.Next
	}

	return arr
}

// ArrIntToList converts an []int to a LinkedList
func ArrIntToList(list []int) *ListNode {

	if len(list) == 0 {
		return nil
	}

	if len(list) == 1 {
		return &ListNode{
			Val:  list[0],
			Next: nil,
		}
	}

	return &ListNode{
		Val:  list[0],
		Next: ArrIntToList(list[1:]),
	}
}
