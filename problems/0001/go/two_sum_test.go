package solution

import (
	"fmt"
	"testing"
)

func Test_twoSum(t *testing.T) {

	type params struct {
		nums   []int
		target int
	}

	type testing struct {
		params
		answer []int
	}

	tests := []testing{
		{
			params{nums: []int{2, 7, 11, 15}, target: 9},
			[]int{0, 1},
		},
		{
			params{nums: []int{3, 2, 4}, target: 6},
			[]int{1, 2},
		},
		{
			params{nums: []int{3, 3}, target: 6},
			[]int{0, 1},
		},
		{
			params{nums: []int{3, 2, 3}, target: 6},
			[]int{0, 2},
		},
		{
			params{nums: []int{-10, 7, 19, 15}, target: 9},
			[]int{0, 2},
		},
	}

	fmt.Printf("\n=== Problem 0001 ===\n")

	for _, test := range tests {
		answer, nums, target := test.answer, test.params.nums, test.params.target

		fmt.Printf(
			"\nInput    : %v  %v\nOutput   : %v\nExpected : %v\n",
			nums,
			target,
			twoSum(nums, target),
			answer,
		)
	}

	fmt.Printf("\n")
}
