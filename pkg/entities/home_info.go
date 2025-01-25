package entities

type EndpointsInfo struct {
	All    string `json:"all" validate:"required"`
	Urutan string `json:"urutan" validate:"required"`
	Latin  string `json:"latin" validate:"required"`
}

type HomeInfo struct {
	Author     string        `json:"author" validate:"required"`
	Repository string        `json:"repository" validate:"required"`
	Endpoints  EndpointsInfo `json:"endpoints" validate:"required"`
}
