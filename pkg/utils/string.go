package utils

import (
	"log"
	"path/filepath"
)

func AbsolutePath(path string) string {
	absPath, err := filepath.Abs(path)
	if err != nil {
		log.Fatalln(err)
	}

	return absPath
}
