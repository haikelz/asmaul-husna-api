package converters

import (
	entities "asmaul-husna/pkg/entities"
	"asmaul-husna/pkg/models/responses"
)

func ConvertAsmaulHusnaToAsmaulHusnaResponse(asmaulHusna *entities.AsmaulHusna) *responses.AsmaulHusna {
	if asmaulHusna == nil {
		return nil
	}
	return &responses.AsmaulHusna{
		Urutan: asmaulHusna.Urutan,
		Arab:   asmaulHusna.Arab,
		Arti:   asmaulHusna.Arti,
		Latin:  asmaulHusna.Latin,
	}
}

func ConvertAllAsmaulHusnaToAllAsmaulHusnaResponse(allAsmaulHusna *[]entities.AsmaulHusna) []*responses.AsmaulHusna {
	var data []*responses.AsmaulHusna
	for i := range *allAsmaulHusna {
		data = append(data, ConvertAsmaulHusnaToAsmaulHusnaResponse(&(*allAsmaulHusna)[i]))
	}

	return data
}
