package responses

import "asmaul-husna/pkg/entities"

type AsmaulHusna struct {
	Urutan int    `json:"urutan"`
	Latin  string `json:"latin"`
	Arab   string `json:"arab"`
	Arti   string `json:"arti"`
}

type AllAsmaulHusna struct {
	Data []entities.AsmaulHusna `json:"data"`
}
