package usecases

import (
	"log"
	"strconv"

	"github.com/gofiber/fiber/v2"
	"github.com/gosimple/slug"
	"github.com/haikelz/asmaul-husna-api/internal/configs"
	"github.com/haikelz/asmaul-husna-api/internal/entities"
)

func GetAll(c *fiber.Ctx) []entities.AsmaulHusna {
	query := c.Queries()
	var data []entities.AsmaulHusna = configs.LoadData()

	if len(query["limit"]) != 0 || len(query["page"]) != 0 {
		var limit = configs.ConvertToNumber(query["limit"])

		if len(query["page"]) == 0 {
			if limit <= 99 {
				return data[0:limit]
			} else {
				return data
			}
		}

		var page = configs.ConvertToNumber(query["page"])

		var startValue int
		var endValue int

		if page != 0 || limit != 0 {
			startValue = limit * (page - 1)
			endValue = limit * (page)
		} else {
			startValue = 0
			endValue = limit
		}

		var slicedData []entities.AsmaulHusna = data[startValue:endValue]
		return slicedData
	} else {
		return data
	}
}

func GetDataBasedOnUrutan(c *fiber.Ctx) entities.AsmaulHusna {
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
