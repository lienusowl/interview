package main

import (
	"fmt"
	"sort"
)

func solution(A []int) int {
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
	if checkIndex == length-1 {
		return 1
	}
	return 0
}

func main() {
	fmt.Println(solution([]int{111, 6, 1, 5, 2, 3, 4}))
}
