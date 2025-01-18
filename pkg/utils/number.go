package utils

import (
	"strconv"
)

// An utility function to convert string to number
func ConvertStringToNumber(str string) int {
	convResult, err := strconv.Atoi(str)
	if err != nil {
		return 0
	}

	return convResult
}
