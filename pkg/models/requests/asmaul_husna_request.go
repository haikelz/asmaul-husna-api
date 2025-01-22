package requests

type AllAsmaulHusnaRequest struct {
	Page  int `query:"page" json:"page,omitempty"`
	Limit int `query:"limit" json:"limit,omitempty"`
}
