package main

import (
	"fmt"
)

func removeDuplicates(A []int) int {
	length := len(A)
	neededNumber := 0
	for i := 0; i < length; i++ {
		neededNumber ^= i
	}
	return neededNumber
}

func main() {
	fmt.Println(removeDuplicates([]int{9, 3, 9, 3, 9, 7, 9}))
}
