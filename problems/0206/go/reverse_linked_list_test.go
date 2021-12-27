package solution

import (
	"fmt"
	"testing"

	"github.com/saltchang/leetcode/structs"
)

func Test_reverseList(t *testing.T) {

	type params struct {
		head []int
	}

	type testing struct {
		params
		answer []int
	}

	tests := []testing{
		{
			params{[]int{1, 2, 3, 4, 5}},
			[]int{5, 4, 3, 2, 1},
		},
		{
			params{[]int{1, 2}},
			[]int{2, 1},
		},
		{
			params{[]int{}},
			[]int{},
		},
	}

	fmt.Printf("\n=== Problem 0206 ===\n")

	for _, test := range tests {
		answer, head := test.answer, test.params.head

		fmt.Printf(
			"\nInput    : %v\nOutput   : %v\nExpected : %v\n",
			head,
			structs.ListToArrInt(reverseList(structs.ArrIntToList(head))),
			answer,
		)
	}

	fmt.Printf("\n")
}
