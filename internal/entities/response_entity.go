package entities

type BaseResponse struct {
	StatusCode int `json:"statusCode"`
}

type HomeEndpoints struct {
	All    string `json:"all"`
	Urutan string `json:"urutan"`
	Latin  string `json:"latin"`
}

type Pagination struct {
	Data  []AsmaulHusna `json:"data"`
	Limit int           `json:"limit"`
	Page  int           `json:"page"`
}

type HomeResponse struct {
	Author     string        `json:"author"`
	Repository string        `json:"repository"`
	Endpoints  HomeEndpoints `json:"endpoints"`
}

type AllAsmaulHusnaResponse struct {
	BaseResponse
	Total int           `json:"total"`
	Data  []AsmaulHusna `json:"data"`
}

type AsmaulHusnaDetailResponse struct {
	BaseResponse
	Total int         `json:"total"`
	Data  AsmaulHusna `json:"data"`
}
