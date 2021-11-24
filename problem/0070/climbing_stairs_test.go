package solution

import (
	"testing"
)

func TestClimbStairs(t *testing.T) {

	type params struct {
		n int
	}

	type testing struct {
		params
		result int
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

	for _, test := range tests {
		result, n := test.result, test.params.n
		// fmt.Printf("Input: %v, Output: %v\n", n, climbStairs(n))

		if ClimbStairs(n) != result {
			t.Errorf("[Wrong Answer] Input: %v, Output: %v, Expected: %v\n", n, ClimbStairs(n), result)
		}
	}
}
