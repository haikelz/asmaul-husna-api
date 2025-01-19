package converters

import (
	"asmaul-husna/pkg/entities"
	"asmaul-husna/pkg/models/responses"
)

func ConvertAsmaulHusnaToAsmaulHusnaResponse(asmaulHusna entities.AsmaulHusna) *responses.AsmaulHusna {
	return &responses.AsmaulHusna{
		Urutan: asmaulHusna.Urutan,
		Arab:   asmaulHusna.Arab,
		Arti:   asmaulHusna.Arti,
		Latin:  asmaulHusna.Latin,
	}
}

func ConvertAllAsmaulHusnaToAllAsmaulHusnaResponse(allAsmaulHusna []entities.AsmaulHusna) *responses.AllAsmaulHusna {
	return &responses.AllAsmaulHusna{
		Data: allAsmaulHusna,
	}
}
