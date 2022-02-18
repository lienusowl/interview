package main

import "fmt"

func rotateItOnK(A []int, K int) []int {
	length := len(A)
	K = K % length

	if length <= 1 {
		fmt.Println("хоть увертись, не изменится")
		return nil
	}

	A = append(A[length-K:length], A[0:length-K]...)

	return A
}

func main() {
	fmt.Println(rotateItOnK([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, 3))
	fmt.Println(rotateItOnK([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, 99))
	fmt.Println(rotateItOnK([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, 98))
	fmt.Println(rotateItOnK([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, 1))
}
