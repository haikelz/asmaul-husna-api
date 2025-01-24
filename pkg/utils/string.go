package utils

import (
	"log"
	"path/filepath"
)

// An utility function to format a path from relative to absolute path
func FormatToAbsolutePath(path string) string {
	absPath, err := filepath.Abs(path)
	if err != nil {
		log.Fatalln(err)
	}

	return absPath
}
