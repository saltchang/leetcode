package solution

import (
	"testing"

	"github.com/saltchang/leetcode/helper"
)

func TestTwoSum(t *testing.T) {

	type params struct {
		nums   []int
		target int
	}

	type testing struct {
		params
		result []int
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

	for _, test := range tests {
		result, nums, target := test.result, test.params.nums, test.params.target

		if !helper.ArrayEquals(twoSum(nums, target), result) {
			t.Errorf("\n[Wrong Answer]\nInput: %v %v\nOutput: %v\nExpected: %v\n", nums, target, twoSum(nums, target), result)
		}
	}
}
