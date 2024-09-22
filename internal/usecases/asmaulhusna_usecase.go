package usecases

import (
	"log"
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/gosimple/slug"
	"github.com/haikelz/asmaul-husna-api/internal/configs"
	"github.com/haikelz/asmaul-husna-api/internal/entities"
)

func GetAll() []entities.AsmaulHusna {
	var data []entities.AsmaulHusna = configs.LoadData()
	return data
}

func GetDataDasedOnUrutan(c *fiber.Ctx) entities.AsmaulHusna {
	data := configs.LoadData()
	asmaulHusna := []entities.AsmaulHusna{}

	urutan, err := strconv.Atoi(c.Params("urutan"))
	if err != nil {
		log.Fatalln("Failed convert string to number")
	}

	for i := range data {
		if data[i].Urutan == urutan {
			asmaulHusna = append(asmaulHusna, data[i])
		}
	}

	foundAsmaulHusna := asmaulHusna[0]
	return foundAsmaulHusna
}

func GetDataBasedOnLatin(c *fiber.Ctx) entities.AsmaulHusna {
	data := configs.LoadData()
	paramsLatin := slug.Make(c.Params("latin"))

	var asmaulHusna []entities.AsmaulHusna

	for i := range data {
		if slug.Make(asmaulHusna[i].Latin) == paramsLatin {
			asmaulHusna = append(asmaulHusna, data[i])
		}
	}

	foundAsmaulHusna := asmaulHusna[0]
	return foundAsmaulHusna
}
