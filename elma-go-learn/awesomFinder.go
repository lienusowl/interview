package main

import (
	"fmt"
	"sort"
)

func finder(A []int) int {
	sort.Ints(A)
	length := len(A)

	if length == 0 {
		return 0
	}

	var checkIndex int
	for i := 1; i < length; i++ {
		if A[i] == A[checkIndex]+1 {
			checkIndex++
		}
	}

	return A[checkIndex] + 1
}

func main() {
	fmt.Println(finder([]int{1, 2, 3, 4, 6}))
}
