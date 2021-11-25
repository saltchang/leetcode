package helper

func ArrayEquals(arrA, arrB []int) bool {
	if len(arrA) != len(arrB) {
		return false
	}

	for index, value := range arrA {
		if value != arrB[index] {
			return false
		}
	}

	return true
}
