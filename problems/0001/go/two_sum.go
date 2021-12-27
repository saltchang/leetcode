package solution

// Time: O(n)
func twoSum(nums []int, target int) []int {
	pair := make(map[int]int, len(nums))

	for index, value := range nums {
		if indexOfPair, hasBeenFound := pair[value]; hasBeenFound {
			return []int{indexOfPair, index}
		}
		pair[target-value] = index
	}

	return nil
}

// Time: O(n2)
// func twoSum(nums []int, target int) []int {
// 	result := []int{0, 1}

// 	for indexA, valueA := range nums {
// 		result[0] = indexA

// 		for indexB, valueB := range nums {
// 			result[1] = indexB

// 			if result[0] != result[1] && valueA+valueB == target {
// 				return result
// 			}
// 		}
// 	}

// 	return result
// }
