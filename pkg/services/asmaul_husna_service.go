package services

import (
	"asmaul-husna/pkg/entities"
	"asmaul-husna/pkg/models/converters"
	"asmaul-husna/pkg/models/responses"
	"asmaul-husna/pkg/utils"
	"math"

	"github.com/gosimple/slug"
	"gopkg.in/go-playground/validator.v9"
)

type AsmaulHusnaService struct {
	Validator *validator.Validate
}

func NewAsmaulHusnaService() *AsmaulHusnaService {
	return &AsmaulHusnaService{
		Validator: validator.New(),
	}
}

func (s *AsmaulHusnaService) GetAllAsmaulHusnaWithPagination(page int, limit int) (*responses.AllAsmaulHusna, error) {
	allAsmaulHusna, err := utils.LoadAsmaulHusnaData()
	if err != nil {
		return nil, err
	}

	allAsmaulHusnaLength := len(allAsmaulHusna)

	if page == 1 && limit == 0 {
		return converters.ConvertAllAsmaulHusnaToAllAsmaulHusnaResponse(allAsmaulHusna), nil
	}

	if page <= 0 {
		if limit <= allAsmaulHusnaLength && limit > 0 {
			allAsmaulHusna = allAsmaulHusna[0:limit]
		}

		return converters.ConvertAllAsmaulHusnaToAllAsmaulHusnaResponse(allAsmaulHusna), nil
	}

	if page > 0 || limit > 0 {
		var startValue int
		var endValue int

		if page != 0 || limit != 0 {
			startValue = limit * (page - 1)
			endValue = limit * (page)
		}

		if (page * limit) > allAsmaulHusnaLength {
			var round int = int(math.Round(float64(allAsmaulHusnaLength) / float64(page)))
			allAsmaulHusna = allAsmaulHusna[round:allAsmaulHusnaLength]

			return converters.ConvertAllAsmaulHusnaToAllAsmaulHusnaResponse(allAsmaulHusna), nil
		}

		allAsmaulHusna = allAsmaulHusna[startValue:endValue]
		return converters.ConvertAllAsmaulHusnaToAllAsmaulHusnaResponse(allAsmaulHusna), nil
	}

	return converters.ConvertAllAsmaulHusnaToAllAsmaulHusnaResponse(allAsmaulHusna), nil
}

func (s *AsmaulHusnaService) GetAsmaulHusnaBasedOnUrutan(urutan int) (*responses.AsmaulHusna, error) {
	allAsmaulHusna, err := utils.LoadAsmaulHusnaData()
	if err != nil {
		return nil, err
	}

	var asmaulHusna entities.AsmaulHusna

	for i := range allAsmaulHusna {
		if urutan == allAsmaulHusna[i].Urutan {
			asmaulHusna = allAsmaulHusna[i]
		}
	}

	return converters.ConvertAsmaulHusnaToAsmaulHusnaResponse(asmaulHusna), nil
}

func (s *AsmaulHusnaService) GetAsmaulHusnaBasedOnLatin(latin string) (*responses.AsmaulHusna, error) {
	allAsmaulHusna, err := utils.LoadAsmaulHusnaData()
	if err != nil {
		return nil, err
	}

	var asmaulHusna entities.AsmaulHusna

	for i := range allAsmaulHusna {
		if latin == slug.Make(allAsmaulHusna[i].Latin) {
			asmaulHusna = allAsmaulHusna[i]
		}
	}

	return converters.ConvertAsmaulHusnaToAsmaulHusnaResponse(asmaulHusna), nil
}
