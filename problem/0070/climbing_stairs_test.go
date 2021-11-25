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

		if ClimbStairs(n) != result {
			t.Errorf("\n[Wrong Answer]\nInput: %v\nOutput: %v\nExpected: %v\n", n, ClimbStairs(n), result)
		}
	}
}
