package requests

type AllAsmaulHusnaRequest struct {
	Page  int `query:"page" json:"page"`
	Limit int `query:"limit" json:"limit"`
}
