package configs

import (
	"encoding/json"
	"io"
	"log"
	"os"

	"github.com/haikelz/asmaul-husna-api/internal/entities"
)

func LoadData() []entities.AsmaulHusna {
	// Find the file first
	jsonFile, err := os.Open("internal/configs/asmaulhusna.json")

	if err != nil {
		log.Fatalln("Error while read file!", err)
	}

	defer jsonFile.Close()

	// Read JSON file
	fileData, _ := io.ReadAll(jsonFile)

	var data []entities.AsmaulHusna

	errLoad := json.Unmarshal(fileData, &data)

	if errLoad != nil {
		log.Fatalln("Error while parse data!", errLoad)
	}

	return data
}
