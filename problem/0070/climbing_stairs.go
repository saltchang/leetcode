package solution

// Time: O(n)
func ClimbStairs(n int) int {
	a := 0
	b := 1

	for ; n > 0; n-- {
		a, b = b, a+b
	}

	return b
}
