package entities

type EndpointsInfo struct {
	All    string `json:"all" validate:"required"`
	Urutan string `json:"urutan" validate:"required"`
	Latin  string `json:"latin" validate:"required"`
}

type HomeInfo struct {
	Author     string        `json:"author"`
	Repository string        `json:"repository"`
	Endpoints  EndpointsInfo `json:"endpoints"`
}
