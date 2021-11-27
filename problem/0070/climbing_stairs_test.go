package solution

import (
	"fmt"
	"testing"
)

func Test_climbStairs(t *testing.T) {

	type params struct {
		n int
	}

	type testing struct {
		params
		answer int
	}

	tests := []testing{
		{
			params{n: 1},
			1,
		},
		{
			params{n: 2},
			2,
		},
		{
			params{n: 3},
			3,
		},
		{
			params{n: 4},
			5,
		},
		{
			params{n: 45},
			1836311903,
		},
	}

	fmt.Printf("\n=== Problem 0070 ===\n")

	for _, test := range tests {
		answer, n := test.answer, test.params.n

		fmt.Printf(
			"\nInput    : %v\nOutput   : %v\nExpected : %v\n",
			n,
			climbStairs(n),
			answer,
		)
	}

	fmt.Printf("\n")
}
