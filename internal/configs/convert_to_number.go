package configs

import (
	"log"
	"strconv"
)

func ConvertToNumber(str string) int {
	value, err := strconv.Atoi(str)

	if err != nil {
		log.Fatalln("Failed Convert to number!")
	}

	return value
}
